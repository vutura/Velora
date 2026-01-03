"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type AuthModalProps = {
  view: "login" | "register";
  onClose: () => void;
  onSwitch: () => void;
};

export default function AuthModal({ view, onClose, onSwitch }: AuthModalProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePrimary = () => {
    const isValid = email === "test@admin.com" && password === "admin123";
    if (!isValid) {
      setError("Invalid email or password.");
      return;
    }

    setError("");
    onClose();
    router.push("/home");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream/70 px-6 backdrop-blur-sm">
      <div
        className="w-full max-w-md rounded-3xl border border-border-soft bg-cream-light/90 p-6 text-ink shadow-[0_24px_48px_rgba(25,24,19,0.15)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
              Velora
            </p>
            <h3
              className="mt-2 text-2xl sm:text-3xl"
              style={{
                fontFamily: '"SaolDisplay-Light", var(--font-geist-sans)',
              }}
            >
              {view === "register" ? "Create account" : "Welcome back"}
            </h3>
          </div>
          <button
            type="button"
            className="velora-link rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-xs text-ink/70"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="mt-6 space-y-4 text-sm text-ink/70">
          <label className="block">
            <span className="text-xs uppercase tracking-[0.18em] text-ink/50">
              Email
            </span>
            <input
              type="email"
              placeholder="you@velora.app"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-sm text-ink outline-none focus:border-pink-2/60"
              style={{
                fontFamily: '"FKGrotesk-Regular", var(--font-geist-sans)',
              }}
            />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.18em] text-ink/50">
              Password
            </span>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-sm text-ink outline-none focus:border-pink-2/60"
              style={{
                fontFamily: '"FKGrotesk-Regular", var(--font-geist-sans)',
              }}
            />
          </label>
          {view === "register" && (
            <label className="block">
              <span className="text-xs uppercase tracking-[0.18em] text-ink/50">
                Name
              </span>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-sm text-ink outline-none focus:border-pink-2/60"
                style={{
                  fontFamily: '"FKGrotesk-Regular", var(--font-geist-sans)',
                }}
              />
            </label>
          )}
        </div>

        {error && (
          <div className="mt-3 flex items-center gap-2 text-xs" role="alert">
            <span className="h-1.5 w-1.5 rounded-full bg-danger-soft" />
            <span
              className="text-ink/60"
              style={{
                fontFamily: '"FKGrotesk-Regular", var(--font-geist-sans)',
              }}
            >
              {error}
            </span>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="velora-btn velora-btn-register rounded-full border border-ink/20 px-6 py-3 text-ink"
            onClick={handlePrimary}
            style={{
              fontFamily: '"FKGrotesk-Thin", var(--font-geist-sans)',
            }}
          >
            <span>{view === "register" ? "Register" : "Sign in"}</span>
          </button>
          <button
            type="button"
            className="velora-link text-xs text-ink/60"
            onClick={onSwitch}
          >
            {view === "register"
              ? "Already have an account? Sign in"
              : "New here? Create an account"}
          </button>
        </div>
      </div>
    </div>
  );
}
