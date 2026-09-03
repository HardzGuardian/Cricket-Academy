import type { ReactElement } from "react";

export function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M15 8.5h-1.6c-.66 0-1.15.13-1.47.44-.32.32-.43.79-.43 1.31V12h3.3l-.44 3.3H11.5V22H8.2v-6.7H6V12h2.2V9.6c0-1.13.32-2.06.99-2.75.68-.7 1.65-1.05 2.86-1.05H15v2.7z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="5.5" width="20" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 9.6l5 2.4-5 2.4V9.6z" fill="currentColor" />
    </svg>
  );
}

export const SOCIAL_ICONS: Record<string, (props: { className?: string }) => ReactElement> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
};
