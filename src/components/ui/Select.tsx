"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { motion } from "motion/react";
import { useState } from "react";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ type: "spring", stiffness: 420, damping: 30 }}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M4 12l6 6L20 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Select({
  value,
  onValueChange,
  options,
  label,
}: {
  value: string;
  onValueChange: (v: string) => void;
  options: string[];
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange} open={open} onOpenChange={setOpen}>
      <SelectPrimitive.Trigger
        aria-label={label}
        className="w-full flex items-center justify-between gap-3 bg-cream/6 border border-cream/20 rounded-xl py-3.5 px-4 text-[15px] text-cream outline-none transition-colors hover:bg-cream/10 focus:border-accent data-[state=open]:border-accent data-[state=open]:bg-cream/10"
      >
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon className="text-cream/60">
          <ChevronIcon open={open} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={8}
          align="start"
          className="z-100 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border border-cream/14 bg-ink shadow-[0_20px_44px_-12px_rgba(0,0,0,0.5)]"
        >
          <SelectPrimitive.Viewport className="p-1.5">
            {options.map((o) => (
              <SelectPrimitive.Item
                key={o}
                value={o}
                className="relative flex items-center gap-2.5 rounded-lg py-3 pl-3 pr-8 text-[14px] text-cream/85 outline-none cursor-pointer select-none data-[highlighted]:bg-accent/15 data-[highlighted]:text-cream data-[state=checked]:text-accent"
              >
                <SelectPrimitive.ItemText>{o}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute right-3 inline-flex items-center text-accent">
                  <CheckIcon />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
