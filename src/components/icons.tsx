import { cn } from "@/lib/utils";

type IconProps = { className?: string };

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5", className)} aria-hidden="true" fill="currentColor">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.5 2 2 6.48 2 12.01c0 1.76.46 3.48 1.34 5L2 22l5.14-1.34A10 10 0 0 0 12.04 22C17.56 22 22.1 17.52 22.1 12S21.6 6.48 19.05 4.91Zm-7 15.23c-1.58 0-3.13-.42-4.49-1.22l-.32-.19-3.05.8.82-2.97-.21-.34a8.16 8.16 0 0 1-1.26-4.36c0-4.54 3.72-8.24 8.3-8.24 2.22 0 4.3.86 5.87 2.42a8.18 8.18 0 0 1 2.43 5.84c0 4.54-3.73 8.26-8.1 8.26Zm4.55-6.18c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.12-.56.12-.17.25-.64.8-.79.97-.14.16-.3.18-.54.06-.25-.12-1.04-.38-1.98-1.21-.73-.65-1.22-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.3.37-.44.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5", className)} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5", className)} fill="currentColor" aria-hidden="true">
      <path d="M14.2 3h2.1c.2 1.8 1.3 3.4 2.9 4.3V9.6c-1.1.1-2.2-.1-3.2-.7v5.6c0 3.2-2.6 5.6-5.9 5.6S4.2 17.7 4.2 14.5c0-3.1 2.5-5.6 5.7-5.6.3 0 .6 0 .9.1v2.5a3.3 3.3 0 0 0-.9-.1c-1.7 0-3.1 1.4-3.1 3.1s1.4 3.2 3.2 3.2 3.1-1.4 3.1-3.2V3Z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5", className)} fill="currentColor" aria-hidden="true">
      <path d="M14.8 8.5h2.4V5.4h-2.4c-2.3 0-3.8 1.6-3.8 4v1.6H8.6v3.1h2.4V21h3.2v-6.9h2.6l.5-3.1h-3.1V9.7c0-.7.3-1.2 1.6-1.2Z" />
    </svg>
  );
}

export function CakeMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5", className)} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6.5 14.5c0-2.4 2.4-4 5.5-4s5.5 1.6 5.5 4V19H6.5v-4.5Z" strokeLinejoin="round" />
      <path d="M9 10.6C9.5 8.8 10.6 7.7 12 7.7s2.5 1.1 3 2.9" strokeLinecap="round" />
      <path d="M12 6.4V4.8" strokeLinecap="round" />
    </svg>
  );
}
