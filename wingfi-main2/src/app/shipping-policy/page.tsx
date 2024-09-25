import { Footer, NavBar } from "@/components";
import React from "react";

const ShippingPolicy = () => {
  return (
    <div>
      <NavBar />
      <div className="p-4">
        <div className="">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">
              Shipping & Delivery Policy
            </h1>
            <p className="mb-4">Last updated August 26, 2024</p>

            <p className="mb-4">
              This Shipping & Delivery Policy is part of our Terms and
              Conditions ("Terms") and should be therefore read alongside our
              main Terms:{" "}
              <a
                href="https://wingfiindia.com/terms-conditions"
                className="text-blue-500"
              >
                wingfiindia.com/terms-conditions
              </a>
              .
            </p>

            <p className="mb-4">
              Please carefully review our Shipping & Delivery Policy when
              purchasing our products. This policy will apply to any order you
              place with us.
            </p>

            <section id="shipping-options" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                1. WHAT ARE MY SHIPPING & DELIVERY OPTIONS?
              </h2>
              <p>
                We offer various shipping options. In some cases a third-party
                supplier may be managing our inventory and will be responsible
                for shipping your products.
              </p>
              <br />
              <p>
                We offer shipping within 7 to 15 days but sometimes it may goes
                up to 30 days due to unavoidable cicumstances.{" "}
              </p>
              <br />
              <p className="mb-4">
                <strong>Free Shipping</strong>
                <br />
                We offer free shipping for <b>Orders above Rs. 999 /-</b>.
              </p>
              <p>
                <strong>Shipping Fees</strong>
                <br />
                We also offer shipping at the following rates:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li> Rs. 99 /- </li>
              </ul>
              <p>
                If you select a shipping option, we will follow up after you
                have placed the order with any additional shipping information.
              </p>
              <p>
                All times and dates given for delivery of the products are given
                in good faith but are estimates only.
              </p>
            </section>

            <section id="international-shipping" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                2. DO YOU DELIVER INTERNATIONALLY?
              </h2>
              <p>We do not offer international shipping.</p>
            </section>

            <section id="delayed-orders" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                3. WHAT HAPPENS IF MY ORDER IS DELAYED?
              </h2>
              <p>
                If delivery is delayed for any reason, we will let you know as
                soon as possible and will advise you of a revised estimated date
                for delivery.
              </p>
            </section>

            <section id="return-questions" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                4. QUESTIONS ABOUT RETURNS?
              </h2>
              <p>
                If you have questions about returns, please review our Return
                Policy:{" "}
                <a
                  href="https://wingfiindia.com/return-policy"
                  className="text-blue-500"
                >
                  wingfiindia.com/return-policy
                </a>
                .
              </p>
            </section>

            <section id="contact" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                5. HOW CAN YOU CONTACT US ABOUT THIS POLICY?
              </h2>
              <p>
                If you have any further questions or comments, you may contact
                us by:
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@wingfiindia.com" className="text-blue-500">
                  info@wingfiindia.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingPolicy;
