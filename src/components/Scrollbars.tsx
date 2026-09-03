"use client";

import { useOverlayScrollbars } from "overlayscrollbars-react";
import { useEffect } from "react";

/**
 * Replaces the native page scrollbar with a themed OverlayScrollbars
 * instance on <html> — a thin bar that floats over content (no reserved
 * gutter, so it can never visually collide with the sticky header) and
 * auto-hides after scrolling/hover stops. Renders nothing itself.
 */
export default function Scrollbars() {
  const [initialize] = useOverlayScrollbars({
    options: {
      scrollbars: {
        theme: "os-theme-academy",
        autoHide: "leave",
        autoHideDelay: 500,
      },
      overflow: { x: "hidden" },
    },
    defer: true,
  });

  useEffect(() => {
    // Initializing on <body> keeps native document scrolling (and therefore
    // position: sticky on the header) intact; initializing on <html> wraps
    // the page in its own scroll container and breaks it.
    initialize({
      target: document.body,
      cancel: { body: false },
    });
  }, [initialize]);

  return null;
}
