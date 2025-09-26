export default function Testimonials() {
  const data = [
    { name: 'Priya', text: 'Scored 8.0! The speaking practice made the difference.' },
    { name: 'Rahul', text: 'The mock tests and detailed reports helped me focus.' },
  ];

  return (
    <section id="testimonials" className="bg-indigo-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-indigo-700 animate-fadeIn">Students Love Us</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((t) => (
            <div key={t.name} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 animate-fadeIn">
              <div className="flex items-center mb-4 gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">Student</p>
                </div>
              </div>
              <p className="text-gray-700 italic">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
