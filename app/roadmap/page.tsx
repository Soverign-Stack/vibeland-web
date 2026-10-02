import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "VIBELAND development roadmap: from avatar systems to full MCP orchestration and voice integration.",
};

export default function RoadmapPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 tron-grid grid-pulse" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-vibeland">Roadmap</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Three phases from foundation to full sovereign metaverse.
            Phases 1 and 2 are 92% complete.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--vibe-primary)]/10 border-2 border-[var(--vibe-primary)] flex items-center justify-center text-[var(--vibe-primary)] font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Avatar Systems</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-0.5 rounded bg-[var(--vibe-primary)]/10 text-[var(--vibe-primary)] text-xs font-medium">PLANNED</span>
                  </div>
                </div>
              </div>
              <div className="ml-16 grid md:grid-cols-2 gap-4">
                {[
                  { item: "Humanoid user avatar with animations", done: false },
                  { item: "NORA holographic AI with 6 moods", done: false },
                  { item: "Voxel agent workers (3 role variants)", done: false },
                  { item: "ORCHA fairy companion", done: false },
                  { item: "Equipment system (4 slots)", done: false },
                  { item: "Third-person camera controller", done: false },
                  { item: "WASD + flight movement", done: false },
                  { item: "Click-to-move navigation", done: false },
                ].map((task) => (
                  <div key={task.item} className="flex items-center gap-3">
                    <span className={task.done ? "text-[var(--vibe-primary)]" : "text-[var(--text-muted)]"}>
                      {task.done ? "✓" : "○"}
                    </span>
                    <span className={`text-sm ${task.done ? "text-[var(--text-secondary)]" : "text-[var(--text-muted)]"}`}>
                      {task.item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--vibeland-primary)]/10 border-2 border-[var(--vibeland-primary)] flex items-center justify-center text-[var(--vibeland-primary)] font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Environment & Multiplayer</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-0.5 rounded bg-[var(--vibeland-primary)]/10 text-[var(--vibeland-primary)] text-xs font-medium">PLANNED</span>
                  </div>
                </div>
              </div>
              <div className="ml-16 grid md:grid-cols-2 gap-4">
                {[
                  { item: "Multi-level circular architecture", done: false },
                  { item: "Command Center with hologram core", done: false },
                  { item: "Spiral staircase (270°, 32 steps)", done: false },
                  { item: "8 building types with themes", done: false },
                  { item: "Building interiors with agents", done: false },
                  { item: "Spatial collision system", done: false },
                  { item: "WebSocket multiplayer (10Hz)", done: false },
                  { item: "Host/guest virtual spaces DB", done: false },
                ].map((task) => (
                  <div key={task.item} className="flex items-center gap-3">
                    <span className={task.done ? "text-[var(--vibeland-primary)]" : "text-[var(--text-muted)]"}>
                      {task.done ? "✓" : "○"}
                    </span>
                    <span className={`text-sm ${task.done ? "text-[var(--text-secondary)]" : "text-[var(--text-muted)]"}`}>
                      {task.item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--sovereign-gold)]/10 border-2 border-[var(--sovereign-gold)] flex items-center justify-center text-[var(--sovereign-gold)] font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Advanced Features</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-0.5 rounded bg-[var(--sovereign-gold)]/10 text-[var(--sovereign-gold)] text-xs font-medium">UPCOMING</span>
                    <span className="text-sm text-[var(--text-muted)]">Q2-Q3 2026</span>
                  </div>
                </div>
              </div>
              <div className="ml-16 grid md:grid-cols-2 gap-4">
                {[
                  { item: "Voice-first orchestration interface", done: false },
                  { item: "Full MCP integration for state sync", done: false },
                  { item: "Time-travel log replay", done: false },
                  { item: "Agent data conduit visualization", done: false },
                  { item: "VIBE token integration for spaces", done: false },
                  { item: "Cross-node multiplayer via NATS", done: false },
                  { item: "Spectrum satellite mesh connectivity", done: false },
                  { item: "Pythia AI-driven world generation", done: false },
                ].map((task) => (
                  <div key={task.item} className="flex items-center gap-3">
                    <span className={task.done ? "text-[var(--sovereign-gold)]" : "text-[var(--text-muted)]"}>
                      {task.done ? "✓" : "○"}
                    </span>
                    <span className={`text-sm ${task.done ? "text-[var(--text-secondary)]" : "text-[var(--text-muted)]"}`}>
                      {task.item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The <span className="text-gradient-gold">Vision</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-3xl mx-auto">
            VIBELAND will become the primary interface for the Sovereign Stack.
            Walk through your infrastructure. Talk to your AI. Watch your mesh
            network pulse in real time. Not a game — a sovereign workspace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.alphaprotocol.network/join" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get updates
            </a>
            <Link href="/features" className="btn-secondary">
              Current Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
