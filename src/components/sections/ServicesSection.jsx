import { siteContent } from "../../data/siteContent";
import servicesImage from "../../assets/hero_7.png";

function ServicesSection() {
  const { services } = siteContent;
  const topBorderAccent = [
    "border-t-sky-400",
    "border-t-amber",
    "border-t-blue-700",
  ];

  return (
    <section id="servicios" className="bg-surfaceAlt px-0 py-4">
      <div className="mx-auto w-[90vw]">
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-stretch">
          <div>
            <h2 className="mt-3 text-[1.9rem] leading-tight font-extrabold text-navy md:text-[2.65rem]">
              {services.title}
            </h2>
            <p className="mt-2 max-w-[65ch] leading-relaxed text-graphite">
              {services.intro}
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {services.items.map((service, index) => (
                <article
                  key={service.title}
                  className={`rounded-xl border border-border bg-white p-5 border-t-4 ${topBorderAccent[index % topBorderAccent.length]}`}
                >
                  <h3 className="leading-tight font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-graphite">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>

            <article className="mt-6 rounded-xl border border-white/15 bg-navy px-5 py-5 md:px-6 md:py-6">
              <h3 className="leading-tight font-bold text-amber uppercase">
                {services.scopeBox.title}
              </h3>
              <p className="mt-3leading-snug font-semibold text-white">
                {services.scopeBox.description}
              </p>
            </article>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-border bg-slate-200">
            <img
              src={servicesImage}
              alt={services.imageAlt}
              className="h-full min-h-[300px] w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
