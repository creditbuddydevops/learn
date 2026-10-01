"use client";

import React, { useState, useEffect } from "react";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    marketing: false,
    analytics: true,
    personalization: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cb_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cb_cookie_consent", "all");
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cb_cookie_consent", "minimal");
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleSaveSelected = () => {
    localStorage.setItem("cb_cookie_consent", JSON.stringify(preferences));
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible && !showSettings) return null;

  return (
    <>
      {/* Banner Card */}
      {isVisible && !showSettings && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-black/10 transition-all duration-300 animate-in fade-in slide-in-from-bottom-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-[#101010]">
              Cookie preferences
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              aria-label="Close cookies"
              className="text-black/40 hover:text-black p-1 text-sm rounded-full"
            >
              ✕
            </button>
          </div>

          <p className="text-sm text-[#101010]/80 leading-relaxed mb-6">
            We use functional and analytical cookies to understand how our educational materials are accessed and improve the CreditBuddy Learn experience.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowSettings(true)}
              className="px-4 py-2 text-xs font-semibold rounded-full border border-black/20 text-[#101010] hover:bg-black/5 transition-colors"
            >
              Settings
            </button>

            <button
              type="button"
              onClick={handleRejectAll}
              className="px-4 py-2 text-xs font-semibold rounded-full bg-black/5 text-[#101010] hover:bg-black/10 transition-colors"
            >
              Reject optional
            </button>

            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-5 py-2 text-xs font-semibold rounded-full bg-[#21105b] text-white hover:bg-[#05aa38] shadow-sm transition-colors ml-auto"
            >
              Accept all
            </button>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-black/10">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/10">
              <h2 className="text-2xl font-bold text-[#101010]">
                Privacy Preferences
              </h2>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="text-black/40 hover:text-black text-lg p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#101010]/70 mb-6">
              Configure your preferences below. Essential cookies are required to preserve session and accessibility settings.
            </p>

            <div className="space-y-4 mb-8">
              {/* Essential */}
              <div className="flex items-center justify-between p-3.5 bg-black/[0.03] rounded-2xl">
                <div>
                  <div className="font-semibold text-sm text-[#101010]">
                    Essential cookies
                  </div>
                  <div className="text-xs text-black/50">
                    Required for core website navigation and security.
                  </div>
                </div>
                <span className="text-xs font-semibold text-black/40 bg-black/5 px-2.5 py-1 rounded-full">
                  Required
                </span>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between p-3.5 bg-black/[0.03] rounded-2xl">
                <div>
                  <div className="font-semibold text-sm text-[#101010]">
                    Analytics cookies
                  </div>
                  <div className="text-xs text-black/50">
                    Help us improve curriculum topics and track progress.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  className="w-5 h-5 accent-[#21105b] cursor-pointer"
                />
              </div>

              {/* Personalization */}
              <div className="flex items-center justify-between p-3.5 bg-black/[0.03] rounded-2xl">
                <div>
                  <div className="font-semibold text-sm text-[#101010]">
                    Personalization
                  </div>
                  <div className="text-xs text-black/50">
                    Remembers your learning track progress and preferences.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.personalization}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      personalization: e.target.checked,
                    })
                  }
                  className="w-5 h-5 accent-[#21105b] cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-black/10 gap-3">
              <button
                type="button"
                onClick={handleRejectAll}
                className="px-4 py-2.5 text-xs font-semibold rounded-full border border-black/20 text-[#101010] hover:bg-black/5"
              >
                Reject optional
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSaveSelected}
                  className="px-4 py-2.5 text-xs font-semibold rounded-full bg-black/5 text-[#101010] hover:bg-black/10"
                >
                  Save selection
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 text-xs font-semibold rounded-full bg-[#21105b] text-white hover:bg-[#05aa38] shadow-sm"
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
