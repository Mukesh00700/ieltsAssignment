import { useState } from "react";
import { IoMenuSharp, IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const navItems = [
  { label: "Test Takers", subItems: ["Prepare for IELTS", "Practice Tests", "Band Predictor", "Speaking Tips"] },
  { label: "Organizations", subItems: ["IELTS Partners", "Institutions", "Education Agents"] },
  { label: "News & Reports", subItems: ["Latest News", "Score Reports", "Updates"] },
  { label: "Researches", subItems: ["IELTS Research", "Studies", "Publications"] },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  const isExpanded = activeIndex !== null || searchClicked;

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    setSearchClicked(false);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    setSearchClicked(false);
  };

  return (
    <nav className="bg-indigo-300 shadow sticky top-0 z-50">
      {/* Navbar container */}
      <div
        className="max-w-7xl mx-auto px-4 transition-all duration-500 relative"
        style={{ height: isExpanded ? "300px" : "64px" }}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main navbar */}
        <div className="flex items-center justify-between h-16 relative z-10">
          {/* Left side: Logo + Menu */}
          <div className="flex items-center gap-6">
            <div className="text-2xl font-bold text-indigo-700">IELTS Pro</div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-6 relative h-full">
              {navItems.map((item, index) => (
                <li
                  key={item.label}
                  className="relative h-full"
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <button className="text-gray-700 font-medium hover:text-indigo-700 transition duration-300 h-full flex items-center">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: Search + Book a Test */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="text-gray-700 hover:text-indigo-700 text-2xl"
              onClick={() => {
                setSearchClicked(prev => !prev);
                setActiveIndex(null);
              }}
            >
              <IoSearch />
            </button>
            <button className="bg-white text-indigo-700 px-4 py-2 rounded hover:bg-indigo-700 hover:text-white transition duration-300">
              Book a Test
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 text-2xl hover:text-white"
              onClick={() => setMenuClicked(prev => !prev)}
            >
              {menuClicked ? <RxCross1 /> : <IoMenuSharp />}
            </button>
          </div>
        </div>

        {/* Expanded area */}
        <div
          className="absolute top-16 left-0 w-full bg-indigo-300 transition-all duration-500 overflow-hidden"
          style={{ height: isExpanded ? "236px" : "0px" }}
        >
          <div className="flex flex-col h-full">
            {/* Top white line */}
            <div className="w-full h-0.5 bg-white"></div>

            {/* Options or search input */}
            <div className="px-4 pt-4 flex flex-col gap-4">
              {activeIndex !== null && (
                <div className="flex gap-6">
                  {navItems[activeIndex].subItems.map((sub, i) => (
                    <div
                      key={i}
                      className="text-gray-700 text-2xl hover:text-indigo-200 cursor-pointer transition duration-200"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
              {searchClicked && (
                <div>
                  <p className="text-2xl text-white mb-2">Want to find something?</p>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-4/5 p-2 rounded border border-indigo-200 focus:outline-none mr-2 focus:ring-2 focus:ring-indigo-400"
                    />
                    <button className="bg-white text-indigo-700 px-4 py-2 rounded hover:bg-indigo-700 hover:text-white transition duration-300">
                      Search
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom white line */}
            <div className="w-full h-0.5 bg-white mt-35"></div>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-indigo-50 z-50 transition-transform duration-300 transform ${
          menuClicked ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center px-8 py-6 border-b-2 border-white">
          <span className="text-2xl font-bold text-indigo-700">IELTS Pro</span>
          <button
            className="text-gray-700 text-3xl hover:text-indigo-700"
            onClick={() => setMenuClicked(false)}
          >
            <RxCross1 />
          </button>
        </div>

        <div className="flex flex-col items-start p-8 gap-6">
          {navItems.map((item, i) => (
            <div key={i} className="flex flex-col gap-2 w-full border-b border-indigo-200 pb-4">
              <span className="text-indigo-700 font-bold text-lg">{item.label}</span>
              <ul className="flex flex-col pl-4 gap-1">
                {item.subItems.map((sub, j) => (
                  <li
                    key={j}
                    className="text-gray-700 hover:text-indigo-700 cursor-pointer transition duration-200"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
