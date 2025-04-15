import React, {Fragment} from "react";
import Layout from "../layout";
const ContactUs = () => {
    return (
        <Fragment>
            <Layout>
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
            <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Contact Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Get in touch</h3>
                        <p className="text-gray-600 mb-2">
                            📍 <strong>Address:</strong> Rk University Rajkot
                        </p>
                        <p className="text-gray-600 mb-2">
                            📞 <strong>Phone:</strong> +91 7874565734
                        </p>
                        <p className="text-gray-600 mb-4">
                            📧 <strong>Email:</strong> support@shopease.com
                        </p>
                        <iframe
                            className="rounded-lg shadow-md"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.9911006588954!2d70.89784917605617!3d22.24041644506185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b4a660019ee9%3A0x3d6254f36ed0e794!2sRK%20University%20Main%20Campus!5e0!3m2!1sen!2sin!4v1744741026894!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            allowFullScreen=""
                            loading="lazy"
                            title="Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
        </Fragment>
    );
};

export default ContactUs;
