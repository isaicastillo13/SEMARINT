import { siteContent } from '../../data/siteContent'
import ariannaImage from '../../assets/lic_arianna_perez.jpeg'
import adolfoImage from '../../assets/lic_adolfo_timana.jpeg'
import juanImage from '../../assets/cap_juan_madrid.jpeg'

const memberImages = {
  '/src/assets/lic_arianna_perez.jpeg': ariannaImage,
  '/src/assets/lic_adolfo_timana.jpeg': adolfoImage,
  '/src/assets/cap_juan_madrid.jpeg': juanImage,
}

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

        <div className="mt-8 grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {board.members.map((member, index) => (
            <article
              key={`${member.name}-${index}`}
              className="flex w-full max-w-sm flex-col rounded-2xl border border-border bg-white p-4 text-center shadow-[0_8px_30px_rgba(20,53,85,0.06)]"
            >
              <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl border border-border bg-slate-50">
                {memberImages[member.imageUrl] ? (
                  <img
                    src={memberImages[member.imageUrl]}
                    alt={`Foto de ${member.name}`}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-3xl font-bold tracking-wide text-slate-500">
                    {member.initials || member.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="mt-4 leading-tight font-bold text-navy">{member.name}</h3>
              <p className="mt-2 leading-relaxed text-graphite">{member.role}</p>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BoardSection
