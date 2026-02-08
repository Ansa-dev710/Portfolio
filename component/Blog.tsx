import Link from "next/link";

const BlogSection = () => {
  const posts = [
    {
      date: "FEB 06, 2026",
      title: "Mastering the MERN Stack: My Journey at IDEO-versity",
      readTime: "5 MINS READ",
      link: "#",
    },
    {
      date: "JAN 15, 2026",
      title: "Engineering Scalable Web Solutions at Heapware",
      readTime: "4 MINS READ",
      link: "#",
    },
    {
      date: "DEC 10, 2025",
      title: "From Zoology to Full-Stack: Bridging Science and Code",
      readTime: "6 MINS READ",
      link: "#",
    },
  ];

  return (
    <section className='py-24 px-6 bg-white'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl font-semibold text-center text-gray-900 mb-20'>
          Read on Medium
        </h2>

        <div className='space-y-0'>
          {posts.map((post, index) => (
            <Link
              href={post.link}
              key={index}
              className='group block border-t border-gray-100 py-10 transition-colors hover:bg-gray-50/50 px-4'>
              <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                <div className='space-y-2'>
                  <p className='text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase'>
                    {post.date}
                  </p>

                  <h3 className='text-xl font-medium text-gray-800 group-hover:text-[#96bb7c] transition-colors duration-300'>
                    {post.title}
                  </h3>
                </div>

                <div className='text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase whitespace-nowrap'>
                  {post.readTime}
                </div>
              </div>
            </Link>
          ))}

          <div className='border-t border-gray-100' />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
