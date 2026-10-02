import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Avatars",
  description: "Four avatar systems in VIBELAND: humanoid player characters, NORA holographic AI, voxel agent workers, and ORCHA fairy companion.",
};

export default function AvatarsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 tron-grid grid-pulse" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the <span className="text-gradient-vibeland">Avatars</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Four distinct avatar systems, each with unique visual design,
            animations, and personality. From humanoid explorers to holographic AI.
          </p>
        </div>
      </section>

      {/* User Avatar */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--omega-primary)]/10 border border-[var(--omega-primary)]/30 rounded-full text-[var(--omega-primary)] text-sm mb-4">
                Player Character
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-vibeland">Space Explorer</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Your humanoid avatar in VIBELAND. A space explorer with cybernetic enhancements,
                jetpack flight, and a full equipment system.
              </p>
              <ul className="space-y-3">
                {[
                  "Cyan-glow eyes with transparent visor faceplate",
                  "Jetpack with exhaust particles during flight",
                  "Tool belt, metallic gloves, accent-strip boots",
                  "6 animation modes: idle, walk, run, jump, fly, emote",
                  "4 equipment slots: head, hands, back",
                  "Trail rendering behind movement path",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-[var(--vibeland-primary)] mt-0.5">&#10003;</span>
                    <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8 text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#ff8800] to-[#cc6600] flex items-center justify-center mb-6 world-float" style={{ boxShadow: '0 0 40px rgba(255, 136, 0, 0.3)' }}>
                <span className="text-4xl">&#9786;</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Your Avatar</h3>
              <p className="text-sm text-[var(--text-muted)]">Customizable color, default: #ff8800</p>
              <div className="mt-4 flex justify-center gap-2">
                {["Crown", "FireCape", "GodBook", "Blunt"].map((item) => (
                  <span key={item} className="px-2 py-1 rounded bg-[var(--bg-surface)] border border-[var(--border-default)] text-xs text-[var(--text-muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NORA Avatar */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8 text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#00ffff] to-[#0088ff] flex items-center justify-center mb-6 avatar-breathe" style={{ boxShadow: '0 0 40px rgba(0, 255, 255, 0.3)' }}>
                <span className="text-3xl font-bold text-white/80">N</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">NORA</h3>
              <p className="text-sm text-[var(--text-muted)]">300 orbiting particles, holographic form</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {["Neutral", "Speaking", "Thinking", "Alert", "Happy", "Processing"].map((mood) => (
                  <span key={mood} className="px-2 py-1 rounded bg-[#00ffff]/10 border border-[#00ffff]/20 text-xs text-[#00ffff]">
                    {mood}
                  </span>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00ffff]/10 border border-[#00ffff]/30 rounded-full text-[#00ffff] text-sm mb-4">
                AI Guide
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span style={{ background: 'linear-gradient(135deg, #00ffff, #0088ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>NORA</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                The holographic AI presence of VIBELAND. NORA floats in the Command Center,
                a 3.8-unit tall humanoid form made of cyan light and orbiting particles.
              </p>
              <ul className="space-y-3">
                {[
                  "6 mood states with visual transitions",
                  "Waveform visualization when speaking (6 bars)",
                  "Hand-on-chin thinking pose with head tilt",
                  "Alert mode: red lighting, arms raised",
                  "300 orbiting particles with mood-based speed",
                  "Breathing animation (2.5x faster when speaking)",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-[#00ffff] mt-0.5">&#10003;</span>
                    <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Voxel Agents */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--vibe-primary)]/10 border border-[var(--vibe-primary)]/30 rounded-full text-[var(--vibe-primary)] text-sm mb-4">
              AI Workers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-vibeland">Voxel Agents</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Blocky robot workers that inhabit the workspace bays. Three role variants,
              each with unique equipment, animations, and visual identity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: "Developer",
                color: "#0080ff",
                equipment: ["Terminal visor", "Holographic keyboard", "Code particle stream"],
                animation: "Typing when working",
              },
              {
                role: "Designer",
                color: "#ff8000",
                equipment: ["Artistic lens monocle", "Color palette swatches", "Stylus tool"],
                animation: "Brush stroke gestures",
              },
              {
                role: "Analyst",
                color: "#00ff80",
                equipment: ["Scanner beam", "Holographic bar charts", "Data streams"],
                animation: "Pointing presentations",
              },
            ].map((agent) => (
              <div key={agent.role} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                    style={{ background: agent.color, boxShadow: `0 0 20px ${agent.color}40` }}
                  >
                    {agent.role[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">{agent.role}</h3>
                    <p className="text-xs text-[var(--text-muted)]">{agent.animation}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {agent.equipment.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: agent.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-[var(--dark-border)]">
                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <span>4 status states</span>
                    <span>Energy bar 0-100%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORCHA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--sovereign-gold)]/10 border border-[var(--sovereign-gold)]/30 rounded-full text-[var(--sovereign-gold)] text-sm mb-4">
                Companion
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-gold">ORCHA</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Your tiny fairy companion. ORCHA follows you everywhere, hovering 2.5 units
                above with fluttering wings and a sparkle trail.
              </p>
              <ul className="space-y-3">
                {[
                  "4 translucent wings with 12Hz flutter beat",
                  "3 orbiting sparkles at different phases",
                  "Wand with glowing star tip",
                  "Smooth lerp following of player position",
                  "Energetic bounce when moving, gentle drift when idle",
                  "Gold/pearl variant for NORA, warm amber for standard",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-[var(--sovereign-gold)] mt-0.5">&#10003;</span>
                    <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[var(--sovereign-gold-light)] to-[var(--sovereign-gold)] flex items-center justify-center mb-6 world-float" style={{ boxShadow: '0 0 30px rgba(201, 162, 39, 0.4)', animationDuration: '2s' }}>
                <span className="text-2xl">&#10022;</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">ORCHA</h3>
              <p className="text-sm text-[var(--text-muted)]">Always by your side</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose Your <span className="text-gradient-vibeland">Avatar</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            VIBELAND is a concept and is not yet playable. The plan is for you to customize a space explorer, equip items, explore buildings, and collaborate with AI agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.alphaprotocol.network/join" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get updates
            </a>
            <Link href="/roadmap" className="btn-secondary">
              See Roadmap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
