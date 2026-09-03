"use client";

import { useEffect } from "react";

const SELECTOR = ".scroll-target";
const ACTIVE_CLASS = "is-target";

function applyHash(hash: string) {
  document
    .querySelectorAll(`${SELECTOR}.${ACTIVE_CLASS}`)
    .forEach((el) => el.classList.remove(ACTIVE_CLASS));

  const id = hash.replace(/^#/, "");
  if (!id) return;

  const el = document.getElementById(id);
  if (el?.matches(SELECTOR)) {
    el.classList.add(ACTIVE_CLASS);
  }
}

/**
 * JS-side companion to the `.scroll-target:target` CSS rule (see the
 * SCROLL SUBSYSTEM comment in globals.css). :target only reacts to real
 * browser navigation -- typing a URL with a hash, a hard refresh, browser
 * back/forward. Next.js's <Link> intercepts same-page hash clicks (the
 * header nav, the "Contact" button, etc.), calls preventDefault, and
 * updates the URL via history.pushState instead -- which fires neither a
 * real navigation nor even a `hashchange` event, so :target and
 * `hashchange` listeners both silently miss it. Confirmed by testing: the
 * common case (clicking a nav link while already on the page) hit this
 * gap, leaving the full section padding in place instead of the tightened
 * "just jumped here" spacing.
 * This listens for the click directly and reads the anchor's `href`
 * attribute itself, independent of whatever routing Next.js does with it,
 * mirroring the same "which section is this heading to" decision by
 * toggling a plain `is-target` class that the CSS rule also matches.
 */
export default function HashTargetSync() {
  useEffect(() => {
    applyHash(window.location.hash);

    const onHashChange = () => applyHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      if (!href || /^(https?:|mailto:|tel:)/.test(href)) return;

      // Same-page navigation only -- "/#admission", "#admission", or a
      // hash-less "/" (e.g. the logo). A click through to a different
      // route (e.g. "/programs") is left alone: its target section, if
      // any, doesn't exist in this DOM yet, and any stale .is-target left
      // behind on this page's sections is moot once React unmounts them.
      const hashIndex = href.indexOf("#");
      const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
      const samePage = path === "" || path === "/" || path === window.location.pathname;
      if (!samePage) return;

      applyHash(hashIndex === -1 ? "" : href.slice(hashIndex));
    };
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
