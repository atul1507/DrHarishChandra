const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">


      {/* Border wrapper */}
      <div className="border border-[#3C2F2B] p-4">

        {/* Hero Image */}
        <section className="w-full">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/hero-desktop.jpeg"
            />
            <img
              src="/hero-mobile.jpeg"
              alt="Hero"
              className="w-full h-auto object-contain"
            />
          </picture>
        </section>

        {/* Text Content */}
        <section className="mt-10 text-gray-700 text-lg leading-relaxed">
          <p>
            <span className="font-semibold">Dr. Harish Chandra</span> is an Assistant Professor of Mathematics in the Department of Mathematics and Scientific Computing at Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur, where he has been actively engaged in teaching, research, and academic administration for nearly two decades.
          </p>

          <p className="mt-4">
            He earned his Ph.D. in Mathematics from the University of Lucknow and is a UGC-NET (JRF & SRF) qualified scholar, reflecting his strong academic foundation and research capabilities.
          </p>

          <p className="mt-4">
            Dr. Chandra is a dedicated educator known for his structured approach to mathematical concepts and his commitment to nurturing analytical and problem-solving skills among students.
          </p>
        </section>

      </div>
    </main>
  );
};

export default Home;
