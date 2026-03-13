import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description: "VIBELAND features: multiplayer, spatial physics, 8 building types, 4 avatar systems, equipment, and AI agent integration.",
};

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 tron-grid grid-pulse" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Built <span className="text-gradient-vibeland">Different</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Not a toy metaverse. VIBELAND is a production-grade 3D environment
            with real spatial physics, WebSocket multiplayer, and AI integration.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-vibeland">Core</span> Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Spatial Collision System",
                desc: "Full 3D collision detection with floor height calculation, ceiling checks, wall boundaries, and stair interpolation. 32-step snapping for smooth traversal across the spiral staircase.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
              },
              {
                title: "WebSocket Multiplayer",
                desc: "Real-time multiplayer powered by Rust/Axum WebSockets. Position updates at 10Hz, equipment broadcasting, spawn preferences, and teleportation. See other players move in real-time.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                  </svg>
                ),
              },
              {
                title: "Dynamic Building System",
                desc: "8 building types auto-assigned by project category. Each type has unique color themes, interior layouts, door styles, hologram colors, and agent configurations.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: "Equipment & Inventory",
                desc: "Equip items across 4 slots: head, primary hand, secondary hand, and back. Crown, FireCape, GodBook, and Blunt weapon models with visual rendering and particle effects.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                ),
              },
              {
                title: "AI Agent Integration",
                desc: "NORA (holographic AI guide) lives in the Command Center with 6 mood states. Voxel agents work in 3 role variants (Developer, Designer, Analyst). ORCHA fairy companion follows you everywhere.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Host & Guest Spaces",
                desc: "Every device owner gets a virtual space. Invite guests via secure tokens with 7-day expiry. Assign roles, set spawn points, configure themes, and control access for up to max capacity.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div key={feature.title} className="card">
                <div className="w-12 h-12 rounded-lg bg-[var(--vibeland-primary)]/10 flex items-center justify-center mb-4 text-[var(--vibeland-primary)]">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-vibeland">Tech</span> Stack
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: "React Three Fiber", desc: "3D rendering" },
              { name: "Rust / Axum", desc: "Backend & WebSocket" },
              { name: "WebSocket", desc: "Real-time sync" },
              { name: "SQLite", desc: "Virtual spaces DB" },
              { name: "Three.js", desc: "3D engine" },
              { name: "DashMap", desc: "Concurrent state" },
              { name: "React 18", desc: "UI framework" },
              { name: "TypeScript", desc: "Type safety" },
            ].map((tech) => (
              <div key={tech.name} className="p-4 rounded-lg border border-[var(--dark-border)] bg-[var(--dark-card)] text-center">
                <div className="font-semibold text-[var(--text-primary)] text-sm">{tech.name}</div>
                <div className="text-xs text-[var(--text-muted)] mt-1">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See It <span className="text-gradient-vibeland">In Action</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://vibertas.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Launch Vibertas
            </a>
            <Link href="/avatars" className="btn-secondary">
              Meet the Avatars
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
