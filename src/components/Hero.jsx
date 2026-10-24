import { motion } from 'framer-motion'
import { asset } from '../asset.js'
import { DotLink, EASE } from './motion.jsx'

// Double-chevron separator, path copied from the live breadcrumb icon.
function Chevrons() {
  return (
    <svg viewBox="0 0 40 40" className="size-6" aria-hidden>
      <path
        d="M 13.462 23.333 C 13.462 23.333 25 14.741 25 11.667 C 25 8.592 13.462 0 13.462 0 M 0 23.333 C 0 23.333 11.538 14.741 11.538 11.667 C 11.538 8.592 0 0 0 0"
        transform="translate(7.5 9)"
        fill="none"
        stroke="#fff7e5"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const rise = (y, delay) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: EASE },
})

export default function Hero() {
  return (
    <section className="relative h-[620px] overflow-hidden bg-ink md:h-[691px] xl:h-svh xl:min-h-[720px]">
      {/* Image settles from 1.4x to 1x on load. */}
      <motion.img
        src={asset('images/hero-cranes.webp')}
        alt="Construction cranes framing a modern building under development at dusk, with a historic skyscraper in the background."
        className="absolute inset-0 size-full object-cover"
        initial={{ scale: 1.4 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col justify-end gap-8 px-(--gutter) pb-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[760px]">
          <motion.h1
            {...rise(52, 0.35)}
            className="type-display text-[56px] leading-[56px] text-paper md:text-[72px] md:leading-[72px] xl:text-[88px] xl:leading-[88px]"
          >
            Built to stand.
          </motion.h1>
          <motion.p {...rise(30, 0.5)} className="type-body mt-5 max-w-[440px] text-sand-dim">
            Government, institutional and infrastructure works delivered by the Aren &amp; Busch founding team across Odisha and West Bengal.
          </motion.p>
        </div>

        <motion.nav {...rise(30, 0.6)} aria-label="Breadcrumb" className="flex items-center -ml-4 md:ml-0">
          <DotLink href="#" className="py-3 text-paper">Home</DotLink>
          <Chevrons />
          <span aria-current="page" className="type-body px-4 py-3 text-paper">
            Projects
          </span>
        </motion.nav>
      </div>
    </section>
  )
}
