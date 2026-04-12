import React from "react";
import { Helmet } from "react-helmet";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen pt-28 pb-20 bg-gray-50 dark:bg-gray-950 dark:text-white">
      <Helmet>
        <title>Contact | QuickBite</title>
        <meta
          name="description"
          content="Get in touch with the QuickBite team. This page demonstrates a modern contact page layout for food ordering platforms."
        />
      </Helmet>
      <div className="container">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Contact <span className="text-primary">QuickBite</span>
          </h1>
          <p className="opacity-70 max-w-xl mx-auto">
            Questions, orders, or support? We're here to help you 24/7.
            Reach out and get fast response.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT — CONTACT INFO */}
          <div className="space-y-8">

            {/* Glass Card */}
            <div className="bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl">

              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-6">

                {/* WhatsApp */}
                <a
                  href="https://wa.me/234XXXXXXXXXX?text=Hello%20QuickBite"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-green-500/10 transition"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500 text-white">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm opacity-70">Fastest response</p>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-sm opacity-70">+234 XXX XXX XXXX</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary text-white">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm opacity-70">Lagos, Nigeria</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-500 text-white">
                    <FaClock />
                  </div>
                  <div>
                    <p className="font-semibold">Opening Hours</p>
                    <p className="text-sm opacity-70">
                      Mon – Sun • 8:00 AM — 10:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Delivery Area Card */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-2">
                🚚 Delivery Coverage
              </h3>
              <p className="opacity-90">
                We deliver across Lagos with fast dispatch and secure packaging.
                Average delivery time: 30–45 minutes.
              </p>
            </div>

          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl">

            <h3 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label className="text-sm opacity-70">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="
                    w-full mt-2 px-4 py-3 rounded-xl
                    bg-white/80 dark:bg-white/10
                    border border-gray-200 dark:border-white/20
                    outline-none focus:ring-2 focus:ring-primary
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm opacity-70">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="
                    w-full mt-2 px-4 py-3 rounded-xl
                    bg-white/80 dark:bg-white/10
                    border border-gray-200 dark:border-white/20
                    outline-none focus:ring-2 focus:ring-primary
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm opacity-70">Message</label>
                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="
                    w-full mt-2 px-4 py-3 rounded-xl
                    bg-white/80 dark:bg-white/10
                    border border-gray-200 dark:border-white/20
                    outline-none focus:ring-2 focus:ring-primary
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full py-4 rounded-xl
                  text-white font-semibold
                  bg-gradient-to-r from-primary to-secondary
                  hover:scale-105 transition shadow-lg
                "
              >
                Send Message
              </button>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;