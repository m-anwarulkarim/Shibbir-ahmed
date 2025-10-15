import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // honeypot protection (যদি বট এই ফিল্ড পূরণ করে, তাহলে পাঠাবে না)
    if (formData.get("honeypot")) {
      setLoading(false);
      return;
    }

    fetch("https://formsubmit.co/ajax/anwarulkarim13@gmail.com", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    })
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        form.reset();
      })
      .catch(() => {
        alert("❌ কিছু ভুল হয়েছে, আবার চেষ্টা করুন।");
        setLoading(false);
      });
  };

  return (
    <section className="relative py-28 px-4 md:px-10 bg-gradient-to-br from-[#fefce8] via-[#f0fdf4] to-[#ecfdf5] dark:from-[#1f2937] dark:via-[#111827] dark:to-[#0f172a] text-foreground overflow-hidden">
      {/* Decorative glowing circles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Title */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 text-muted-foreground"
        >
          Send us your message and we’ll reply directly to your email inbox.
        </motion.p>
      </div>

      {/* Success Message */}
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-xl mx-auto text-center bg-emerald-100 dark:bg-emerald-900/30 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
            ✅ Message Sent Successfully!
          </h3>
          <p className="text-muted-foreground">
            Thank you for reaching out. We’ll get back to you shortly,
            Insha’Allah.
          </p>
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="relative z-10 max-w-2xl mx-auto space-y-6"
        >
          {/* hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="honeypot" className="hidden" />

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-muted/20 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-muted/20 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+880..."
              className="w-full px-4 py-3 rounded-lg bg-muted/20 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-lg bg-muted/20 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
