"use client";

type CookiebotApi = {
  renew: () => void;
};

declare global {
  interface Window {
    Cookiebot?: CookiebotApi;
  }
}

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      className="text-left hover:text-foreground"
      onClick={() => window.Cookiebot?.renew()}
    >
      Politică Cookies
    </button>
  );
}
