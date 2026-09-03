"use client";

import { useCallback, useRef, useState } from "react";

/**
 * Copies text to the clipboard and exposes a `copied` flag that resets
 * itself after `resetAfterMs`. Falls back to a hidden textarea +
 * document.execCommand("copy") when the async Clipboard API isn't
 * available (e.g. non-HTTPS contexts).
 */
export function useCopyToClipboard(resetAfterMs = 1600) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(
    async (text: string) => {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        }
        setCopied(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), resetAfterMs);
        return true;
      } catch {
        return false;
      }
    },
    [resetAfterMs]
  );

  return { copy, copied };
}
