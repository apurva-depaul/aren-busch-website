import { motion } from 'framer-motion'

// Shared easing: fast start, long soft settle (close to Framer's default "appear" feel).
export const EASE = [0.16, 1, 0.3, 1]

/**
 * Scroll reveal: fades content up into place the first time it enters the viewport.
 * The live site uses y: 60 for project cards and y: 30 for footer blocks.
 */
export function Reveal({ children, y = 30, delay = 0, duration = 0.9, amount = 0.2, className, as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}

/**
 * Letter-roll label (the "Contact" / "Subscribe" buttons).
 * Every letter is a 1-line window holding two stacked copies; on hover of the
 * parent `group`, each column slides up 50% with a 30ms per-letter stagger.
 */
export function RollText({ text, className = '' }) {
  return (
    <span className={`inline-flex ${className}`} aria-label={text}>
      {[...text].map((ch, i) => {
        const glyph = ch === ' ' ? ' ' : ch
        return (
          <span key={i} aria-hidden className="relative block h-[1em] overflow-hidden leading-none">
            <span
              className="flex flex-col transition-transform duration-200 ease-(--ease-roll) group-hover:-translate-y-1/2"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span className="block h-[1em] leading-none">{glyph}</span>
              <span className="block h-[1em] leading-none">{glyph}</span>
            </span>
          </span>
        )
      })}
    </span>
  )
}

/**
 * The square icon after button labels: on hover the square slides out to the
 * right while a second square slides in from the left.
 */
export function SquareIcon({ className = 'bg-paper' }) {
  return (
    <span className="relative block size-3.5 overflow-hidden" aria-hidden>
      <span className={`absolute inset-0 transition-transform duration-300 ease-(--ease-roll) group-hover:translate-x-[120%] ${className}`} />
      <span className={`absolute inset-0 -translate-x-[120%] transition-transform duration-300 ease-(--ease-roll) group-hover:translate-x-0 ${className}`} />
    </span>
  )
}

const dotVariants = { rest: { x: 0 }, hover: { x: 31 } }
const labelVariants = { rest: { x: 0 }, hover: { x: 17 } }

/**
 * Pill link with the sliding-dot hover used in the nav, breadcrumbs and footer:
 * a 9px dot enters from the left (-15px → 16px) and nudges the label 17px right.
 */
export function DotLink({ children, href = '#', className = '', textClass = 'type-body', dotClass = 'bg-paper' }) {
  return (
    <motion.a
      href={href}
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={`relative inline-flex items-center overflow-hidden rounded-full px-4 py-2 ${className}`}
    >
      <motion.span
        variants={dotVariants}
        transition={{ duration: 0.35, ease: EASE }}
        className={`absolute top-1/2 -left-[15px] size-[9px] -translate-y-1/2 rounded-full ${dotClass}`}
        aria-hidden
      />
      <motion.span variants={labelVariants} transition={{ duration: 0.35, ease: EASE }} className={`block ${textClass}`}>
        {children}
      </motion.span>
    </motion.a>
  )
}
