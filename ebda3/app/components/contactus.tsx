import React from 'react'

export const Contactus = () => {
  return (
    <section id="contact" className="border-t border-gray-700 py-20 px-6 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
      <p className="max-w-xl mx-auto">يمكنك التواصل معنا عبر البريد الإلكتروني أو من خلال حساباتنا على وسائل التواصل.</p>
      <div className="mt-6 flex justify-center gap-4">
        <a href="mailto:email@example.com" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full">Gmail</a>
        <a href="https://linkedin.com/in/mohamedhossam" className="bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-full">LinkedIn</a>
        <a href="https://linkedin.com/in/mohamedhossam" className="bg-green-700 hover:bg-blue-800 px-6 py-2 rounded-full">Whatsapp</a>
      </div>
    </section>
  )
}
