export function Logo() {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-primary text-primary-foreground font-bold shadow-lg">
      <span className="text-lg">JC</span>
      <div className="absolute inset-0 bg-primary/90 opacity-0 transition-opacity duration-300 hover:opacity-100" />
    </div>
  )
}

