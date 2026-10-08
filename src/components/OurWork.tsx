export default function OurWork() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-500 mb-3">
            On The Ground
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Work We're Proud Of
          </h2>
          <p className="mt-3 text-slate-500 text-sm max-w-lg leading-relaxed">
            Real projects, real sites. Our engineers and artisans deliver
            quality work across residential and commercial builds in Nigeria.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Block wall & plumbing */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-4/3">
            <img
              src="/images/work1.webp"
              alt="Active construction site showing block wall structure with plumbing installation"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            {/* Fixed: was 'bg-linear-to-trom-…' (malformed), now correct */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1a]/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-300 mb-1 block">
                Construction & Plumbing
              </span>
              <p className="text-white font-semibold text-sm leading-snug">
                Block wall construction with integrated plumbing
              </p>
            </div>
          </div>

          {/* Slab reinforcement */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-4/3">
            <img
              src="/images/work2.webp"
              alt="Slab reinforcement with plumbing layout on a live project"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1a]/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-300 mb-1 block">
                Structural & MEP
              </span>
              <p className="text-white font-semibold text-sm leading-snug">
                Slab reinforcement with embedded plumbing network
              </p>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-100 rounded-xl overflow-hidden border border-slate-100">
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '200+', label: 'Artisans Placed' },
            { value: '5', label: 'Service Categories' },
            { value: '100%', label: 'Follow-Up Rate' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white px-6 py-5 text-center">
              <p className="text-2xl font-extrabold text-[#0f172a]">{value}</p>
              <p className="text-xs text-slate-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
