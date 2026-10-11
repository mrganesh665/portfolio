import { Code2, FolderGit2, GraduationCap, Layers, Sparkles, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const infoCards = [
  { icon: Layers, label: 'Experience', value: personalInfo.experience },
  { icon: FolderGit2, label: 'Projects Shipped', value: '12+' },
  { icon: Code2, label: 'Core Stack', value: 'React, TypeScript & Node' },
  { icon: Sparkles, label: 'AI Specialization', value: 'LangChain & ChromaDB' },
]

export default function About() {
  const educationList = Array.isArray(personalInfo.education)
    ? personalInfo.education
    : [personalInfo.education]

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into reliable, scalable software"
          description="A closer look at how I engineer full-stack systems, GenAI pipelines, and mobile experiences."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <Reveal className="lg:col-span-2">
            <div className="relative rounded-xl3 overflow-hidden glass-card p-2 group">
              <div className="aspect-[4/5] rounded-xl2 bg-gradient-to-br from-accent-purple/30 via-accent-blue/20 to-accent-cyan/20 flex items-center justify-center overflow-hidden relative">
                {personalInfo.avatar ? (
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover rounded-xl2 transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="font-display text-6xl font-bold gradient-text">
                    {personalInfo.initials || 'GC'}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 glass px-3 py-2 rounded-xl text-xs flex items-center justify-between text-white/90">
                  <span className="font-semibold">{personalInfo.fullName}</span>
                  <span className="flex items-center gap-1 text-[11px] text-accent-cyan">
                    <MapPin size={12} /> {personalInfo.location.split(',')[0]}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3 flex flex-col gap-8">
            <Reveal>
              <div className="space-y-4 text-muted leading-relaxed">
                {personalInfo.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {infoCards.map((card, i) => (
                <Reveal key={card.label} delay={i * 0.08}>
                  <div className="glass-card p-5 flex items-start gap-4 hover:border-accent-purple/40 transition-colors">
                    <div className="p-2.5 rounded-xl2 bg-white/5">
                      <card.icon size={20} className="text-accent-cyan" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{card.value}</div>
                      <div className="text-xs text-muted mt-0.5">{card.label}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted">Education & Background</h4>
              <div className="grid sm:grid-cols-1 gap-3">
                {educationList.map((edu, idx) => (
                  <Reveal key={edu.degree + idx} delay={0.2 + idx * 0.08}>
                    <div className="glass-card p-4 sm:p-5 flex items-start gap-4">
                      <div className="p-2 rounded-xl bg-accent-purple/10 text-accent-purple shrink-0 mt-0.5">
                        <GraduationCap size={20} />
                      </div>
                      <div className="text-sm flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <span className="text-white font-medium">{edu.degree}</span>
                          {edu.score && (
                            <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded w-fit">
                              {edu.score}
                            </span>
                          )}
                        </div>
                        <div className="text-muted text-xs sm:text-sm mt-1">
                          {edu.institute} · {edu.location || ''} · <span className="font-mono text-xs">{edu.year}</span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
