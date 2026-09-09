export default function SectionLoader({ minHeight }) {
  return (
    <div
      aria-busy="true"
      aria-label="Loading section"
      className="flex items-center justify-center bg-[#FFF5EB]"
      style={{ minHeight }}
    >
      <span className="h-8 w-8 animate-spin rounded-full border-4 border-[#FB7A00]/20 border-t-[#FB7A00]" />
    </div>
  )
}
