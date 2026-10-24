import { motion } from 'framer-motion'

const imageVariants = { rest: { scale: 1 }, hover: { scale: 1.2 } }

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={`#${project.slug}`}
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="relative block h-[420px] overflow-hidden rounded-xl bg-ink md:h-[466px] xl:h-[564px]"
    >
      {/* Hover: the photo slowly zooms to 1.2x inside the clipped card. */}
      <motion.img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        decoding="async"
        variants={imageVariants}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-x-6 top-6 type-body flex flex-wrap items-center gap-x-[11px] text-sand md:inset-x-8 md:top-8">
        <span>{project.client}</span>
        <span className="size-[7px] rounded-full bg-sand" aria-hidden />
        <span>{project.category}</span>
      </div>

      <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
        <p className="type-data text-sand">{project.detail}</p>
        <h3 className="type-headline mt-3 text-[32px] leading-[36px] text-paper md:text-[40px] md:leading-[44px]">
          {project.title}
        </h3>
      </div>
    </motion.a>
  )
}
