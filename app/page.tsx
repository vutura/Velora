'use client';
import AuthButtons from "./components/AuthButtons";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-ink">
      <div className="velora-hero">
        <h1
          className="text-center text-4xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ fontFamily: '"SaolDisplay-Light", var(--font-geist-sans)' }}
        >
          Welcome to Velora
        </h1>
        <h2
          className="mt-2 text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl"
          style={{ fontFamily: "SaolStandard-Regular" }}
        >
          soft spaces for close circles.
        </h2>
      </div>
      <AuthButtons />
    </div>
  );
}
