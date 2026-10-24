import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { DotLink, EASE, RollText, SquareIcon } from './motion.jsx'
import { asset } from '../asset.js'
import { navLinks } from '../data/projects.js'

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Transparent over the hero; switches to the solid "BG Black" variant once the page scrolls.
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 60))

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={false}
      animate={{ backgroundColor: scrolled || open ? 'rgba(3,0,0,1)' : 'rgba(3,0,0,0)' }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      <nav className="relative mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-(--gutter)">
        <a href="#" aria-label="Aren & Busch — home" className="block">
          <img src={asset('brand/ab-lockup-reverse.svg')} alt="Aren & Busch" className="h-11 w-auto" width="101" height="44" />
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
          {navLinks.map((l) => (
            <li key={l}>
              <DotLink href={`#${l.toLowerCase()}`} className="text-paper">
                {l}
              </DotLink>
            </li>
          ))}
        </ul>

        <a href="#contact" className="group hidden items-center gap-2.5 rounded-full px-4 py-3 font-sans text-base font-bold text-paper lg:inline-flex">
          <RollText text="Contact" />
          <SquareIcon />
        </a>

        {/* Phone / tablet menu toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative flex size-10 items-center justify-center lg:hidden"
        >
          <motion.span
            className="absolute h-[1.5px] w-6 bg-paper"
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
          <motion.span
            className="absolute h-[1.5px] w-6 bg-paper"
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden bg-ink lg:hidden"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <ul className="flex flex-col gap-1 px-(--gutter) pt-2 pb-8">
              {[...navLinks, 'Contact'].map((l, i) => (
                <motion.li
                  key={l}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i, ease: EASE }}
                >
                  <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="type-headline block py-3 text-paper">
                    {l}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
