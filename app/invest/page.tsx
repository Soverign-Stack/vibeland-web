import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Invest",
  description: "Invest in VIBELAND and the Sovereign Stack ecosystem. Build the sovereign metaverse.",
};

export default function InvestPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 tron-grid grid-pulse" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-vibeland">Invest</span> in VIBELAND
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            The sovereign metaverse is being built. Two phases already at 92%.
            Join the Sovereign Stack ecosystem.
          </p>
        </div>
      </section>

      {/* Why VIBELAND */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-gradient-vibeland">VIBELAND</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--vibeland-primary)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--vibeland-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--vibeland-light)] mb-2">Production-Ready</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Not a concept. VIBELAND is running code — 28+ React Three Fiber components,
                Rust WebSocket backend, spatial physics engine, and multiplayer infrastructure.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--vibe-primary)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--vibe-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--vibeland-light)] mb-2">Sovereign Infrastructure</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Runs on the Sovereign Stack mesh — no corporate cloud dependency.
                Your virtual space runs on hardware you own. True digital sovereignty.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--sovereign-gold)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--sovereign-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--vibeland-light)] mb-2">Full Ecosystem</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                VIBELAND is one layer of seven. Protocol, hardware, OS, token economics,
                satellite connectivity, and AI intelligence all feed into your virtual world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Built */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What&apos;s <span className="text-gradient-vibeland">Already Built</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                VIBELAND isn&apos;t a roadmap pitch. The core metaverse is running today
                inside the Vibertas dashboard.
              </p>
              <div className="space-y-4">
                {[
                  { stat: "28+", label: "React Three Fiber components" },
                  { stat: "600+", label: "Lines of spatial collision code" },
                  { stat: "800+", label: "Lines of avatar system code" },
                  { stat: "8", label: "Dynamic building types" },
                  { stat: "4", label: "Avatar systems with animations" },
                  { stat: "10Hz", label: "WebSocket multiplayer sync" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-[var(--vibeland-primary)] min-w-[60px]">{item.stat}</div>
                    <div className="text-sm text-[var(--text-secondary)]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[var(--dark-card)] border border-[var(--sovereign-gold)] rounded-2xl p-8 glow-gold">
              <h3 className="text-lg font-semibold text-[var(--sovereign-gold)] mb-6">Sovereign Stack Ecosystem</h3>
              <div className="space-y-4">
                {[
                  { name: "Alpha Protocol", desc: "P2P mesh protocol", color: "#dc2626" },
                  { name: "Omega Wireless", desc: "Sovereign hardware devices", color: "#f97316" },
                  { name: "Vibertas", desc: "Dashboard & OS interface", color: "#eab308" },
                  { name: "VIBE Token", desc: "Economics & incentives", color: "#22c55e" },
                  { name: "VIBELAND", desc: "Immersive 3D metaverse", color: "#3b82f6", active: true },
                  { name: "Spectrum Galactic", desc: "LEO satellite connectivity", color: "#8b5cf6" },
                  { name: "Pythia AI", desc: "Emergent intelligence", color: "#6366f1" },
                ].map((layer) => (
                  <div key={layer.name} className={`flex items-center gap-3 p-2 rounded-lg ${layer.active ? "bg-[var(--vibeland-primary)]/10" : ""}`}>
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: layer.color }} />
                    <div className="flex-1">
                      <span className={`text-sm font-medium ${layer.active ? "text-[var(--vibeland-primary)]" : "text-[var(--text-primary)]"}`}>
                        {layer.name}
                      </span>
                      <span className="text-xs text-[var(--text-muted)] ml-2">{layer.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-gold">Get Involved</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            VIBELAND is part of the Sovereign Stack ecosystem backed by OKB Ventures
            and PowerClub Global. For investment inquiries, reach out through OKB Ventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://okb-ventures.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary">
              OKB Ventures
            </a>
            <a href="https://vibetoken.xyz" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Buy VIBE Token
            </a>
          </div>

          {/* FAQ */}
          <div className="mt-16 text-left max-w-2xl mx-auto space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)] text-center mb-8">FAQ</h3>
            {[
              {
                q: "Where does VIBELAND run?",
                a: "VIBELAND is built into the Vibertas dashboard. It's accessible through any modern browser — no downloads, no plugins, no app store.",
              },
              {
                q: "Is VIBELAND decentralized?",
                a: "Yes. VIBELAND runs on Sovereign Stack infrastructure. Your virtual space can run on your own Omega hardware. The multiplayer backend uses NATS for cross-node communication.",
              },
              {
                q: "How is VIBELAND different from other metaverse projects?",
                a: "VIBELAND is a workspace, not a game. Every building represents a real project. Every agent does real work. It's built on production infrastructure (Rust/Axum, React Three Fiber) not a game engine.",
              },
              {
                q: "Can I host my own VIBELAND space?",
                a: "Yes. Every device owner gets a virtual space with configurable themes, spawn points, guest limits, and invitation tokens. You control who enters your world.",
              },
            ].map((faq) => (
              <div key={faq.q} className="card">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">{faq.q}</h4>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
