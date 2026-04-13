import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import BrandLogo from './../../assets/logo-removebg-preview.png'
import styles from './../../NewHome.module.css';
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-950'>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
            <div
                className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <img src={BrandLogo} alt='brand-logo' className='w-8 h-8' />
                <Link to='/'><span>Stream<span className='text-primary'>Box</span></span></Link>
            </div>
            <p className="text-sm text-textSecondary leading-relaxed">
            Stream the latest movies and series in high quality. 
            Discover, watch, and download your favorites anytime.
          </p>
                <br />

            

                {/* Social handles */}
                <div className="flex items-center gap-3 mt-6">
                    <a href="https://instagram.com">
                        <FaInstagram className="text-3xl" />
                    </a>
                    <a href="https://facebook.com">
                        <FaFacebook className="text-3xl" />
                    </a>
                    <a href="https://linkedin.com">
                        <FaLinkedin className="text-3xl" />
                    </a>
                </div>
            </div>

            
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                <div>
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Browse</h1>
                        <ul className="space-y-2 text-sm text-textSecondary">
                            <li><Link to='/' className="hover:text-white cursor-pointer">Home</Link></li>
                            <li><Link to='/movies' className="hover:text-white cursor-pointer">Movies</Link></li>
                            <li><Link to='/#about' className="hover:text-white cursor-pointer">TV series Us</Link></li>
                            <li><Link to='/#trending' className="hover:text-white cursor-pointer">Trending</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Genre</h1>
                        <ul className="space-y-2 text-sm text-textSecondary">
                        <li><Link to='/faq' className="hover:text-white cursor-pointer">Action</Link></li>
                            <li><Link to='/track-order' className="hover:text-white cursor-pointer">Comedy</Link></li>
                            <li><Link to='/cart' className="hover:text-white cursor-pointer">Drama</Link></li>
                            <li><Link to='/checkout' className="hover:text-white cursor-pointer">Horror</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Support</h1>
                        <ul className="space-y-2 text-sm text-textSecondary">
                            <li><Link to='/privacy-policy' className="hover:text-white cursor-pointer">Help Center</Link></li>
                            <li><Link to='/privacy-policy' className="hover:text-white cursor-pointer">Privacy Policy</Link></li>
                            <li><Link to='/terms' className="hover:text-white cursor-pointer">Terms of Use</Link></li>
                            <li><Link to='/cookie-policy' className="hover:text-white cursor-pointer">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div>
            <div className="text-center text-textMuted py-6 border-t-2 border-gray-300/50">
            © {new Date().getFullYear()} MovieFlix. All rights reserved.
            Built with ❤️ by GraceTech.            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
