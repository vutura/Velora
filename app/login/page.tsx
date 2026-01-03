export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-6 text-ink">
      <div className="text-center">
        <h1
          className="text-3xl sm:text-4xl"
          style={{ fontFamily: '"SaolDisplay-Light", var(--font-geist-sans)' }}
        >
          Iniciar sesion
        </h1>
        <p className="mt-3 text-sm text-ink/70 sm:text-base">
          Aqui ira el login de Velora.
        </p>
      </div>
    </main>
  );
}
