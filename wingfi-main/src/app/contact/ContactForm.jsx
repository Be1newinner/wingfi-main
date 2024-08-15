import { Footer, NavBar } from "@/components";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <NavBar />

      <main className="bg-slate-200 pb-4">
        <div
          style={{
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {/* Header */}
          <div className="flex flex-col items-center p-12">
            <h1 className="text-xl font-semibold">Keep in Touch With Us</h1>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          {/* Contact Us Page */}

          <div className="bg-white w-11/12 mx-auto p-4 shadow rounded rounded-md flex flex-col">
            <h1 className="text-md font-semibold">Send a Message</h1>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name="name"
              />
              <div className="label">
                <span className="label-text-alt text-error">
                  Bottom Left label
                </span>
              </div>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">What is your Contact Number?</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name="phone"
              />
              <div className="label">
                <span className="label-text-alt text-error">
                  Bottom Left label
                </span>
              </div>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">What is your email ID?</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name="email"
              />
              <div className="label">
                <span className="label-text-alt text-error">
                  Bottom Left label
                </span>
              </div>
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Your Message</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-36"
                placeholder="Type Your Message here!"
                name="message"
              />
              <div className="label">
                <span className="label-text-alt text-error">
                  Type Your Message here!
                </span>
              </div>
            </label>

            <button className="btn max-w-44">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Submit Query
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
