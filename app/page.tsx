import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background with tron grid */}
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 tron-grid grid-pulse" />

        {/* Floating world decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/6 w-40 h-40 rounded-full bg-[var(--vibeland-primary)]/5 blur-3xl world-float" />
          <div className="absolute bottom-1/3 right-1/5 w-56 h-56 rounded-full bg-[var(--vibeland-accent)]/5 blur-3xl world-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-[var(--spectrum-primary)]/5 blur-3xl world-float" style={{ animationDelay: '0.7s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Status indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibeland-primary)]/10 border border-[var(--vibeland-primary)]/30 rounded-full text-[var(--vibeland-primary)] text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--vibeland-primary)] animate-pulse" />
            Concept: not yet playable
          </div>

          {/* World orb visual */}
          <div className="world-orb mx-auto mb-8 world-float">
            <span className="text-sm font-mono">VL</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-vibeland">The Sovereign</span>
            <br />
            <span className="text-[var(--text-primary)]">Metaverse</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
            Build your world. Own your space. VIBELAND is an immersive 3D
            metaverse powered by the Sovereign Stack mesh network.
            A concept for a Tron-inspired, multiplayer, sovereign world. Not yet playable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.alphaprotocol.network/join" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get updates
            </a>
            <Link href="/features" className="btn-secondary">
              How It Works
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[var(--vibeland-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-vibeland mb-2">8</div>
              <div className="text-sm text-[var(--text-muted)]">Building Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-vibeland mb-2">4</div>
              <div className="text-sm text-[var(--text-muted)]">Avatar Systems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-vibeland mb-2">3D</div>
              <div className="text-sm text-[var(--text-muted)]">Immersive Worlds</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--vibeland-primary)] mb-2">Concept</div>
              <div className="text-sm text-[var(--text-muted)]">Multiplayer (planned)</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is VIBELAND */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What is <span className="text-gradient-vibeland">VIBELAND</span>?
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A Tron-inspired virtual environment where your projects come alive.
              Walk through your codebase. Collaborate with AI agents. Own your digital space.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--vibeland-primary)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--vibeland-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--vibeland-light)] mb-2">Explore</h3>
              <p className="text-[var(--text-secondary)]">
                Navigate through a multi-level circular architecture. Walk the Command Center,
                workspace bays, and project buildings in full 3D.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--spectrum-primary)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--spectrum-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--vibeland-light)] mb-2">Build</h3>
              <p className="text-[var(--text-secondary)]">
                Every project gets its own themed building. Dev towers, creative studios,
                research labs, command centers — each with unique interiors.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--vibe-primary)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--vibe-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--vibeland-light)] mb-2">Collaborate</h3>
              <p className="text-[var(--text-secondary)]">
                Planned real-time multiplayer: seeing other players, sharing equipment, and working alongside AI agents in shared spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-vibeland">Multi-Level</span> Architecture
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                VIBELAND is built as a circular, multi-level space inspired by Tron&apos;s
                aesthetic. Every level serves a purpose, every building tells a story.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--vibeland-primary)] mt-1">&#9650;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Command Center</strong> — Elevated
                    platform at Y=80 with hologram core and NORA AI presence
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--vibeland-primary)] mt-1">&#9632;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Workspace Level</strong> — Ring-shaped
                    floor with 8 dedicated agent workspace bays
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--vibeland-primary)] mt-1">&#9660;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Ground Level</strong> — Project
                    buildings, walkways, and the open world grid
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[var(--vibeland-light)] mb-6">Spatial Layout</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--vibeland-primary)]/10 flex items-center justify-center text-[var(--vibeland-primary)] font-mono text-sm">
                    Y80
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">Command Center</div>
                    <div className="text-sm text-[var(--text-muted)]">NORA hologram, compass grid, central spire</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-[var(--vibeland-primary)]/30 ml-6" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--spectrum-primary)]/10 flex items-center justify-center text-[var(--spectrum-primary)] font-mono text-sm">
                    Y65
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">Workspace Ring</div>
                    <div className="text-sm text-[var(--text-muted)]">8 sector bays, agent stations, ceiling at Y77</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-[var(--vibeland-primary)]/30 ml-6" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--vibe-primary)]/10 flex items-center justify-center text-[var(--vibe-primary)] font-mono text-sm">
                    Y0
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">Ground World</div>
                    <div className="text-sm text-[var(--text-muted)]">Project buildings, Tron grid, open exploration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              8 <span className="text-gradient-vibeland">Building Types</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Every project is automatically categorized and assigned a themed building
              with unique colors, interiors, and visual identity.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Dev Tower", desc: "Code-heavy projects", color: "#00b4ff" },
              { name: "Creative Studio", desc: "Design & content", color: "#ff9d3c" },
              { name: "Infrastructure", desc: "Networks & systems", color: "#ff4242" },
              { name: "Research Lab", desc: "AI, ML & data", color: "#c267ff" },
              { name: "Command", desc: "HQ & central ops", color: "#00ffff" },
              { name: "Bank", desc: "Finance & treasury", color: "#b8a46e" },
              { name: "Casino", desc: "Entertainment", color: "#ff2d78" },
              { name: "Gallery", desc: "Art & exhibitions", color: "#c8a84a" },
            ].map((building) => (
              <div
                key={building.name}
                className="p-4 rounded-lg border border-[var(--dark-border)] bg-[var(--dark-card)] hover:border-[var(--vibeland-primary)] transition-all hover:-translate-y-1"
              >
                <div
                  className="w-3 h-3 rounded-full mb-3"
                  style={{ background: building.color, boxShadow: `0 0 12px ${building.color}60` }}
                />
                <div className="font-semibold text-[var(--text-primary)] text-sm">{building.name}</div>
                <div className="text-xs text-[var(--text-muted)] mt-1">{building.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sovereign Stack Position */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Part of the <span className="text-gradient-gold">Sovereign Stack</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              VIBELAND is the immersive layer where the entire Sovereign Stack
              comes to life in 3D.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Alpha Protocol", desc: "Protocol Foundation", color: "#dc2626" },
              { name: "Omega Wireless", desc: "Hardware Foundation", color: "#f97316" },
              { name: "Vibertas", desc: "Sovereign OS", color: "#eab308" },
              { name: "VIBE Token", desc: "Economics", color: "#22c55e" },
              { name: "VIBELAND", desc: "Metaverse", active: true, color: "#3b82f6" },
              { name: "Spectrum Galactic", desc: "Connectivity", color: "#8b5cf6" },
              { name: "Pythia AI", desc: "Intelligence", color: "#6366f1" },
            ].map((item) => (
              <div
                key={item.name}
                className={`p-4 rounded-lg border ${
                  item.active
                    ? "bg-[var(--vibeland-primary)]/10 border-[var(--vibeland-primary)] glow-vibeland"
                    : "bg-[var(--dark-card)] border-[var(--dark-border)]"
                }`}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full mb-2"
                  style={{ background: item.color }}
                />
                <div className={`font-semibold text-sm ${item.active ? "text-[var(--vibeland-primary)]" : "text-[var(--text-primary)]"}`}>
                  {item.name}
                </div>
                <div className="text-xs text-[var(--text-muted)]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibeland-primary)]/10 border border-[var(--vibeland-primary)]/30 rounded-full text-[var(--vibeland-primary)] text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--vibeland-primary)] animate-pulse" />
            Concept, planned for Vibertas OS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your World <span className="text-gradient-vibeland">Awaits</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            The idea is for VIBELAND to run inside Vibertas, which is in development. Every project would become a building and every team member an avatar. VIBELAND is a concept and is not yet playable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.alphaprotocol.network/join" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get updates
            </a>
            <Link href="/features" className="btn-secondary">
              See All Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
