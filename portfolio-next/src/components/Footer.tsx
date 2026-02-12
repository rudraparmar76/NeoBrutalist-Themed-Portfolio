import { RiGithubFill, RiLinkedinFill, RiMailLine } from "react-icons/ri";

const socials = [
  { href: "https://github.com/rudraparmar76", icon: RiGithubFill, hoverColor: "hover:text-neo-yellow" },
  { href: "https://www.linkedin.com/in/rudra-parmar-089125245/", icon: RiLinkedinFill, hoverColor: "hover:text-neo-purple" },
  { href: "mailto:rudraparmar1309@gmail.com", icon: RiMailLine, hoverColor: "hover:text-neo-blue" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 border-t-8 border-neo-green font-[family-name:var(--font-mono)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-black mb-6 font-[family-name:var(--font-display)]">RUDRA.</h2>
          <p className="text-gray-400 max-w-sm">
            Designing for the future with the raw aesthetics of the past. No cookies, no trackers, just code.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-neo-green mb-4 border-b border-gray-700 pb-2">SITEMAP</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white hover:underline decoration-neo-pink decoration-2">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white hover:underline decoration-neo-pink decoration-2">
                Works
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white hover:underline decoration-neo-pink decoration-2">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white hover:underline decoration-neo-pink decoration-2">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-neo-green mb-4 border-b border-gray-700 pb-2">SOCIALS</h3>
          <div className="flex gap-4">
            {socials.map(({ href, icon: Icon, hoverColor }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${hoverColor} transition-colors`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm">
        <p>© 2026 RUDRA.exe // SYSTEM_END</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full text-[20vw] font-black text-white opacity-[0.03] leading-none select-none pointer-events-none text-center">
        BRUTAL
      </div>
    </footer>
  );
}
