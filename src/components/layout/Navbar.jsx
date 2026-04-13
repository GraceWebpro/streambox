import { useEffect, useState } from "react";
import { NAV_LINKS } from '../../utils/constants';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useScrollSpy, scrollToSection } from '../hooks/useScrollSpy';
import SearchBar from "../ui/SearchBar";
import BrandLogo from '../../assets/logo-removebg-preview.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setOpen(false);

    if (link.type === "route") {
      navigate(link.path);
      return;
    }

    const scrollAction = () => {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: link.id } });
      } else {
        scrollToSection(link.id);
      }
    };

    setTimeout(scrollAction, 320);
  };

  const navLinks = [
    "Home",
    "Movies",
    "TV Shows",
    "New & Popular",
    "My List",
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full py-2 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/60 backdrop-blur-xl border-b border-surfaceLight shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 md:px-8 h-16 flex items-center justify-between">

          {/* BRAND */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold tracking-wide"
            >
              <img
                src={BrandLogo}
                alt="Stream Logo"
                className="w-8 h-8 object-contain"
              />
<div>
              <span className="text-textPrimary leading-none">
                Stream
              </span>
              <span className="text-primary leading-none">
                Box
              </span>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lgx:flex items-center gap-8 text-white/80">
            {/* {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all"
              >
                {link}
              </a>
            ))} */}

          {NAV_LINKS.map(link => {
            const isActive =
              link.type === "route"
                ? location.pathname === link.path
                : activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`
                hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all
                  ${isActive ? "text-primary" : ""}
                `}
              >
                {link.label}
              </button>
            );
          })}
          </div>

          {/* SEARCH + ACTIONS */}
          <div className="flex items-center gap-3">

            {/* SEARCH (premium) */}
            <SearchBar />

            {/* SIGN IN */}
            <Link to='/movies'><button className="hidden lgx:block bg-gradient-main hover:bg-gradient-hover px-6 py-3 rounded-xl font-medium shadow-glow transition">
              🎬 Movies
            </button></Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="lgx:hidden text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-background/95 backdrop-blur-xl border-l border-surfaceLight z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b border-surfaceLight">
          <div className="text-xl font-bold">
            <span className="text-textPrimary">Stream</span>
            <span className="text-primary">Box</span>
          </div>

          <button onClick={() => setOpen(false)} className="text-white text-xl">
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 p-5 text-textSecondary text-lg">
        {NAV_LINKS.map(link => {
            const isActive =
              link.type === "route"
                ? location.pathname === link.path
                : activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`
                hover:text-white transition relative text-left after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all
                  ${isActive ? "text-primary" : ""}
                `}
              >
                {link.label}
              </button>
            );
          })}

            <Link to='/movies'><button className="bg-gradient-main hover:bg-gradient-hover text-left text-white px-6 py-3 rounded-xl font-medium shadow-glow transition">
              🎬 Movies
            </button></Link>

        </div>
      </div>
    </>
  );
}