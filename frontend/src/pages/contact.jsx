import React from "react";

export default function ContactUs() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Heading */}
        <div>
          <h1 className="text-5xl font-bold text-black text-center md:text-left">
            Contact Us
          </h1>
        </div>

        {/* Right Side - Contact Details */}
        <div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-xl text-center md:text-left">
            Have questions or want to collaborate? Reach out to us through the
            following channels:
          </p>

          <div className="mt-6 space-y-4">
            <p className="text-gray-700">
              📧 Email: <strong>support@communityforce.com</strong>
            </p>
            <p className="text-gray-700">
              📍 Address: Shavige Malleshwara Hills, Kumaraswamy Layout,
              Bengaluru - 560078
            </p>
            <p className="text-gray-700">📞 Phone: +91 987 654 3210</p>
          </div>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="mt-12">
        <iframe
          className="w-full h-96 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.114746947805!2d77.5633837!3d12.9081366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d6e1b1a8e7%3A0x8e4a1e6e7b1a8e7!2sDayananda%20Sagar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1633028286676!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
