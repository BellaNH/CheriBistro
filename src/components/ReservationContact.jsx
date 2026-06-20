export default function ReservationContact({ config }) {
  const { contact, accentColor, contactEmail } = config
  const whatsapp = contact.whatsapp ?? contact.phone
  const whatsappHref = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`
    : `https://wa.me/${contact.phone?.replace(/\D/g, '')}`

  return (
    <section id="reservation" className="bg-[var(--color-cream)] px-4 py-14 lg:px-8">
      <div
        className="mx-auto max-w-7xl rounded-3xl border border-white/80 p-6 shadow-sm sm:p-10"
        style={{
          backgroundColor: config.colors?.sandLight ?? '#FFF9F5',
          boxShadow: '0 4px 24px rgba(255, 122, 32, 0.06)',
        }}
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2
              className="font-serif text-2xl sm:text-3xl"
              style={{ color: 'var(--color-text)' }}
            >
              Book your table
            </h2>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = `mailto:${contactEmail}?subject=Table reservation`
              }}
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
                style={{ color: 'var(--color-text)' }}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="date"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
                  style={{ color: 'var(--color-text)' }}
                />
                <input
                  type="time"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
                  style={{ color: 'var(--color-text)' }}
                />
              </div>
              <select
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
                style={{ color: 'var(--color-text)' }}
              >
                <option>2 guests</option>
                <option>4 guests</option>
                <option>6 guests</option>
                <option>8+ guests</option>
              </select>
              <button
                type="submit"
                className="w-full rounded-full py-3 text-sm font-medium text-[var(--color-cream)] sm:w-auto sm:px-8"
                style={{ backgroundColor: accentColor }}
              >
                Find a table
              </button>
            </form>
          </div>

          <div id="contact">
            <h2
              className="font-serif text-2xl sm:text-3xl"
              style={{ color: 'var(--color-text)' }}
            >
              Contact us
            </h2>

            {/* SM + LG: stacked contact list */}
            <ul className="mt-6 space-y-4 text-sm opacity-80 md:hidden lg:block">
              <li>
                <span className="font-medium" style={{ color: 'var(--color-text)' }}>
                  Address
                </span>
                <br />
                {contact.address}
              </li>
              <li>
                <span className="font-medium" style={{ color: 'var(--color-text)' }}>
                  Phone
                </span>
                <br />
                <a href={`tel:${contact.phone}`} className="hover:underline">
                  {contact.phone}
                </a>
              </li>
              <li>
                <span className="font-medium" style={{ color: 'var(--color-text)' }}>
                  Email
                </span>
                <br />
                <a href={`mailto:${contact.email}`} className="hover:underline">
                  {contact.email}
                </a>
              </li>
              <li>
                <span className="font-medium" style={{ color: 'var(--color-text)' }}>
                  WhatsApp
                </span>
                <br />
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:underline">
                  {whatsapp}
                </a>
              </li>
            </ul>

            {/* MD only: email + whatsapp left | address + phone right */}
            <div className="mt-6 hidden md:grid md:grid-cols-2 md:gap-8 lg:hidden">
              <ul className="space-y-4 text-sm opacity-80">
                <li>
                  <span className="font-medium" style={{ color: 'var(--color-text)' }}>
                    Email
                  </span>
                  <br />
                  <a href={`mailto:${contact.email}`} className="hover:underline">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <span className="font-medium" style={{ color: 'var(--color-text)' }}>
                    WhatsApp
                  </span>
                  <br />
                  <a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:underline">
                    {whatsapp}
                  </a>
                </li>
              </ul>
              <ul className="space-y-4 text-sm opacity-80 md:text-right">
                <li>
                  <span className="font-medium" style={{ color: 'var(--color-text)' }}>
                    Address
                  </span>
                  <br />
                  {contact.address}
                </li>
                <li>
                  <span className="font-medium" style={{ color: 'var(--color-text)' }}>
                    Phone
                  </span>
                  <br />
                  <a href={`tel:${contact.phone}`} className="hover:underline">
                    {contact.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
