import { Award, ShieldCheck, Users, Calendar, CheckCircle2 } from 'lucide-react'
import { certifications } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const badgeIcons = {
  'Full-Stack Development': CheckCircle2,
  'Cybersecurity': ShieldCheck,
  'Leadership & Events': Users,
}

export default function Certifications() {
  if (!certifications || certifications.length === 0) return null

  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Credentials & Achievements"
          title="Certifications & Leadership"
          description="Verified industry credentials and institutional leadership roles."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((item, idx) => {
            const IconComponent = badgeIcons[item.badge] || Award

            return (
              <Reveal key={item.title} delay={idx * 0.1}>
                <div className="glass-card p-6 h-full flex flex-col hover:border-accent-cyan/40 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl2 bg-accent-purple/10 text-accent-purple group-hover:text-accent-cyan group-hover:bg-accent-cyan/10 transition-colors">
                      <IconComponent size={22} />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-accent-cyan bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-accent-cyan transition-colors mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs text-muted mb-3 flex items-center justify-between">
                    <span className="font-medium text-white/80">{item.issuer}</span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Calendar size={12} /> {item.date}
                    </span>
                  </div>

                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
