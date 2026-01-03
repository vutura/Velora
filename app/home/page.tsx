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

export default function HomeTimelinePage() {
  return (
    <main className="min-h-screen bg-cream px-5 py-10 text-ink sm:px-8">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
              Velora
            </p>
            <h1
              className="mt-2 text-3xl sm:text-4xl"
              style={{ fontFamily: '"SaolDisplay-Light", var(--font-geist-sans)' }}
            >
              Your circle today
            </h1>
          </div>
          <button
            type="button"
            className="rounded-full border border-ink/15 bg-cream-light px-4 py-2 text-xs text-ink/70"
            style={{ fontFamily: '"FKGrotesk-Regular", var(--font-geist-sans)' }}
          >
            New post
          </button>
        </header>

        <section className="rounded-3xl border border-border-soft bg-cream-light/80 p-5 shadow-[0_12px_24px_rgba(25,24,19,0.08)] sm:p-6">
          <div className="rounded-2xl border border-ink/10 bg-white/70 p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-pink-2/60" />
              <div className="flex-1 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm text-ink/60">
                Share something gentle with your circle
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-ink/70">
              <span className="rounded-full bg-cream px-3 py-1">Photo</span>
              <span className="rounded-full bg-cream px-3 py-1">Note</span>
              <span className="rounded-full bg-mint/60 px-3 py-1">
                Close friends
              </span>
            </div>
          </div>

          <div className="mt-6">
            {TIMELINE_POSTS.map((post) => (
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
                        fontFamily:
                          '"FKGrotesk-Light", var(--font-geist-sans)',
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
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
