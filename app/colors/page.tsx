const COLORS = [
  { name: "Pink 1", hex: "#f77386", className: "bg-pink-1" },
  { name: "Pink 2", hex: "#fc90a0", className: "bg-pink-2" },
  { name: "Pink 3", hex: "#efccc3", className: "bg-pink-3" },
  { name: "Cream", hex: "#ebecc5", className: "bg-cream" },
  { name: "Cream Light", hex: "#f4f5d7", className: "bg-cream-light" },
  { name: "Mint", hex: "#c4eaa5", className: "bg-mint" },
  { name: "Green 1", hex: "#73a847", className: "bg-green-1" },
  { name: "Green 2", hex: "#167c0f", className: "bg-green-2" },
  { name: "Ink", hex: "#191813", className: "bg-ink" },
  { name: "Ink Soft", hex: "#3a382e", className: "bg-ink-soft" },
  { name: "Border Soft", hex: "#c9c7af", className: "bg-border-soft" },
  { name: "Danger Soft", hex: "#d96a6a", className: "bg-danger-soft" },
];

const GRADIENTS = [
  {
    name: "Velora Blush",
    css: "linear-gradient(135deg, #f77386 0%, #fc90a0 45%, #f4f5d7 100%)",
  },
  {
    name: "Mint Morning",
    css: "linear-gradient(135deg, #f4f5d7 0%, #c4eaa5 60%, #73a847 100%)",
  },
  {
    name: "Cream Sunset",
    css: "linear-gradient(135deg, #ebecc5 0%, #efccc3 55%, #f77386 100%)",
  },
  {
    name: "Ink Wash",
    css: "linear-gradient(135deg, #3a382e 0%, #191813 100%)",
  },
  {
    name: "Soft Bloom",
    css: "radial-gradient(circle at 20% 20%, #fc90a0 0%, #efccc3 38%, #ebecc5 70%, #f4f5d7 100%)",
  },
  {
    name: "Petal Haze",
    css: "linear-gradient(160deg, #f4f5d7 0%, #efccc3 50%, #fc90a0 100%)",
  },
  {
    name: "Garden Veil",
    css: "radial-gradient(circle at 80% 20%, #c4eaa5 0%, #f4f5d7 55%, #ebecc5 100%)",
  },
  {
    name: "Warm Ink",
    css: "linear-gradient(135deg, #191813 0%, #3a382e 40%, #c9c7af 100%)",
  },
  {
    name: "Blush Tide",
    css: "linear-gradient(120deg, #fc90a0 0%, #f77386 45%, #efccc3 100%)",
  },
];

const ROLE_SAMPLES = [
  {
    role: "Titulos principales",
    font: "SaolDisplay-Light",
    sample: "Tus mejores amigos, siempre cerca",
    sizeClass: "text-3xl sm:text-4xl",
  },
  {
    role: "Titulos secundarios",
    font: "SaolStandard-Regular",
    sample: "Publicaciones solo para tu circulo",
    sizeClass: "text-2xl sm:text-3xl",
  },
  {
    role: "Cuerpo / UI",
    font: "FKGrotesk-Regular",
    sample: "Comparte fotos, ideas y recuerdos con quienes mas quieres.",
    sizeClass: "text-base sm:text-lg",
  },
  {
    role: "Acentos suaves",
    font: "SaolText-Thin",
    sample: "Mejores amigos",
    sizeClass: "text-lg sm:text-xl",
  },
  {
    role: "Acentos alternos",
    font: "FKGrotesk-Thin",
    sample: "Solo visible para tu lista",
    sizeClass: "text-sm sm:text-base",
  },
];

const POST_SAMPLE = {
  title: "Tarde de picnic",
  author: "Luna",
  time: "hace 8 min",
  body: "Guardamos secretos y fotos bonitas. Solo para mejores amigos.",
  chip: "Mejores amigos",
  likes: "32",
  comments: "6",
};

const PROPOSED_ROLE_SAMPLES = [
  {
    role: "Titulo post",
    font: "SaolDisplay-Light",
    sample: "Tarde de picnic",
    sizeClass: "text-2xl sm:text-3xl",
  },
  {
    role: "Autor / tiempo",
    font: "FKGrotesk-Thin",
    sample: "Luna · hace 8 min",
    sizeClass: "text-xs sm:text-sm",
  },
  {
    role: "Cuerpo post",
    font: "FKGrotesk-Regular",
    sample: "Guardamos secretos y fotos bonitas. Solo para mejores amigos.",
    sizeClass: "text-base sm:text-lg",
  },
  {
    role: "Chip / estado",
    font: "SaolText-Thin",
    sample: "Mejores amigos",
    sizeClass: "text-xs sm:text-sm",
  },
  {
    role: "Meta (likes/comentarios)",
    font: "FKGrotesk-Thin",
    sample: "32 me gusta · 6 comentarios",
    sizeClass: "text-xs sm:text-sm",
  },
];

