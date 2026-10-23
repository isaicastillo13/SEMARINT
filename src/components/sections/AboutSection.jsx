import { siteContent } from '../../data/siteContent'

function AboutSection() {
  const { about } = siteContent
  const topBorderAccent = ['border-t-sky-400', 'border-t-amber', 'border-t-blue-700', 'border-t-sky-500']

  return (
    <section id="empresa" className="px-0 py-14 md:py-20">
      <div className="mx-auto w-[90vw]">
        <h2 className="text-[1.55rem] leading-tight font-bold text-navy md:text-[2rem]">
          {about.title}
        </h2>
        <p className="mt-3 max-w-[65ch] leading-relaxed text-graphite">{about.intro}</p>
        
        <div className="mt-6">
          <article className="rounded-xl border border-border/45 bg-navy p-5 text-white md:p-6">
            <p className="text-xs font-semibold tracking-wide text-amber/90 uppercase">
              {about.introduction_title}
            </p>
            <p className="mt-2 text-base leading-relaxed text-white/90 md:text-lg">
              {about.introduction_description}
            </p>
          </article>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {about.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`rounded-xl border border-border bg-white p-5 border-t-4 ${topBorderAccent[index % topBorderAccent.length]}`}
            >
              <h3 className="text-xl leading-tight font-bold text-navy uppercase">{pillar.title}</h3>
              <p className="mt-2 leading-relaxed text-graphite">{pillar.text}</p>
            </article>
          ))}
        </div>

        <article className="mt-6 rounded-xl border border-sky-100 bg-[#D9E9F5] p-5 md:p-6">
          <p className="font-bold tracking-wide text-[#14547A] uppercase">
            {about.purpose.label}
          </p>
          <p className="mt-2 leading-tight text-navy">
            {about.purpose.text}
          </p>
        </article>

        <div className="mt-7">
          <h3 className="leading-tight font-extrabold text-[#14547A] text-xl">
            {about.scopeTitle}
          </h3>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {about.scopeItems.map((item) => (
              <article key={item.title} className="rounded-xl border border-border bg-white px-5 py-4">
                <h4 className="leading-tight font-bold text-navy">{item.title}</h4>
                <p className="mt-2 leading-relaxed text-graphite">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
