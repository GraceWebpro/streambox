import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import BrandLogo from './../../assets/brandLogo.png'
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
                <img src={BrandLogo} alt='brand-logo' className={styles['brand-logo']} />
                <Link to='/'><span>Quick<span className='text-primary'>Bite</span></span></Link>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
                QuickBite is a modern food ordering UI template built with React and Tailwind CSS. 
                Perfect for restaurants, cloud kitchens, and food delivery startups looking for a 
                fast and beautiful ordering experience.
            </p>
                <br />

                <div className="mt-3 mb-3">
                <p className="text-sm mb-2 opacity-80">
                    Subscribe to our newsletter
                </p>

                <div className="flex items-center gap-2">
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-lg border border-black/10 dark:border-white/20  bg-white/5 focus:outline-none"
                    />

                    <button className="px-4 py-2 bg-primary text-white rounded-lg">
                    Join
                    </button>
                </div>
                </div>
                <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>New York, USA.</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt />
                    <p>+1 (000) 000-0000</p>
                </div>

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
                        <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Company</h1>
                        <ul className="flex flex-col gap-3">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/meals'>Meals</Link></li>
                            <li><Link to='/#about'>About Us</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Support</h1>
                        <ul className="flex flex-col gap-3">
                        <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/track-order'>Track Order</Link></li>
                            <li><Link to='/cart'>View Cart</Link></li>
                            <li><Link to='/checkout'>Checkout</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Legal</h1>
                        <ul className="flex flex-col gap-3">
                        <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                            <li><Link to='/terms'>Terms & Conditions</Link></li>
                            <li><Link to='/refund'>Refund Policy</Link></li>
                            <li><Link to='/cookie-policy'>Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div>
            <div className="text-center py-10 border-t-2 border-gray-300/50">
            © {new Date().getFullYear()} QuickBite Template. All rights reserved.
            Built with ❤️ by GraceTech.            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
