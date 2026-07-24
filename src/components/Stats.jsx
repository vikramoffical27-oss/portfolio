function Stats() {
  const stats = [
    { number: "2", title: "Projects" },
    { number: "10+", title: "Technologies" },
    { number: "1", title: "Internship" },
    { number: "100%", title: "Dedication" },
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-gray-800 p-8 rounded-xl text-center hover:scale-105 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-4xl font-bold text-blue-500">
              {item.number}
            </h2>

            <p className="mt-3 text-gray-300">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;