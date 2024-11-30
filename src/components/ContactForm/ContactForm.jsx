import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of animation in ms
      once: true, // Make the animation happen only once
      delay: 200, // Delay before starting the animation
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "32281952-ab79-4f5a-8b4a-40f9227f06e6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        setResult("Form Submitted Successfully");
        event.target.reset();
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(data.message || "Something went wrong!");
        setResult(data.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Failed to submit the form");
      setResult("Failed to submit the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8" id='contact'>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
        <div>
          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900" data-aos="fade-in" data-aos-delay="500">
            Let's Build Something Together
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          {/* Name Input */}
          <div data-aos="fade-up" data-aos-delay="700">
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div data-aos="fade-up" data-aos-delay="900">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Message Input */}
          <div data-aos="fade-up" data-aos-delay="1100">
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Your message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div data-aos="fade-up" data-aos-delay="1300">
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${loading ? 'bg-gray-500' : 'bg-black hover:bg-gray-800'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
              disabled={loading}
            >
              {loading ? (
                <span className="flex justify-center items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
        {result && <p className="mt-4 text-center text-sm text-gray-500">{result}</p>}
      </div>
    </section>
  );
}
