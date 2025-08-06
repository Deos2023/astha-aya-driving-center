
"use client"
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService Needed: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/917003088484?text=${whatsappMessage}`, '_blank');
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const services = [
    { name: "Day & Night Nurse", icon: "🩺" },
    { name: "Baby Sitting", icon: "👶" },
    { name: "House Maid", icon: "🧹" },
    { name: "Elder Care", icon: "👵" },
    { name: "Home Cooking", icon: "🍳" },
    { name: "Physiotherapy", icon: "💆" },
    { name: "Driving Services", icon: "🚗" },
    { name: "Housekeeping", icon: "🏠" }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "24/7", label: "Availability" },
    { number: "50+", label: "Trained Staff" },
    { number: "10+", label: "Services" }
  ];

  const testimonials = [
    { name: "Priya Sharma", role: "Working Mother", text: "The baby care service is exceptional. The aaya was very caring and professional." },
    { name: "Rahul Mehta", role: "Son of Elderly Patient", text: "Their elder care service gave us peace of mind. Highly recommended!" },
    { name: "Ananya Das", role: "Busy Professional", text: "Reliable housekeeping service that keeps my home spotless." }
  ];

  const galleryImages = [
    "/nurse-care.jpg",
    "/baby-care.jpg",
    "/elder-care.jpg",
    "/cooking-service.jpg",
    "/physiotherapy.jpg",
    "/housekeeping.jpg"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Astha Aya And Driver Centre | Premium Care Services in Kolkata</title>
        <meta name="description" content="Professional nursing, baby care, elderly care, housekeeping and driving services in Kolkata. 24/7 available trained staff." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-teal-600 text-white shadow-lg">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Astha Aya & Driver Centre</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-200">Home</a>
              <a href="#about" className="hover:text-blue-200">About</a>
              <a href="#services" className="hover:text-blue-200">Services</a>
              <a href="#testimonials" className="hover:text-blue-200">Testimonials</a>
              <a href="#contact" className="hover:text-blue-200">Contact</a>
            </div>
            <div className="md:hidden">
              <button className="outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
<section id="home" className="relative bg-blue-700 text-white py-20">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center">
      {/* Left Content */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Care Services in Kolkata</h1>
        <p className="text-xl mb-8">24/7 professional nursing, baby care, elderly care, housekeeping and driving services with trained and verified staff.</p>
        <div className="flex space-x-4">
          <a href="#contact" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">Book Now</a>
          <a href="tel:7003088484" className="bg-white hover:bg-gray-100 text-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300">Call Us</a>
        </div>
      </div>

      {/* Right Video Section */}
      <div className="md:w-1/2">
        <div className="relative h-80 md:h-96 rounded-lg shadow-xl overflow-hidden">
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/vid1.mp4" // Fallback image
          >
            <source src="/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Fallback if video doesn't load */}
          <div className="absolute inset-0 hidden items-center justify-center bg-gray-200 ">
            <span className="text-gray-500">Video not available</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">About Astha Aya & Driver Centre</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img src="/car.jpg" alt="About Astha Aya" className="rounded-lg shadow-xl w-full" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Providing Quality Care Since 2010</h3>
              <p className="text-gray-700 mb-4">Astha Aya & Driver Centre has been a trusted name in Kolkata for professional care services. We understand the importance of reliable and compassionate care for your loved ones.</p>
              <p className="text-gray-700 mb-6">Our team consists of trained and verified professionals who undergo rigorous background checks and continuous training to ensure the highest standards of service.</p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-teal-500">
                <p className="text-blue-800 font-medium">"Our mission is to provide compassionate, professional care that enhances the quality of life for our clients and peace of mind for their families."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive care solutions tailored to your specific needs</p>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-center">
                <div className="text-4xl mb-4 text-teal-500">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.name}</h3>
                <p className="text-gray-600">Professional and reliable {service.name.toLowerCase()} services for your needs.</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Additional Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-full shadow-sm text-blue-700">Summer Daycare</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm text-blue-700">In-home Daycare</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm text-blue-700">Weekend Daycare</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm text-blue-700">After-school Care</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm text-blue-700">Home Work Assistance</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm text-blue-700">Clinic Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white text-xl font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Gallery</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <img src={image} alt={`Service ${index + 1}`} className="w-full h-64 object-cover hover:scale-105 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get in touch for any inquiries or to book our services</p>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className="bg-blue-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-700 mb-6">Our Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700">Address</h4>
                      <p className="text-gray-700">24/6 Behari Mondal Road, Haltu, Kolkata</p>
                      <p className="text-gray-700">Landmark: Sath Pake Bandha Marriage Hall</p>
                      <p className="text-gray-700">West Bengal, 700078</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700">Phone</h4>
                      <p className="text-gray-700">7003088484</p>
                      <p className="text-gray-700">7278749092</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700">Email</h4>
                      <p className="text-gray-700">Amithalder4670@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-semibold text-blue-700 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" 
                      required 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" 
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.name}>{service.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300">
                    Send Message via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Astha Aya & Driver Centre</h3>
              <p className="mb-4">Providing premium care services in Kolkata since 2010.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-teal-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-teal-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-teal-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-teal-300">Home</a></li>
                <li><a href="#about" className="hover:text-teal-300">About Us</a></li>
                <li><a href="#services" className="hover:text-teal-300">Services</a></li>
                <li><a href="#testimonials" className="hover:text-teal-300">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-teal-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-300">Nursing Care</a></li>
                <li><a href="#" className="hover:text-teal-300">Baby Care</a></li>
                <li><a href="#" className="hover:text-teal-300">Elderly Care</a></li>
                <li><a href="#" className="hover:text-teal-300">Housekeeping</a></li>
                <li><a href="#" className="hover:text-teal-300">Driving Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>24/6 Behari Mondal Road, Haltu, Kolkata - 700078</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>7003088484 / 7278749092</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>Amithalder4670@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Astha Aya & Driver Centre. All rights reserved. Website developed and maintained by Digital Exposure Online Services </p>
          </div>
        </div>
      </footer>
    </div>
  );
}