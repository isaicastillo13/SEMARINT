import { siteContent } from '../../data/siteContent'

function BoardSection() {
  const { board } = siteContent

  return (
    <section id="junta" className="bg-white px-0 py-12 md:py-16">
      <div className="mx-auto w-[90vw]">
        <h2 className="mt-3 text-[2rem] leading-tight font-extrabold text-navy md:text-[2.85rem]">
          {board.title}
        </h2>
        <div className="mt-2 h-1 w-56 rounded-full bg-amber" />
        <h4 className="mt-4 leading-tight font-medium text-graphite">
          {board.subtitle}
        </h4>
        <p className="mt-2 max-w-[65ch] leading-relaxed text-graphite">{board.intro}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {board.members.map((member, index) => (
            <article
              key={`${member.name}-${index}`}
              className="rounded-2xl border border-border bg-white p-4 shadow-[0_8px_30px_rgba(20,53,85,0.06)]"
            >
              <div className="overflow-hidden rounded-xl border border-border bg-slate-50">
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={`Foto de ${member.name}`}
                    className="h-40 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-40 items-center justify-center text-3xl font-bold tracking-wide text-slate-500">
                    IMAGEN
                  </div>
                )}
              </div>
              <h3 className="mt-4 leading-tight font-bold text-navy">{member.name}</h3>
              <p className="mt-2 leading-relaxed text-graphite">{member.role}</p>
              <div className="mt-4 h-1 w-16 rounded-full bg-amber" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BoardSection
