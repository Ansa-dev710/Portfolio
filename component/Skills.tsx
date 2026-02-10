import Image from "next/image";

export default function BioSection() {
  const skills = [
    { name: "Design", value: 85 },
    { name: "React.js", value: 95 },
    { name: "Node.js", value: 85 },
    { name: "Next.js", value: 88 },
    { name: "GitHub", value: 80 },
  ];

  return (
    <section className='py-20 px-6 max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
        <div className='relative w-full aspect-4/5 lg:aspect-auto lg:h-175'>
          <Image
            src='/skill.jpg'
            alt='Full Stack Developer Portrait'
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
              I’m a passionate{" "}
              <span className='text-gray-800 font-medium'>
                Full Stack Web Developer
              </span>{" "}
              with experience in building modern, scalable, and responsive web
              applications. I work with
              <span className='text-gray-800 font-medium'>
                {" "}
                React.js and Next.js
              </span>{" "}
              on the frontend to create smooth and user-friendly interfaces.
            </p>
            <p>
              On the backend, I use{" "}
              <span className='text-gray-800 font-medium'>Node.js</span> to
              manage server-side logic and APIs. I also have strong command over{" "}
              <span className='text-gray-800 font-medium'>GitHub</span> for
              version control and project management.
            </p>
            <p>
              I enjoy solving problems, writing clean code, and continuously
              learning new technologies to deliver complete end-to-end web
              solutions.
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

            <a
              href='/ansa.pdf'
              download='my-resume'
              className='px-8 py-3 bg-[#6c757d] text-white text-xs font-bold tracking-widest rounded-full hover:bg-[#5a6268] transition-colors uppercase cursor-pointer'>
              Download CV
            </a>
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
