import { Footer, NavBar } from "@/components";
import React from "react";

const ReturnPolicy = () => {
  return (
    <div>
      <NavBar />
      <div className="p-4">
        <div className="">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Return Policy</h1>
            <p className="mb-4">Last updated August 26, 2024</p>

            <p className="mb-4">
              Thank you for your purchase. We hope you are happy with your
              purchase. However, if you are not completely satisfied with your
              purchase for any reason, you may return it to us for an exchange
              only. Please see below for more information on our return policy.
            </p>

            <section id="returns" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">1. RETURNS</h2>
              <p>
                All returns must be postmarked within thirty (30) days of the
                purchase date. All returned items must be in new and unused
                condition, with all original tags and labels attached.
              </p>
            </section>

            <section id="return-process" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">2. RETURN PROCESS</h2>
              <p>
                To return an item, please email customer service at{" "}
                <a href="mailto:info@wingfiindia.com" className="text-blue-500">
                  info@wingfiindia.com
                </a>{" "}
                to obtain a Return Merchandise Authorization (RMA) number. After
                receiving an RMA number, place the item securely in its original
                packaging and include your proof of purchase, then mail your
                return to the following address:
              </p>
              <p className="mb-4">
                Av Retails Services
                <br />
                Attn: Returns
                <br />
                RMA #<br />
                Plot 112, Besides Bata Showroom, Deoli
                <br />
                New Delhi, Delhi 110062
                <br />
                India
              </p>
              <p>
                Please note, you will be responsible for all return shipping
                charges. We strongly recommend that you use a trackable method
                to mail your return.
              </p>
            </section>

            <section id="refunds" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">3. REFUNDS</h2>
              <p>
                After receiving your return and inspecting the condition of your
                item, we will process your exchange. Please allow at least
                thirty (30) days from the receipt of your item to process your
                exchange. We will notify you by email when your return has been
                processed.
              </p>
            </section>

            <section id="exceptions" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">4. EXCEPTIONS</h2>
              <p>
                For defective or damaged products, please contact us at the
                contact details below to arrange a refund or exchange.
              </p>
            </section>

            <section id="questions" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">5. QUESTIONS</h2>
              <p>
                If you have any questions concerning our return policy, please
                contact us at:{" "}
                <a href="mailto:info@wingfiindia.com" className="text-blue-500">
                  info@wingfiindia.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReturnPolicy;
