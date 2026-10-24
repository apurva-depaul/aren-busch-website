import ProjectCard from './ProjectCard.jsx'
import { Reveal } from './motion.jsx'
import { projects } from '../data/projects.js'

export default function ProjectGrid() {
  return (
    <section id="projects" className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-(--gutter) md:grid-cols-2">
        {projects.map((p, i) => (
          // Each card rises 60px into place as its row scrolls into view; the right column trails slightly.
          <Reveal key={p.slug} y={60} delay={(i % 2) * 0.1} duration={1}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
