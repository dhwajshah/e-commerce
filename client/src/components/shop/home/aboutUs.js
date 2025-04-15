// ./shop/aboutUs/AboutUs.js

import React, { Fragment } from 'react';
import Layout from '../layout';
const AboutUs = () => {
  return (
    <Fragment>
      <Layout>
        <div className="max-w-6xl mx-auto px-4 py-12"><br></br><br></br>
          <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to <span className="font-semibold">TechWorld</span> – your one-stop shop for the latest and greatest in electronics.
            We are passionate about bringing you the best technology at competitive prices. From smartphones to laptops, home appliances to gaming gear – we've got it all.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Founded in 2020, TechWorld was created with the vision of making technology accessible and affordable for everyone.
            Our team of tech enthusiasts carefully selects each product to ensure quality, reliability, and customer satisfaction.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Shop With Us?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Wide range of products from top brands.</li>
            <li>Fast and secure shipping.</li>
            <li>24/7 customer support to assist you anytime.</li>
            <li>Easy returns and hassle-free warranty.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            At TechWorld, we believe technology should empower you. Shop with confidence and experience the future of electronics today!
          </p>
        </div>
      </Layout>
    </Fragment>
  );
};

export default AboutUs;


