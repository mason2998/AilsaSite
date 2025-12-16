"use client";

import { ServiceCard, ProjectCard, TestimonialCard, Blob } from '../components';

export default function Home() {
  const services = [
    {
      title: 'Brand Positioning',
      description: 'Define your unique value proposition and market position with strategic clarity.'
    },
    {
      title: 'Brand Naming',
      description: 'Craft distinctive, memorable names that capture the essence of your brand.'
    },
    {
      title: 'Strategy Development',
      description: 'Build comprehensive brand strategies aligned with your business goals.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafbf8] overflow-hidden relative">
      {/* Background Blobs */}
      {/* Header */}
      <header className="sticky top-0 z-50 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-6 flex justify-between items-start">
          <div className="relative h-32 w-40">
            <h1 className="text-3xl font-bold text-[#2d3d36] relative z-10" style={{ fontFamily: 'var(--font-playfair)' }}>
              Ailsa
            </h1>
          </div>
          <ul className="hidden md:flex gap-8 text-sm text-[#2d3d36]">
            <li><a href="#services" className="hover:text-[#7cc491] transition">Services</a></li>
            <li><a href="#about" className="hover:text-[#7cc491] transition">About</a></li>
            <li><a href="#work" className="hover:text-[#7cc491] transition">Work</a></li>
            <li><a href="#contact" className="hover:text-[#7cc491] transition">Contact</a></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-32 relative">
        <Blob color="#98153d" size={1600} top="-115%" left="-50%" opacity={0.8} zIndex={0} />
        <div className="space-y-6 max-w-2xl relative z-10">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#2d3d36] leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            Brand Strategy & Management
          </h2>
          <p className="text-lg text-[#555] leading-relaxed font-light">
            I work with ambitious brands and business leaders to clarify positioning, craft compelling narratives, and build brands that resonate.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-[#a8d5ba] text-[#2d3d36] font-semibold rounded-full hover:bg-[#7cc491] transition text-center"
            >
              Get in Touch
            </a>
            <a
              href="#work"
              className="inline-block px-8 py-3 border-2 border-[#a8d5ba] text-[#2d3d36] font-semibold rounded-full hover:bg-[#d4eae0] transition text-center"
            >
              See My Work
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#ffa68d] py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h3 className="text-4xl font-bold text-[#2d3d36] mb-16 text-center" style={{ fontFamily: 'var(--font-playfair)' }}>
            What I Do
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <ServiceCard key={idx} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#fafbf8] py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-1">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-[#2d3d36]" style={{ fontFamily: 'var(--font-playfair)' }}>
                About Me
              </h3>
              <p className="text-[#555] leading-relaxed">
                With over 15 years of experience in brand strategy and management, I help businesses unlock their unique potential and build brands that matter.
              </p>
              <p className="text-[#555] leading-relaxed">
                I work with founders, marketing leaders, and creative teams to translate vision into strategy, and strategy into tangible brand value.
              </p>
              <a
                href="#contact"
                className="inline-block text-[#7cc491] font-semibold hover:text-[#a8d5ba] transition"
              >
                Learn more →
              </a>
            </div>
            <div className="bg-gradient-to-br from-[#d4eae0] to-[#a8d5ba] h-64 sm:h-80 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="bg-[#fafbf8] py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <Blob color="#ff3f26" size={2000} top="20%" right="-60%" opacity={0.6} zIndex={0} />
          <Blob color="#ffa68d" size={1500} bottom="20%" left="0%" opacity={0.5} zIndex={1} />
          <h3 className="text-4xl font-bold text-[#2d3d36] mb-16 text-center relative z-2" style={{ fontFamily: 'var(--font-playfair)' }}>
            Recent Work
          </h3>
          <div className="grid md:grid-cols-2 gap-12 z-10">
            {[
              { name: 'Tech Startup Rebrand', category: 'Strategy & Naming' },
              { name: 'Luxury Brand Positioning', category: 'Positioning' },
              { name: 'Corporate Identity', category: 'Brand Architecture' },
              { name: 'DTC Brand Launch', category: 'Full Strategy' }
            ].map((project, idx) => (
              <ProjectCard key={idx} name={project.name} category={project.category} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#ffa68d] py-20 sm:py-32 text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h3 className="text-4xl font-bold mb-16 text-center" style={{ fontFamily: 'var(--font-playfair)' }}>
            What Clients Say
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote: 'Ailsa transformed how we think about our brand. Her strategic insights were invaluable.',
                author: 'Sarah Chen, CEO'
              },
              {
                quote: 'Working with Ailsa was a game-changer. She brought clarity to our positioning.',
                author: 'James Mitchell, CMO'
              }
            ].map((testimonial, idx) => (
              <TestimonialCard key={idx} quote={testimonial.quote} author={testimonial.author} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#fafbf8] py-20 sm:py-32">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <div>
            <h3 className="text-4xl font-bold text-[#2d3d36] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Let's Work Together
            </h3>
            <p className="text-[#666] text-lg">
              Ready to elevate your brand? I'd love to hear about your project and how I can help.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              <a href="mailto:ailsa@example.com" className="text-[#7cc491] font-semibold hover:text-[#a8d5ba] transition text-lg">
                ailsa@example.com
              </a>
            </p>
            <p className="text-[#666]">
              Based in London, available for remote collaboration worldwide
            </p>
          </div>
          <div className="pt-8">
            <a
              href="mailto:ailsa@example.com"
              className="inline-block px-10 py-4 bg-[#a8d5ba] text-[#2d3d36] font-semibold rounded-full hover:bg-[#7cc491] transition"
            >
              Send Me a Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d3d36] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
            <p>© 2025 Ailsa. All rights reserved.</p>
            <div className="flex gap-6 mt-6 sm:mt-0">
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
