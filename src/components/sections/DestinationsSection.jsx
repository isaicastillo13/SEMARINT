import { siteContent } from '../../data/siteContent'

function DestinationsSection() {
  const { destinations } = siteContent
  const topBorderAccent = ['border-t-sky-400', 'border-t-amber', 'border-t-blue-700', 'border-t-sky-500']

  return (
    <section id="destinos" className="bg-navy px-0 py-12 md:py-16">
      <div className="mx-auto w-[90vw]">
        <h2 className="mt-3 text-[1.9rem] leading-tight font-extrabold text-white md:text-[2.65rem]">
          {destinations.title}
        </h2>
        <p className="mt-2 max-w-[70ch] leading-relaxed text-white/85">{destinations.intro}</p>

        <div className="mt-8 grid gap-4 xl:grid-cols-[0.95fr_1.05fr] xl:items-stretch">
          <figure className="overflow-hidden rounded-2xl border border-white/20 bg-slate-200">
            <img
              src={destinations.imageUrl}
              alt={destinations.imageAlt}
              className="h-full min-h-[320px] w-full object-cover"
            />
          </figure>

          <div>
            <article className="rounded-xl border border-sky-300/30 bg-[#153a60] p-5">
              <p className="text-xs font-bold tracking-wide text-amber uppercase">
                {destinations.mainDestination.label}
              </p>
              <h3 className="mt-2 text-[1.8rem] leading-tight font-bold text-white">
                {destinations.mainDestination.text}
              </h3>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {destinations.countryGroups.map((group, groupIndex) => (
                  <ul
                    key={`group-${groupIndex}`}
                    className="space-y-1.5 sm:border-l sm:border-sky-300/35 sm:pl-4 first:sm:border-l-0 first:sm:pl-0"
                  >
                    {group.map((country) => (
                      <li key={country.name} className="flex items-center gap-2 text-white/95">
                        <span className="inline-flex h-7 min-w-10 items-center justify-center rounded-md border border-sky-200/45 bg-[#1e5d95] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                          <img
                            src={country.flag}
                            alt={`${country.name} flag`}
                            className="h-auto w-8 rounded-[2px] border border-white/35"
                          />
                        </span>
                        <span className="text-[1.3rem] font-medium">{country.name}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </article>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {destinations.objectiveCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`rounded-xl border border-border bg-white p-4 border-t-4 ${topBorderAccent[index % topBorderAccent.length]}`}
                >
                  <h4 className="leading-tight font-bold text-navy">{card.title}</h4>
                  <p className="mt-2 leading-relaxed text-graphite">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DestinationsSection
