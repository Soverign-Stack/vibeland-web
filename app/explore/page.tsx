import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Explore VIBELAND",
  description: "A concept for the sovereign metaverse: navigate multi-level architecture, interact with AI agents, and explore themed project buildings.",
};

export default function ExplorePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 tron-grid grid-pulse" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-vibeland">Explore</span> the Concept
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
            VIBELAND is a concept for a digital environment. Every space has purpose.
            Every building represents a real project. Every avatar has a role.
          </p>
        </div>
      </section>

      {/* Navigation & Controls */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-vibeland">Controls</span> & Navigation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-lg font-semibold text-[var(--vibeland-light)] mb-4">Movement</h3>
              <div className="space-y-3">
                {[
                  { keys: "W A S D", action: "Move forward, left, back, right" },
                  { keys: "Space", action: "Jump" },
                  { keys: "Space x2", action: "Toggle flight mode" },
                  { keys: "Mouse Drag", action: "Orbit camera" },
                  { keys: "Click", action: "Click-to-move navigation" },
                ].map((control) => (
                  <div key={control.keys} className="flex items-center gap-4">
                    <code className="px-3 py-1 rounded bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--vibeland-primary)] text-sm font-mono min-w-[100px] text-center">
                      {control.keys}
                    </code>
                    <span className="text-sm text-[var(--text-secondary)]">{control.action}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[var(--vibeland-light)] mb-4">Interaction</h3>
              <div className="space-y-3">
                {[
                  { keys: "1 - 9", action: "Quick-enter project buildings" },
                  { keys: "Walk Near", action: "Auto-enter building at 26 units" },
                  { keys: "Equip", action: "Crown, Cape, Book, Blunt items" },
                  { keys: "HUD", action: "Equipment panel & inventory" },
                ].map((control) => (
                  <div key={control.keys} className="flex items-center gap-4">
                    <code className="px-3 py-1 rounded bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--vibeland-primary)] text-sm font-mono min-w-[100px] text-center">
                      {control.keys}
                    </code>
                    <span className="text-sm text-[var(--text-secondary)]">{control.action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-vibeland">World Zones</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Six distinct zones with spatial collision detection, floor height calculation,
              and boundary physics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Command Center",
                desc: "NORA's elevated platform with hologram core, compass grid, and 3 concentric rings. The nerve center of VIBELAND.",
                color: "var(--vibeland-primary)",
                detail: "Radius 0-35, Y=80",
              },
              {
                name: "Spiral Staircase",
                desc: "270-degree spiral connecting workspace to command center. 32 collision-aware steps with smooth height interpolation.",
                color: "var(--spectrum-primary)",
                detail: "Radius 10-14, Y=65-80",
              },
              {
                name: "Workspace Ring",
                desc: "Ring-shaped floor divided into 8 sector bays with dedicated agent workstations and bay dividers.",
                color: "var(--vibe-primary)",
                detail: "Radius 22-45, Y=65",
              },
              {
                name: "Workspace Atrium",
                desc: "Central void in the workspace ring. Look down through the atrium to the ground level below.",
                color: "var(--vibertas-primary)",
                detail: "Radius 0-22, Y=65",
              },
              {
                name: "Ground Level",
                desc: "The open world. Project buildings, walkways, and the infinite Tron grid stretch out before you.",
                color: "var(--omega-primary)",
                detail: "Full area, Y=0",
              },
              {
                name: "Building Interiors",
                desc: "Step inside any project building. Themed interiors with agent workspaces, Topsi hologram, and dedicated lighting.",
                color: "var(--alpha-primary)",
                detail: "36x14x36 units",
              },
            ].map((zone) => (
              <div key={zone.name} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: zone.color, boxShadow: `0 0 12px ${zone.color}` }}
                  />
                  <h3 className="font-semibold text-[var(--text-primary)]">{zone.name}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{zone.desc}</p>
                <code className="text-xs text-[var(--text-muted)] font-mono">{zone.detail}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to <span className="text-gradient-vibeland">Follow</span> Progress?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            VIBELAND is a concept and is not yet playable. Get updates as it develops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.alphaprotocol.network/join" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get updates
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