const PROPOSED_POST_SAMPLE = {
  title: "Tarde de picnic",
  author: "Luna",
  time: "hace 8 min",
  body: "Guardamos secretos y fotos bonitas. Solo para mejores amigos.",
  chip: "Mejores amigos",
  likes: "32",
  comments: "6",
};

const TIMELINE_POSTS = [
  {
    id: "p1",
    author: "Luna",
    handle: "@luna",
    time: "hace 8 min",
    body: "Guardamos secretos y fotos bonitas. Solo para mejores amigos.",
    chip: "Mejores amigos",
    likes: "32",
    comments: "6",
    isCloseFriends: true,
  },
  {
    id: "p2",
    author: "Mia",
    handle: "@mia",
    time: "hace 22 min",
    body: "Mate, musica suave y un paseo con el sol de la tarde.",
    chip: "Publico",
    likes: "18",
    comments: "3",
    isCloseFriends: false,
  },
  {
    id: "p3",
    author: "Noah",
    handle: "@noah",
    time: "hace 1 h",
    body: "Estoy preparando algo nuevo para compartir con ustedes.",
    chip: "Mejores amigos",
    likes: "44",
    comments: "9",
    isCloseFriends: true,
  },
];

export default function ColorsPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-10 text-ink sm:px-10">
      <section className="mx-auto max-w-5xl">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">
            Palette preview
          </p>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Cute Social Colors
          </h1>
          <p className="mt-2 max-w-xl text-sm text-ink/70 sm:text-base">
            Base background is Cream. Swatches show the palette for posts,
            accents, and buttons.
          </p>
        </header>

        <div className="grid gap-5 xs:grid-cols-2 md:grid-cols-3">
          {COLORS.map((color) => (
            <div
              key={color.name}
              className="rounded-2xl border border-ink/10 bg-white/40 p-4 shadow-[0_8px_20px_rgba(25,24,19,0.08)]"
            >
              <div
                className={`h-24 w-full rounded-xl ${color.className}`}
                style={{ backgroundColor: color.hex }}
                aria-label={`${color.name} swatch`}
              />
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="font-medium">{color.name}</span>
                <span className="font-mono text-ink/70">{color.hex}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <header className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">
            Gradients
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Gradientes para Velora
          </h2>
          <p className="mt-2 max-w-xl text-sm text-ink/70 sm:text-base">
            Opciones suaves para backgrounds, banners o estados especiales.
          </p>
        </header>

        <div className="grid gap-5 xs:grid-cols-2 lg:grid-cols-3">
          {GRADIENTS.map((gradient) => (
            <div
              key={gradient.name}
              className="rounded-2xl border border-ink/10 bg-white/40 p-4 shadow-[0_8px_20px_rgba(25,24,19,0.08)]"
            >
              <div
                className="h-28 w-full rounded-xl"
                style={{ backgroundImage: gradient.css }}
                aria-label={`${gradient.name} gradient`}
              />
              <div className="mt-4">
                <p className="text-sm font-medium">{gradient.name}</p>
                <p className="mt-1 text-xs text-ink/60 break-words">
                  {gradient.css}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <header className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">
            Proposal
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Jerarquia propuesta
          </h2>
          <p className="mt-2 max-w-xl text-sm text-ink/70 sm:text-base">
            Ajuste de pesos y tamaños para que el post sea el foco y los metadatos
            se lean en segundo plano.
          </p>
        </header>

        <div className="grid gap-4">
          {PROPOSED_ROLE_SAMPLES.map((item) => (
            <div
              key={item.role}
              className="rounded-2xl border border-ink/10 bg-cream-light/70 p-5 shadow-[0_8px_20px_rgba(25,24,19,0.08)]"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-ink/60">
                {item.role}
              </p>
              <p
                className={`mt-3 ${item.sizeClass} text-ink`}
                style={{ fontFamily: `"${item.font}", var(--font-geist-sans)` }}
              >
                {item.sample}
              </p>
              <p className="mt-2 text-xs text-ink/60">Fuente: {item.font}</p>
            </div>
          ))}
        </div>

        <article className="mt-8 rounded-3xl border border-border-soft bg-cream-light/80 p-6 shadow-[0_12px_24px_rgba(25,24,19,0.08)] sm:p-8">
          <header className="flex flex-wrap items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-pink-2/60" />
            <div>
              <p
                className="text-xs uppercase tracking-[0.12em] text-ink/60"
                style={{ fontFamily: '"FKGrotesk-Thin", var(--font-geist-sans)' }}
              >
                {PROPOSED_POST_SAMPLE.author}
              </p>
              <p className="text-xs text-ink/60">
                {PROPOSED_POST_SAMPLE.time}
              </p>
            </div>
            <span
              className="ml-auto rounded-full border border-pink-1/60 bg-white/60 px-3 py-1 text-xs text-ink/80"
              style={{ fontFamily: '"SaolText-Thin", var(--font-geist-sans)' }}
            >
              {PROPOSED_POST_SAMPLE.chip}
            </span>
          </header>

          <h3
            className="mt-5 text-2xl text-ink sm:text-3xl"
            style={{ fontFamily: '"SaolDisplay-Light", var(--font-geist-sans)' }}
          >
            {PROPOSED_POST_SAMPLE.title}
          </h3>
          <p
            className="mt-3 text-base text-ink/90 sm:text-lg"
            style={{ fontFamily: '"FKGrotesk-Regular", var(--font-geist-sans)' }}
          >
            {PROPOSED_POST_SAMPLE.body}
          </p>

          <footer className="mt-6 flex items-center gap-3 text-xs text-ink/70 sm:text-sm">
            <span
              className="rounded-full bg-mint/50 px-3 py-1"
              style={{ fontFamily: '"FKGrotesk-Thin", var(--font-geist-sans)' }}
            >
              {PROPOSED_POST_SAMPLE.likes} me gusta
            </span>
            <span
              className="rounded-full bg-cream px-3 py-1"
              style={{ fontFamily: '"FKGrotesk-Thin", var(--font-geist-sans)' }}
            >
              {PROPOSED_POST_SAMPLE.comments} comentarios
            </span>
          </footer>
        </article>
      </section>

      <section className="mx-auto mt-16 max-w-3xl">
        <header className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">
            Timeline sample
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Timeline en una columna
          </h2>
          <p className="mt-2 max-w-xl text-sm text-ink/70 sm:text-base">
            Ejemplo de feed centrado con composer y tarjetas apiladas.
          </p>
        </header>

        <div className="rounded-3xl border border-border-soft bg-cream-light/70 p-5 shadow-[0_12px_24px_rgba(25,24,19,0.08)] sm:p-6">
          <div className="rounded-2xl border border-ink/10 bg-white/70 p-4 shadow-[0_8px_18px_rgba(25,24,19,0.08)]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-pink-2/60" />
              <div className="flex-1 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm text-ink/60">
                ¿Que estas pensando?
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-ink/70">
              <span className="rounded-full bg-cream px-3 py-1">Foto</span>
              <span className="rounded-full bg-cream px-3 py-1">Texto</span>
              <span className="rounded-full bg-cream px-3 py-1">
                Mejores amigos
              </span>
            </div>
          </div>

          <div className="mt-6">
            {TIMELINE_POSTS.map((post, index) => (
              <article
                key={post.id}
                className="border-b border-ink/10 bg-cream-light/80 px-3 py-4 sm:px-4"
              >
                <div className="flex gap-3">
                  <div className="h-11 w-11 shrink-0 rounded-full bg-pink-2/60" />
                  <div className="min-w-0 flex-1">
                    <header className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <span
                          className="text-sm text-ink"
                          style={{
                            fontFamily:
                              '"FKGrotesk-Thin", var(--font-geist-sans)',
                          }}
                        >
                          {post.author}
                        </span>
                        <div className="mt-1 text-xs text-ink/60">
                          {post.handle} · {post.time}
                        </div>
                      </div>
                      {post.isCloseFriends && (
                        <span
                          className="rounded-full border border-green-1/40 bg-mint/70 px-2 py-1 text-[11px] text-ink/80"
                          style={{
                            fontFamily:
                              '"SaolText-Thin", var(--font-geist-sans)',
                          }}
                        >
                          {post.chip}
                        </span>
                      )}
                    </header>

                    <p
                      className="mt-2 text-sm text-ink/90 sm:text-base"
                      style={{
                        fontFamily: '"FKGrotesk-Light", var(--font-geist-sans)',
                      }}
                    >
                      {post.body}
                    </p>

                    <footer className="mt-3 flex items-center gap-4 text-xs text-ink/60 sm:text-sm">
                      <span
                        className="flex items-center gap-2"
                        style={{
                          fontFamily:
                            '"FKGrotesk-Thin", var(--font-geist-sans)',
                        }}
                      >
                        <span className="rounded-full bg-cream px-2 py-1">
                          ↩
                        </span>
                        {post.comments}
                      </span>
                      <span
                        className="flex items-center gap-2"
                        style={{
                          fontFamily:
                            '"FKGrotesk-Thin", var(--font-geist-sans)',
                        }}
                      >
                        <span className="rounded-full bg-cream px-2 py-1">
                          ↻
                        </span>
                        {Math.max(1, Number(post.likes) - 17)}
                      </span>
                      <span
                        className="flex items-center gap-2"
                        style={{
                          fontFamily:
                            '"FKGrotesk-Thin", var(--font-geist-sans)',
                        }}
                      >
                        <span className="rounded-full bg-mint/50 px-2 py-1">
                          ♥
                        </span>
                        {post.likes}
                      </span>
                    </footer>
                  </div>
                </div>

                {index < TIMELINE_POSTS.length - 1 && null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <header className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">
            Typo roles
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Jerarquia sugerida
          </h2>
          <p className="mt-2 max-w-xl text-sm text-ink/70 sm:text-base">
            Ejemplo de como se verian tus fuentes elegidas por rol.
          </p>
        </header>

        <div className="grid gap-4">
          {ROLE_SAMPLES.map((item) => (
            <div
              key={item.role}
              className="rounded-2xl border border-ink/10 bg-cream-light/70 p-5 shadow-[0_8px_20px_rgba(25,24,19,0.08)]"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-ink/60">
                {item.role}
              </p>
              <p
                className={`mt-3 ${item.sizeClass} text-ink`}
                style={{ fontFamily: `"${item.font}", var(--font-geist-sans)` }}
              >
                {item.sample}
              </p>
              <p className="mt-2 text-xs text-ink/60">Fuente: {item.font}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <header className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/70">
            Component sample
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Tarjeta de publicacion
          </h2>
          <p className="mt-2 max-w-xl text-sm text-ink/70 sm:text-base">
            Ejemplo de componente usando la paleta y tipografias elegidas.
          </p>
        </header>

        <article className="rounded-3xl border border-border-soft bg-cream-light/80 p-6 shadow-[0_12px_24px_rgba(25,24,19,0.08)] sm:p-8">
          <header className="flex flex-wrap items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-pink-2/60" />
            <div>
              <p
                className="text-sm uppercase tracking-[0.2em] text-ink/60"
                style={{ fontFamily: '"FKGrotesk-Thin", var(--font-geist-sans)' }}
              >
                {POST_SAMPLE.author}
              </p>
              <p className="text-xs text-ink/60">{POST_SAMPLE.time}</p>
            </div>
            <span
              className="ml-auto rounded-full bg-pink-1/80 px-3 py-1 text-xs text-ink"
              style={{ fontFamily: '"SaolText-Thin", var(--font-geist-sans)' }}
            >
              {POST_SAMPLE.chip}
            </span>
          </header>

          <h3
            className="mt-5 text-2xl text-ink sm:text-3xl"
            style={{ fontFamily: '"SaolDisplay-Light", var(--font-geist-sans)' }}
          >
            {POST_SAMPLE.title}
          </h3>
          <p
            className="mt-3 text-base text-ink/80 sm:text-lg"
            style={{ fontFamily: '"FKGrotesk-Regular", var(--font-geist-sans)' }}
          >
            {POST_SAMPLE.body}
          </p>

          <footer className="mt-6 flex items-center gap-4 text-sm text-ink/70">
            <span
              className="rounded-full bg-mint/70 px-3 py-1"
              style={{ fontFamily: '"FKGrotesk-Thin", var(--font-geist-sans)' }}
            >
              {POST_SAMPLE.likes} me gusta
            </span>
            <span
              className="rounded-full bg-cream px-3 py-1"
              style={{ fontFamily: '"FKGrotesk-Thin", var(--font-geist-sans)' }}
            >
              {POST_SAMPLE.comments} comentarios
            </span>
          </footer>
        </article>
      </section>

    </main>
  );
}
