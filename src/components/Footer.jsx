export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <div className="text-xl font-bold text-amber-400">IELTS Pro Academy</div>
          <div className="text-sm text-gray-400 mt-1">Helping you reach your desired band.</div>
        </div>
        <div className="mt-4 md:mt-0 text-sm">
          <a href="#" className="mr-4 hover:text-amber-400 transition duration-300">Privacy</a>
          <a href="#" className="mr-4 hover:text-amber-400 transition duration-300">Terms</a>
          <a href="#" className="hover:text-amber-400 transition duration-300">Contact</a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-4">© 2025 IELTS Pro Academy</div>
    </footer>
  );
}
