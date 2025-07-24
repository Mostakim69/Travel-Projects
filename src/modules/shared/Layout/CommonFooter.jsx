const CommonFooter = () => {
  return (
    <div className="max-container" data-aos="flip-down">
      <footer className="bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a] text-gray-300 px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h6 className="footer-title text-cyan-400 mb-2">Services</h6>
            <ul className="space-y-1">
              {["Branding", "Design", "Marketing", "Advertisement"].map(
                (item) => (
                  <li
                    key={item}
                    className="transition hover:translate-x-1 hover:text-cyan-400 duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h6 className="footer-title text-cyan-400 mb-2">Company</h6>
            <ul className="space-y-1">
              {["About us", "Contact", "Jobs", "Press kit"].map((item) => (
                <li
                  key={item}
                  className="transition hover:translate-x-1 hover:text-cyan-400 duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="footer-title text-cyan-400 mb-2">Legal</h6>
            <ul className="space-y-1">
              {["Terms of use", "Privacy policy", "Cookie policy"].map(
                (item) => (
                  <li
                    key={item}
                    className="transition hover:translate-x-1 hover:text-cyan-400 duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </footer>

      <footer className="border-t border-gray-700 bg-[#111111] text-gray-400 px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            className="fill-cyan-400 animate-pulse"
          >
            <path d="M22.672 15.226l-2.432.811...z" />
          </svg>
          <p className="text-sm">
            <span className="text-cyan-300 font-semibold">DeshGuide</span> —
            Your Trusted Travel Partner
          </p>
        </div>
        <div className="flex gap-4 text-cyan-300">
          {[twitterPath, ytPath, fbPath].map((d, i) => (
            <a key={i} className="hover:text-white transition duration-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:scale-110 transition duration-300"
              >
                <path d={d} />
              </svg>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

const twitterPath = `M24 4.557c-.883.392-1.832...`;
const ytPath = `M19.615 3.184c-3.604-.246...`;
const fbPath = `M9 8h-3v4h3v12h5v-12h3.642...`;

export default CommonFooter;
