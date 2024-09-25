"use client";

import { useState } from "react";

export default function ContactUS() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });
  const HandleInputs = (name, value) => {
    setFormInputs({
      ...formInputs,
      [name]: value.target.value,
    });
  };
  return (
    <div
      id="contact"
      className="w-full flex menu items-center py-8 md:py-20 bg-primary"
    >
      <div className="container flex flex-col gap-6">
        <div className="text-center">
          <h1
            style={{
              color: "#fff",
            }}
          >
            Contact Us
          </h1>
          <span
            style={{
              color: "#fff",
            }}
          >
            A Friend in need is a friend indeed.
          </span>
        </div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mx-auto flex flex-col gap-4"
        >
          <input
            type="hidden"
            name="access_key"
            value="528753de-5ec2-42ca-a8a2-e5714d3032d0"
          />
          <input type="hidden" name="subject" value="New Lead from Wingfi.in" />
          <div className="flex flex-col md:flex-row gap-4">
            <input
              name="Full Name"
              style={{
                padding: 8,
                paddingLeft: 16,
                color: "black",
                borderRadius: 4,
                outlineColor: "#fb3232",
              }}
              required={true}
              value={formInputs.name}
              onChange={(e) => HandleInputs("name", e)}
              placeholder="Full Name"
            />
            <input
              name="Email ID"
              style={{
                padding: 8,
                paddingLeft: 16,
                color: "black",
                borderRadius: 4,
                outlineColor: "#fb3232",
              }}
              required={true}
              value={formInputs.email}
              onChange={(e) => HandleInputs("email", e)}
              placeholder="Phone Number"
            />
          </div>
          <input
            style={{
              padding: 8,
              paddingLeft: 16,
              color: "black",
              borderRadius: 4,
              outlineColor: "#fb3232",
            }}
            required={true}
            name="Phone"
            value={formInputs.phone}
            onChange={(e) => HandleInputs("phone", e)}
            placeholder="Email ID"
          />
          <textarea
            cols={6}
            style={{
              padding: 8,
              paddingLeft: 16,
              color: "black",
              borderRadius: 4,
              outlineColor: "#fb3232",
              minHeight: 160,
            }}
            required={true}
            name="Message"
            value={formInputs.msg}
            onChange={(e) => HandleInputs("msg", e)}
            placeholder="Your Message"
          />
          <button
            style={{
              backgroundColor: "white",
              padding: 8,
              paddingLeft: 40,
              paddingRight: 40,
              color: "black",
              cursor: "pointer",
              borderRadius: 4,
            }}
            type="submit"
            className="mx-auto md:mx-0 w-full"
          >
            <span className="font-bold">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
}
