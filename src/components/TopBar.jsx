export default function TopBar({ config }) {
  const bg = config.colors?.orange ?? config.colors?.footer ?? '#FF7A20'

  return (
    <div
      className="px-4 py-2 text-center text-xs text-[var(--color-cream)] sm:text-sm "
      style={{ backgroundColor: bg }}
    >
      {config.promoText}
    </div>
  )
}
