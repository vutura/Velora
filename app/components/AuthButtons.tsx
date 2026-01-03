import Link from "next/link";

export default function AuthButtons() {
  return (
    <div className="velora-actions mt-10 flex flex-wrap justify-center gap-3 text-sm sm:text-base">
      <Link
        href="/register"
        className="velora-btn velora-btn-register rounded-full border border-ink/20 px-6 py-3 text-ink"
        style={{ fontFamily: '"FKGrotesk-Regular", var(--font-geist-sans)' }}
      >
        <span>Register</span>
      </Link>
      <Link
        href="/login"
        className="velora-btn velora-btn-login rounded-full border border-ink/20 px-6 py-3 text-ink"
        style={{ fontFamily: '"FKGrotesk-Regular", var(--font-geist-sans)' }}
      >
        <span>Sign in</span>
      </Link>
    </div>
  );
}
