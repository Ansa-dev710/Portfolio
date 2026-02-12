"use client";

export default function Contact() {
  return (
    <section
      id='contact'
      className='py-20 bg-white px-6 lg:px-12'>
      <div className='max-w-3xl mx-auto text-center mb-12'>
        <h2 className='text-4xl font-bold mb-6'>Contact Me</h2>
        <p className='text-gray-600 mb-8'>
          Want to work together? Send me a message!
        </p>
      </div>
      <form className='max-w-2xl mx-auto grid grid-cols-1 gap-6'>
        <input
          type='text'
          placeholder='Your Name'
          className='border border-gray-300 rounded-lg p-3'
        />
        <input
          type='email'
          placeholder='Your Email'
          className='border border-gray-300 rounded-lg p-3'
        />
        <textarea
          placeholder='Your Message'
          rows={5}
          className='border border-gray-300 rounded-lg p-3'></textarea>
        <button
          type='submit'
          className='px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition'>
          Send Message
        </button>
      </form>
    </section>
  );
}
