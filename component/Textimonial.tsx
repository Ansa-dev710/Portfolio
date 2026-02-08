import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Jeremy Winston",
    role: "CEO XYZ Inc.",
    image: "/avatar1.jpg",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    id: 2,
    name: "Richard Atkinson",
    role: "CEO XYZ Inc.",
    image: "/avatar2.jpg",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    id: 3,
    name: "Jeremy Winston",
    role: "CEO XYZ Inc.",
    image: "/avatar3.jpg",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    id: 4,
    name: "Richard Atkinson",
    role: "CEO XYZ Inc.",
    image: "/avatar4.jpg",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className='py-24 px-6 bg-[#f8f9fa]'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-semibold text-center text-gray-900 mb-20'>
          Happy Clients
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16'>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className='flex items-start gap-6'>
              <div className='relative shrink-0 w-16 h-16'>
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className='rounded-full object-cover border-4 border-white shadow-sm'
                />
              </div>

              <div className='relative bg-white p-8 rounded-lg shadow-md'>
                <div className='absolute top-6 -left-2 w-4 h-4 bg-white rotate-45 transform shadow-[-2px_2px_2px_rgba(0,0,0,0.02)]' />

                <p className='text-gray-400 text-sm leading-relaxed mb-6 italic'>
                  &ldquo;{t.quote}&rdquo;
                </p>

                <p className='text-xs text-gray-500'>
                  <span className='text-[#96bb7c] italic font-medium'>
                    — {t.name}
                  </span>
                  , {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
