import { DotLink, Reveal, RollText, SquareIcon } from './motion.jsx'
import { footerDetails, footerNav, socials } from '../data/projects.js'

function LinkColumn({ title, links, delay }) {
  return (
    <Reveal delay={delay} className="w-[171px]">
      <p className="pl-4 font-sans text-base leading-[26px] font-bold text-gold">{title}</p>
      <ul className="mt-2">
        {links.map((l) => (
          <li key={l}>
            <DotLink href="#" className="py-3 text-paper" textClass="type-body">
              {l}
            </DotLink>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink pt-28 pb-16 text-paper md:pb-28">
      <div className="mx-auto w-full max-w-[1440px] px-(--gutter)">
        {/* Newsletter + link columns */}
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
          <div className="max-w-[485px]">
            <Reveal>
              <h3 className="type-headline max-w-[440px] text-[32px] leading-[36px] md:text-[40px] md:leading-[44px]">
                Stay informed on our projects and tenders
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="type-body mt-5 max-w-[411px] text-sand-dim">
                Civil construction, infrastructure and interiors for government, institutional and private clients across Eastern India.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <form className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-2" onSubmit={(e) => e.preventDefault()}>
                <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="name@example.com"
                  className="h-[50px] w-full rounded-full border border-paper/15 bg-white/5 px-5 font-sans text-base text-paper outline-none transition-colors placeholder:text-stone focus:border-paper/40 sm:w-[320px]"
                />
                <button
                  type="submit"
                  className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-paper/30 px-6 font-sans text-base font-bold text-paper transition-colors hover:border-paper/60"
                >
                  <RollText text="Subscribe" />
                  <SquareIcon />
                </button>
              </form>
            </Reveal>
          </div>

          <div className="flex">
            <LinkColumn title="Navigation" links={footerNav} delay={0.1} />
            <LinkColumn title="Details pages" links={footerDetails} delay={0.2} />
          </div>
        </div>

        {/* Contact + socials */}
        <Reveal className="mt-16 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="type-body">
            <span className="text-stone">Contact:</span>{' '}
            <a href="tel:+918249934409" className="type-data text-paper hover:underline">+91 82499 34409</a>
            <span className="text-stone"> · Plot 71, Unit-III, K V Nagar, Bhubaneswar, Odisha 751001</span>
          </p>
          <div className="-ml-4 flex md:ml-0">
            {socials.map((s) => (
              <DotLink key={s} href="#" className="py-3 text-paper">{s}</DotLink>
            ))}
          </div>
        </Reveal>

        {/* Giant wordmark: sized with container-query units so it always spans the container width. */}
        <div className="@container">
          <Reveal y={20}>
            <p className="type-display text-[15.9cqw] leading-none whitespace-nowrap text-stone" aria-hidden>
              AREN &amp; BUSCH
            </p>
          </Reveal>
        </div>

        <Reveal className="type-body flex flex-col gap-3 py-2 text-stone md:flex-row md:items-center md:justify-between">
          <p>© 2026 Aren &amp; Busch Private Limited · <span className="type-data">CIN U46594OD2026PTC055725</span></p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-paper">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-paper">Terms &amp; Condition</a>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
