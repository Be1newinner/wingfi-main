import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="p-4">
        <div className="">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-4">
              This Privacy Policy describes how Wingfi India (&quot;we,&quot;
              &quot;our,&quot; or &quot;us&quot;) collects, uses, and discloses
              your personal information when you use our website and services.
            </p>

            <section id="information-we-collect" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                1. INFORMATION WE COLLECT
              </h2>
              <p>
                We collect information that you provide directly to us when you
                use our services, including:
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Personal details such as name, email address, phone number,
                    and payment information;
                  </li>
                  <li>
                    Information about your use of our services, including
                    browsing history and interactions;
                  </li>
                  <li>Any other information you choose to provide to us.</li>
                </ul>
              </p>
            </section>

            <section id="how-we-use-information" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                2. HOW WE USE YOUR INFORMATION
              </h2>
              <p>
                We use your information to:
                <ul className="list-disc list-inside mb-4">
                  <li>Provide, operate, and maintain our services;</li>
                  <li>Process transactions and manage your orders;</li>
                  <li>Improve our services and develop new products;</li>
                  <li>
                    Communicate with you, including responding to your inquiries
                    and sending updates;
                  </li>
                  <li>
                    Ensure the security of our services and prevent fraudulent
                    activities.
                  </li>
                </ul>
              </p>
            </section>

            <section id="information-sharing" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                3. INFORMATION SHARING
              </h2>
              <p>
                We may share your information with:
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Service providers and partners who assist us in providing
                    our services;
                  </li>
                  <li>
                    Law enforcement authorities or other entities as required by
                    law;
                  </li>
                  <li>
                    Third parties in connection with business transfers or legal
                    obligations.
                  </li>
                </ul>
              </p>
            </section>

            <section id="data-security" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">4. DATA SECURITY</h2>
              <p>
                We take reasonable measures to protect your information from
                unauthorized access, use, or disclosure. However, no security
                measures are completely foolproof, and we cannot guarantee the
                absolute security of your information.
              </p>
            </section>

            <section id="your-rights" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">5. YOUR RIGHTS</h2>
              <p>
                You have the right to:
                <ul className="list-disc list-inside mb-4">
                  <li>Access and update your personal information;</li>
                  <li>Request the deletion of your personal information;</li>
                  <li>Opt out of marketing communications;</li>
                  <li>
                    Exercise any other rights provided by applicable laws.
                  </li>
                </ul>
              </p>
            </section>

            <section id="changes-to-this-policy" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                6. CHANGES TO THIS POLICY
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the updated policy on this
                page. Your continued use of our services after any changes
                indicates your acceptance of the revised policy.
              </p>
            </section>

            <section id="contact-us" className="mb-8">
              <h2 className="text-xl font-semibold mb-2">7. CONTACT US</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a href="mailto:info@wingfiindia.in" className="text-blue-500">
                  info@wingfiindia.in
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
