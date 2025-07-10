export default function Navbar({className, closeNavbar}) {
  return (
    <nav className={`md:block ${className}`}>
      <ul className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-start">
        <li>
          <a onClick={closeNavbar} href="#home" className="text-blue-50 hover:underline">
            Home
          </a>
        </li>
        <li>
          <a onClick={closeNavbar} href="#about" className="text-blue-50 hover:underline">
            About Us
          </a>
        </li>
        <li>
          <a onClick={closeNavbar} href="#services" className="text-blue-50 hover:underline">
            Services
          </a>
        </li>
        <li>
          <a onClick={closeNavbar} href="#Testimonials" className="text-blue-50 hover:underline">
            Testimonials
          </a>
        </li>
      </ul>
    </nav>
  );
}
