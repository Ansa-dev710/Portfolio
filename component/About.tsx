"use client";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 95 },
];

export default function About() {
  return (
    <section
      id='about'
      className='py-20 bg-white px-6 lg:px-12'>
      <div className='max-w-5xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6'>About Me</h2>
        <p className='text-gray-600 mb-8'>
          I am a Full Stack Developer with expertise in React, Next.js, Node.js,
          and Tailwind CSS. I craft scalable, high-performance web applications.
        </p>
        <div className='flex flex-col md:flex-row justify-center gap-6 mt-10'>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className='w-full md:w-1/4 text-left'>
              <h3 className='text-gray-800 font-semibold mb-2'>{skill.name}</h3>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div
                  className='bg-indigo-600 h-2 rounded-full'
                  style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
