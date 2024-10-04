"use client";

import React, { useEffect } from "react";

const VerifyNumberButton = () => {
  useEffect(() => {
    // Load the external script
    const script = document.createElement("script");
    script.src = "./phone.js";
    script.async = true;
    document.querySelector(".pe_signin_button").appendChild(script);

    // Define the listener function
    window.phoneEmailListener = function (userObj) {
      const user_json_url = userObj.user_json_url;
      // Insert the debug message
      console.log(user_json_url);
      document.querySelector(".pe_signin_button").innerHTML = "REGISTER";
    };

    return () => {
      // Cleanup the listener function when the component unmounts
      window.phoneEmailListener = null;
    };
  }, []);

  return (
    <>
      <button id="btn_ph_login"></button>
      <div
        className="pe_signin_button"
        data-client-id={process.env.NEXT_PUBLIC_PHONE_EMAIL_CLIENTID}
      ></div>
    </>
  );
};

export default VerifyNumberButton;
