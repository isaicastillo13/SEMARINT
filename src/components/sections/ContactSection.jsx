import { useState } from 'react'
import { siteContent } from '../../data/siteContent'

function ContactSection() {
  const { contact } = siteContent
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setFeedback(contact.pendingIntegration)
  }

  return (
    <section id="contacto" className="bg-white px-0 py-12 md:py-16">
      <div className="mx-auto w-[90vw]">

        <h2 className="mt-3 text-[1.95rem] leading-tight font-extrabold text-navy md:text-[2.8rem]">
          {contact.title}
        </h2>
        <p className="mt-2 max-w-[70ch] leading-relaxed text-graphite">{contact.intro}</p>

        <div className="mt-8 grid gap-4 xl:grid-cols-[0.72fr_1.12fr_0.7fr]">
          <figure className="overflow-hidden rounded-2xl border border-border bg-slate-200">
            <img
              src={contact.imageUrl}
              alt={contact.imageAlt}
              className="h-full min-h-[300px] w-full object-cover"
            />
            <figcaption className="border-t border-border bg-white px-4 py-3 text-sm font-semibold tracking-wide text-blue-700 uppercase">
              {contact.imageCaption}
            </figcaption>
          </figure>

          <form
            className="grid gap-3 rounded-2xl border border-border bg-white p-5 md:p-6"
            onSubmit={handleSubmit}
            aria-label="Formulario de solicitud de servicio"
          >
            <h3 className="text-[1.8rem] leading-tight font-bold text-navy uppercase">
              {contact.formTitle}
            </h3>
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="sr-only">
                  {contact.fields.fullName}
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder={contact.fields.fullName}
                  className="min-h-12 w-full rounded-md border border-border bg-ivory px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="company" className="sr-only">
                  {contact.fields.company}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder={contact.fields.company}
                  className="min-h-12 w-full rounded-md border border-border bg-ivory px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  {contact.fields.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={contact.fields.email}
                  className="min-h-12 w-full rounded-md border border-border bg-ivory px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  {contact.fields.phone}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={contact.fields.phone}
                  className="min-h-12 w-full rounded-md border border-border bg-ivory px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="cargoType" className="sr-only">
                  {contact.fields.cargoType}
                </label>
                <input
                  id="cargoType"
                  name="cargoType"
                  type="text"
                  placeholder={contact.fields.cargoType}
                  className="min-h-12 w-full rounded-md border border-border bg-ivory px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="route" className="sr-only">
                  {contact.fields.route}
                </label>
                <input
                  id="route"
                  name="route"
                  type="text"
                  placeholder={contact.fields.route}
                  className="min-h-12 w-full rounded-md border border-border bg-ivory px-3 py-2"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-1 inline-flex min-h-12 items-center justify-center rounded-md border border-blue-700 bg-blue-700 px-4 text-sm font-semibold tracking-wide text-white uppercase transition hover:bg-blue-800"
            >
              {contact.submitLabel}
            </button>

            {feedback ? (
              <p role="status" className="rounded-md border border-border bg-ivory px-3 py-2 text-sm">
                {feedback}
              </p>
            ) : null}
          </form>

          <aside className="rounded-2xl border border-white/20 bg-navy p-5 text-white md:p-6">
            <h3 className="leading-tight font-bold text-amber uppercase">
              {contact.directContact.title}
            </h3>

            <div className="mt-5 space-y-5">
              <div>
                <p className="font-semibold">{contact.directContact.emailLabel}</p>
                <a
                  href={contact.directContact.emailHref}
                  className="mt-1 inline-flex text-white/90 hover:text-white"
                >
                  {contact.directContact.emailValue}
                </a>
              </div>

              <div>
                <p className="font-semibold">{contact.directContact.phonesLabel}</p>
                <ul className="mt-1 space-y-1  text-white/90">
                  {contact.directContact.phones.map((phone) => (
                    <li key={phone.label}>
                      <a href={phone.href} className="hover:text-white">
                        {phone.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={contact.directContact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md border border-[#2fa15f] bg-[#2fa15f] px-4 text-sm font-semibold tracking-wide text-white uppercase transition hover:brightness-105"
            >
              {contact.directContact.whatsappLabel}
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
