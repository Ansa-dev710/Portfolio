import Image from "next/image";
import { Building2, MapPin, Calendar } from "lucide-react";

const ResumeSection = () => {
  const experiences = [
    {
      title: "Web-Developer",
      company: "Heapware",
      location: "Lahore",
      period: "2025 - Present",
      type: "INTERNSHIP",
      typeColor: "bg-green-50 text-green-600",
    },
    {
      title: "Media Marketing",
      company: "IDEO-versity",
      location: "Arfa Kareem Tower",
      period: "2024 - 2025",
      type: "PART TIME",
      typeColor: "bg-green-50 text-green-600",
    },
  ];

  const education = [
    {
      degree: "Full Stack Web Development (MERN)",
      school: "IDEO-versity",
      period: "2025",
    },
    {
      degree: "Bachelor's of Science in Zoology",
      school: "University of Faisalabad",
      period: "2023 - 2025",
    },
  ];

  return (
    <section className='py-20 px-6 max-w-7xl mx-auto bg-gray-50'>
      <h2 className='text-4xl font-bold text-center text-gray-900 mb-16 relative after:absolute after:left-1/2 after:-bottom-4 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-green-500 after:rounded-full'>
        Resume
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
        {/* Profile Image */}
        <div className='lg:col-span-4 sticky top-10'>
          <div className='relative aspect-3/4 w-full overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'>
            <Image
              src='/'
              alt='Ansa Asghar'
              fill
              className='object-cover'
            />
          </div>
        </div>

        {/* Resume Details */}
        <div className='lg:col-span-8 space-y-12'>
          {/* Work Experience */}
          <div>
            <h3 className='text-2xl font-semibold text-gray-800 mb-8 border-b pb-2 border-gray-200'>
              Work Experience
            </h3>
            <div className='space-y-6'>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className='group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100'>
                  <div className='flex justify-between items-start mb-4'>
                    <h4 className='text-xl font-semibold text-gray-800'>
                      {exp.title}
                    </h4>
                    <span
                      className={`px-3 py-1 text-[10px] font-bold tracking-widest rounded-full ${exp.typeColor}`}>
                      {exp.type}
                    </span>
                  </div>
                  <div className='flex flex-wrap gap-6 text-gray-500 text-sm'>
                    <span className='flex items-center gap-1.5'>
                      <Building2 size={14} /> {exp.company}
                    </span>
                    <span className='flex items-center gap-1.5'>
                      <MapPin size={14} /> {exp.location}
                    </span>
                    <span className='flex items-center gap-1.5'>
                      <Calendar size={14} /> {exp.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className='text-2xl font-semibold text-gray-800 mb-8 border-b pb-2 border-gray-200'>
              Education
            </h3>
            <div className='space-y-6'>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className='p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100'>
                  <div className='flex justify-between items-start mb-2'>
                    <h4 className='text-xl font-semibold text-gray-800'>
                      {edu.degree}
                    </h4>
                    <span className='flex items-center gap-1.5 text-gray-400 text-sm'>
                      <Calendar size={14} /> {edu.period}
                    </span>
                  </div>
                  <p className='text-gray-500 text-sm flex items-center gap-1.5'>
                    <Building2 size={14} /> {edu.school}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
