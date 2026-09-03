"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { PROGRAM_OPTIONS, SITE } from "@/lib/data";
import { useCopyToClipboard } from "@/lib/useCopyToClipboard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Select from "./ui/Select";

type FieldKey = "name" | "email" | "mobile";

const FIELDS: { key: FieldKey; label: string; type: string; placeholder: string }[] = [
  { key: "name", label: "Your name (required)", type: "text", placeholder: "Player or parent name" },
  { key: "email", label: "Your email (required)", type: "email", placeholder: "you@example.com" },
  { key: "mobile", label: "Mobile (required)", type: "tel", placeholder: "10-digit mobile number" },
];

function validate(key: FieldKey, val: string) {
  const v = val.trim();
  if (key === "name") return v.length < 2 ? "Please tell us your name." : "";
  if (key === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Enter a valid email address.";
  if (key === "mobile") return /^[0-9+\s-]{10,15}$/.test(v) ? "" : "Enter a 10-digit mobile number.";
  return "";
}

export default function Admission() {
  const [values, setValues] = useState<Record<FieldKey, string>>({ name: "", email: "", mobile: "" });
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [program, setProgram] = useState(PROGRAM_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  // Honeypot: real visitors never see this field, so anything filled in
  // here means a bot submitted the form. Silently rejected server-side.
  const [company, setCompany] = useState("");
  const { copy, copied } = useCopyToClipboard();

  const onChange = (key: FieldKey, v: string) => {
    setValues((s) => ({ ...s, [key]: v }));
    setErrors((s) => (s[key] ? { ...s, [key]: validate(key, v) } : s));
  };

  const onBlur = (key: FieldKey, v: string) => {
    setErrors((s) => ({ ...s, [key]: validate(key, v) }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<FieldKey, string>> = {};
    (["name", "email", "mobile"] as FieldKey[]).forEach((k) => {
      const msg = validate(k, values[k]);
      if (msg) next[k] = msg;
    });
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, program, message, company }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data?.errors) {
          setErrors(data.errors);
        } else {
          setSubmitError(data?.error || "Something went wrong. Please try again.");
        }
        return;
      }
      setSent(true);
    } catch {
      setSubmitError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setSent(false);
    setValues({ name: "", email: "", mobile: "" });
    setMessage("");
    setErrors({});
    setSubmitError(null);
  };

  const firstName = values.name.trim().split(" ")[0] || "there";

  return (
    <section id="admission" className="scroll-target max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,140px)]">
      <SectionHeading index="09" label="Contact & admission" />

      <div className="grid lg:grid-cols-2 gap-[clamp(28px,4vw,64px)] items-start">
        <Reveal>
          <h2 className="font-display font-extrabold text-[clamp(32px,4.4vw,54px)] leading-[1.02] tracking-[-0.035em] max-w-[18ch]">
            Need an expert?
          </h2>
          <p className="mt-5 text-[clamp(15px,1.3vw,18px)] leading-relaxed text-ink-soft max-w-[46ch]">
            You are more than welcome to leave your contact info and we will be in
            touch shortly.
          </p>

          <div className="mt-8 grid gap-0.5">
            {/* Phone: a real call link — tapping it dials on mobile. */}
            <a
              href={SITE.phoneHref}
              className="flex items-baseline justify-between gap-4.5 py-4.5 border-t border-ink/14 text-ink hover:text-accent"
            >
              <span className="text-[10.5px] tracking-[0.2em] uppercase text-muted">
                Phone
              </span>
              <span className="font-display font-semibold text-[clamp(16px,1.6vw,21px)] tracking-tight text-right">
                {SITE.phone}
              </span>
            </a>
            {/* Email: copies to clipboard instead of forcing open a mail
                client that may not be configured on this device. */}
            <button
              type="button"
              onClick={() => copy(SITE.email)}
              className="flex items-baseline justify-between gap-4.5 py-4.5 border-t border-ink/14 text-ink hover:text-accent w-full text-left cursor-pointer"
            >
              <span className="text-[10.5px] tracking-[0.2em] uppercase text-muted">
                {copied ? "Copied!" : "Email · tap to copy"}
              </span>
              <span className="font-display font-semibold text-[clamp(16px,1.6vw,21px)] tracking-tight text-right">
                {SITE.email}
              </span>
            </button>
          </div>

          <div className="mt-6.5 rounded-[20px] overflow-hidden border border-ink/14 bg-cream-2">
            <iframe
              src={SITE.mapEmbedSrc}
              title={`Map showing ${SITE.name} at Cross Maidan, Churchgate`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full h-[240px] border-0"
            />
            <a
              href={SITE.mapsHref}
              target="_blank"
              rel="noopener"
              className="block p-6 text-ink border-t border-ink/14 transition-colors hover:bg-cream"
            >
              <div className="text-[10.5px] tracking-[0.2em] uppercase text-muted">
                Ground address
              </div>
              <div className="mt-2.5 text-base leading-relaxed max-w-[34ch]">{SITE.address}</div>
              <div className="mt-3.5 text-[11.5px] font-bold tracking-[0.14em] uppercase text-accent">
                Get directions →
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal className="bg-ink text-cream rounded-3xl p-[clamp(24px,3vw,40px)]">
          {sent ? (
            <div className="min-h-[380px] flex flex-col justify-center gap-4.5 animate-pop-in">
              <div className="w-14.5 h-14.5 rounded-full bg-accent grid place-items-center text-2xl">✓</div>
              <h3 className="font-display font-semibold text-3xl tracking-tight">
                Enquiry noted, {firstName}.
              </h3>
              <p className="text-[15px] leading-relaxed text-cream/70 max-w-[40ch]">
                A coach will call you on {values.mobile || "your number"} to fix a trial
                slot.
              </p>
              <motion.button
                type="button"
                onClick={reset}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 420, damping: 26 }}
                className="justify-self-start self-start bg-transparent border border-cream/30 text-cream py-3.5 px-5.5 rounded-full cursor-pointer text-[11.5px] font-bold tracking-[0.14em] uppercase hover:bg-cream/12"
              >
                Send another
              </motion.button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="relative grid gap-4">
              <div>
                <div className="text-[10.5px] tracking-[0.2em] uppercase text-accent font-bold">
                  Enquiry form
                </div>
                <h3 className="mt-2.5 font-display font-semibold text-[clamp(22px,2.2vw,28px)] tracking-tight">
                  Book a free trial session
                </h3>
              </div>

              {/* Honeypot — visually hidden (not type="hidden", which some
                  bots specifically skip), never focusable by keyboard or
                  screen readers, real visitors never encounter it. */}
              <label
                aria-hidden="true"
                className="absolute w-px h-px overflow-hidden opacity-0 pointer-events-none -z-10"
                style={{ clip: "rect(0,0,0,0)" }}
              >
                Company
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </label>

              {FIELDS.map((f) => (
                <label key={f.key} className="grid gap-2">
                  <span className="text-[10.5px] tracking-[0.16em] uppercase text-cream/60">
                    {f.label}
                  </span>
                  <input
                    type={f.type}
                    value={values[f.key]}
                    onChange={(e) => onChange(f.key, e.target.value)}
                    onBlur={(e) => onBlur(f.key, e.target.value)}
                    placeholder={f.placeholder}
                    className={`w-full bg-cream/6 border rounded-xl py-3.5 px-4 text-[15px] text-cream outline-none transition-colors focus:border-accent focus:bg-cream/10 ${
                      errors[f.key] ? "border-accent-soft" : "border-cream/20"
                    }`}
                  />
                  {errors[f.key] && (
                    <span className="text-xs text-accent-soft animate-rise-sm">
                      {errors[f.key]}
                    </span>
                  )}
                </label>
              ))}

              <div className="grid gap-2">
                <span className="text-[10.5px] tracking-[0.16em] uppercase text-cream/60">
                  Interested in
                </span>
                <Select
                  value={program}
                  onValueChange={setProgram}
                  options={PROGRAM_OPTIONS}
                  label="Interested in"
                />
              </div>

              <label className="grid gap-2">
                <span className="text-[10.5px] tracking-[0.16em] uppercase text-cream/60">
                  Message
                </span>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Player's age and experience so far"
                  className="w-full bg-cream/6 border border-cream/20 rounded-xl py-3.5 px-4 text-[15px] text-cream outline-none resize-y focus:border-accent"
                />
              </label>

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={submitting ? undefined : { scale: 1.015 }}
                whileTap={submitting ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 420, damping: 26 }}
                className="mt-1.5 w-full bg-accent text-cream border-0 py-4.5 rounded-full cursor-pointer text-xs font-bold tracking-[0.16em] uppercase transition-colors hover:bg-cream hover:text-ink disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Send enquiry"}
              </motion.button>
              {submitError && (
                <p className="text-xs leading-relaxed text-accent-soft animate-rise-sm m-0">
                  {submitError}
                </p>
              )}
              <p className="text-xs leading-relaxed text-cream/45 m-0">
                We&apos;ll only use these details to get in touch about your trial.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
