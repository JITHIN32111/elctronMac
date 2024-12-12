import React from 'react';
import img from '../assets/f1.png'

const Two = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <img src={img} alt="" />
      {/* Navbar */}
      <nav className="flex justify-between p-6">
        <div className="font-bold text-xl">My Landing Page2</div>
        <div className="space-x-6">
          <a href="#features" className="hover:text-gray-200">Features</a>
          <a href="#pricing" className="hover:text-gray-200">Pricing</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x800)' }}>
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Welcome to Our Landing Page</h1>
          <p className="mt-4 text-xl">Your journey begins here</p>
          <button className="mt-6 px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-400 transition">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Feature 1</h3>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Feature 2</h3>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Feature 3</h3>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Pricing</h2>
          <div className="flex justify-center gap-12">
            <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Basic</h3>
              <p className="mt-2 text-lg">$19/month</p>
              <button className="mt-6 px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-400 transition">Get Started</button>
            </div>
            <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Pro</h3>
              <p className="mt-2 text-lg">$49/month</p>
              <button className="mt-6 px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-400 transition">Get Started</button>
            </div>
            <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Enterprise</h3>
              <p className="mt-2 text-lg">$99/month</p>
              <button className="mt-6 px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-400 transition">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p className="mb-6">Have any questions? Reach out to us!</p>
        <button className="px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-400 transition">Contact Support</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6">
        <p>&copy; 2024 My Landing Page. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Two;
