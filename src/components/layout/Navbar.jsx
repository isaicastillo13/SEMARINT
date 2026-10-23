import { siteContent } from '../../data/siteContent'
import navbarLogo from '../../assets/Logo.jpg'

function Navbar() {
  const { hero } = siteContent;
  const { navbar } = siteContent;

  return (
    <header className="sticky top-0 z-20 border-b border-amber bg-navy/95 backdrop-blur">
      <div className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] items-center justify-between gap-3 py-4 md:w-[min(1120px,calc(100%-3rem))]">
        <a
          href="#inicio"
          aria-label="Ir al inicio de la página"
          className="flex items-center gap-3 text-white"
        >
          <img
            src={navbarLogo}
            alt={navbar.imageAlt}
            className="h-14 w-14 shrink-0 rounded-sm object-cover"
          />
          <p className="leading-tight font-extrabold text-white">
            <span className="block text-[1.05rem] tracking-[0.02em]">{hero.title}</span>
            {hero.titleSecundary && (
              <span className="block tracking-[0.015em] text-[#e9be66] [-webkit-text-stroke:1px_rgba(255,214,138,0.55)] [text-shadow:0_0_14px_rgba(234,189,92,0.42),0_1px_0_rgba(65,42,7,0.45)]">
                {hero.titleSecundary}
              </span>
            )}
          </p>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-5 lg:flex">
          {siteContent.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b-2 border-transparent text-sm font-medium text-white transition focus-visible:border-amber"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={siteContent.hero.primaryCta.href}
          className="inline-flex min-h-11 items-center rounded-full bg-gradient-to-b from-[#f8dd8f] via-[#dca54a] to-[#b97823] px-4 text-sm font-semibold text-[#1d2732] shadow-[inset_0_1px_0_rgba(255,244,204,0.9),inset_0_-2px_0_rgba(120,74,19,0.35),0_8px_22px_rgba(8,18,28,0.24)] transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:ring-2 focus-visible:ring-[#f3d38a]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          {siteContent.hero.primaryCta.label}
        </a>
      </div>
    </header>
  )
}

export default Navbar
