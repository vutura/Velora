type AuthButtonsProps = {
  onRegister: () => void;
  onLogin: () => void;
};

export default function AuthButtons({ onRegister, onLogin }: AuthButtonsProps) {
  return (
    <div className="velora-actions mt-10 flex flex-wrap justify-center gap-3 text-sm sm:text-base">
      <button
        type="button"
        onClick={onRegister}
        className="velora-btn velora-btn-register rounded-full border border-ink/20 px-6 py-3 text-ink"
        style={{ fontFamily: '"FKGrotesk-Thin", var(--font-geist-sans)' }}
      >
        <span>Register</span>
      </button>
      <button
        type="button"
        onClick={onLogin}
        className="velora-btn velora-btn-login rounded-full border border-ink/20 px-6 py-3 text-ink"
        style={{ fontFamily: '"FKGrotesk-Thin", var(--font-geist-sans)' }}
      >
        <span>Sign in</span>
      </button>
    </div>
  );
}
