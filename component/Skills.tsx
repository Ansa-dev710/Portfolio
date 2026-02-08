import Image from "next/image";

export default function BioSection() {
  const skills = [
    { name: "Design", value: 85 },
    { name: "React.Js", value: 90 },
    { name: "Node.js", value: 80 },
    { name: "Next.js", value: 88 },
    { name: "Github", value: 80 },
  ];

  return (
    <section className='py-20 px-6 max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
        <div className='relative w-full aspect-4/5 lg:aspect-auto lg:h-175'>
          <Image
            src='/skills.jpg'
            alt='James Anderson Portrait'
            fill
            className='object-cover'
          />
        </div>

        <div className='relative pt-10 lg:pt-0'>
          <div className='absolute -top-4 -left-40 -z-10 opacity-30 hidden md:block'>
            <div className='grid grid-cols-6 gap-7'>
              {[...Array(36)].map((_, i) => (
                <div
                  key={i}
                  className='w-2 h-2 bg-gray-900 rounded-full'
                />
              ))}
            </div>
          </div>

          <h2 className='text-4xl font-semibold text-gray-900 mb-8'>My Bio</h2>

          <div className='space-y-6 text-gray-500 leading-relaxed mb-12 max-w-xl'>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>

          <div className='max-w-md'>
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                label={skill.name}
                percentage={skill.value}
              />
            ))}
          </div>

          <div className='flex flex-wrap gap-4 mt-12'>
            <button className='px-8 py-3 bg-[#96bb7c] text-white text-xs font-bold tracking-widest rounded-full hover:bg-[#85a86a] transition-colors'>
              HIRE ME
            </button>
            <button>
              <a
                href='/ansa.pdf'
                download='my resume'
                className='px-8 py-3 bg-[#6c757d] text-white text-xs font-bold tracking-widest rounded-full hover:bg-[#5a6268] transition-colors uppercase cursor-pointer'>
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const SkillBar = ({
  label,
  percentage,
}: {
  label: string;
  percentage: number;
}) => (
  <div className='mb-8'>
    <p className='text-md font-semibold text-gray-800 mb-4'>{label}</p>
    <div className='relative w-full h-0.5 bg-gray-200'>
      <div
        className='absolute top-0 left-0 h-full bg-[#96bb7c] transition-all duration-1000'
        style={{ width: `${percentage}%` }}>
        <div className='absolute -top-8 right-0 bg-[#96bb7c] text-white text-[10px] px-1.5 py-0.5 rounded flex flex-col items-center'>
          {percentage}%
          <div className='w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-[#96bb7c] absolute top-full'></div>
        </div>
      </div>
    </div>
  </div>
);
