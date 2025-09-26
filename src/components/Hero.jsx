import heroVideo from "../assets/ieltsVideo.mp4";
import test from "../assets/test.png";
import test1 from "../assets/test1.png";


export default function Hero() {
  return (
    <section className="relative bg-gray-900">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 md:py-40 flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
        
        {/* Left Side Text */}
        <div className="flex-1 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold animate-fadeIn">
            Achieve Your Dream IELTS Score
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 animate-fadeIn delay-150">
            Personalized practice, expert mentors, AI-powered band prediction, and mock tests tailored to you.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#features"
              className="px-8 py-3 rounded-lg bg-amber-400 text-gray-900 shadow-lg hover:bg-amber-500 transition duration-300 animate-bounce"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-gray-300 text-white hover:bg-amber-400 hover:text-gray-900 transition duration-300"
            >
              Book Trial
            </a>
          </div>
        </div>
        {/* Right Side Mock Test Card */}
            <div className="flex-1 flex justify-center md:justify-end">
                <div className="w-full max-w-md flex items-center gap-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-4 hover:scale-105 transition-transform duration-500">
                    
                    {/* Small image on the left */}
                    <img
                    src={test1}
                    alt="Mock Test"
                    className="w-16 h-16 object-cover rounded-lg"
                    />

                    {/* Text content */}
                    <div className="flex flex-col">
                    <p className="text-white text-xl font-bold">
                        Practice Mock Test
                    </p>
                    <p className="text-gray-200 text-sm md:text-base">
                        Get the authentic PTE exam experience with all four modules covered!
                    </p>
                    </div>

                </div>
            </div>


      </div>
    </section>
  );
}
