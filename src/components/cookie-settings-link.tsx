"use client";

type CookiebotApi = {
  renew: () => void;
};

declare global {
  interface Window {
    Cookiebot?: CookiebotApi;
  }
}

export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className ?? "text-left hover:text-foreground"}
      onClick={() => window.Cookiebot?.renew()}
    >
      Politică Cookies
    </button>
  );
}
