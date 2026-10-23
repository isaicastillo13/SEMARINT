import { siteContent } from '../../data/siteContent'

function Footer() {
  return (
    <footer className="border-t border-white/20 bg-navy">
      <div className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] flex-col gap-3 py-6 md:w-[min(1120px,calc(100%-3rem))] md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white">{`${siteContent.companyName} · ${siteContent.legalName}`}</p>
        <a
          href="#inicio"
          className="w-fit border-b border-amber text-sm text-white transition hover:text-amber"
        >
          Volver al inicio
        </a>
      </div>
    </footer>
  )
}

export default Footer
