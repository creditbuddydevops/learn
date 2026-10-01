"use client";

import { useCallback, useEffect, useRef } from "react";

// Extend window to include grecaptcha
declare global {
  interface Window {
    grecaptcha?: {
      enterprise: {
        ready: (cb: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

/**
 * Hook that loads reCAPTCHA Enterprise and provides an `executeRecaptcha` function.
 * Call `executeRecaptcha("LOGIN")` (or any action name) before submitting a form.
 * Returns the reCAPTCHA response token to send to your backend for verification.
 */
export function useRecaptcha() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    if (typeof window === "undefined") return;

    // Don't inject if already present
    if (document.querySelector(`script[src*="recaptcha/enterprise.js"]`)) {
      loaded.current = true;
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${SITE_KEY}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    loaded.current = true;
  }, []);

  const executeRecaptcha = useCallback(
    async (action: string): Promise<string | null> => {
      if (!window.grecaptcha) {
        console.warn("[reCAPTCHA] grecaptcha not loaded yet");
        return null;
      }

      return new Promise((resolve) => {
        window.grecaptcha!.enterprise.ready(async () => {
          try {
            const token = await window.grecaptcha!.enterprise.execute(SITE_KEY, {
              action,
            });
            resolve(token);
          } catch (err) {
            console.error("[reCAPTCHA] execute error:", err);
            resolve(null);
          }
        });
      });
    },
    []
  );

  return { executeRecaptcha };
}
