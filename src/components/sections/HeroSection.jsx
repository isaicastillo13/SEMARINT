import { siteContent } from "../../data/siteContent";

function HeroSection() {
  const { hero } = siteContent;

  return (
    <section id="inicio" className="p-0">
      <figure className="relative min-h-[78vh] overflow-hidden bg-slate-200">
        {hero.imageUrl ? (
          <img
            src={hero.imageUrl}
            alt={hero.imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/74 to-navy/46" />
        <figcaption className="relative z-10 mx-auto flex h-full min-h-[78vh] w-[min(1120px,calc(100%-1.5rem))] items-end px-0 py-8 md:w-[min(1120px,calc(100%-3rem))] md:py-10 lg:py-12">
          <div className="max-w-2xl">
            <h1 className="max-w-[20ch] text-balance text-[2rem] leading-tight font-extrabold text-white md:text-[2.5rem] lg:text-[3.2rem]">
              {hero.title}
              {hero.titleSecundary && (
                <span className="block text-[2rem] leading-tight text-[#e9be66] [-webkit-text-stroke:1px_rgba(255,214,138,0.55)] [text-shadow:0_0_14px_rgba(234,189,92,0.42),0_1px_0_rgba(65,42,7,0.45)] md:text-[2.5rem] lg:text-[3.2rem]">
                  {hero.titleSecundary}
                </span>
              )}
            </h1>
            <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-white/90">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={hero.primaryCta.href}
                className="inline-flex min-h-11 items-center rounded-full bg-gradient-to-b from-[#f8dd8f] via-[#dca54a] to-[#b97823] px-4 text-sm font-semibold text-[#1d2732] shadow-[inset_0_1px_0_rgba(255,244,204,0.9),inset_0_-2px_0_rgba(120,74,19,0.35),0_8px_22px_rgba(8,18,28,0.24)] transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:ring-2 focus-visible:ring-[#f3d38a]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {hero.primaryCta.src && (
                  <img src={hero.primaryCta.src} alt="" className="mr-2 h-4 w-4" />
                )}
                {hero.primaryCta.label}
              </a>
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex min-h-11 items-center rounded-full bg-white/12 px-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_22px_rgba(8,18,28,0.22)] backdrop-blur-md"
                title="Información por confirmar"
              >
                {hero.whatsappCtaIcon && (
                  <img src={hero.whatsappCtaIcon} alt="" className="mr-2 h-4 w-4" />
                )}
                {hero.whatsappCtaLabel}
              </button>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

export default HeroSection;
