"use client";

import React, { useEffect } from "react";

const VerifyNumberButton = ({
  phoneNumber,
  setIsSubmitting,
  isSubmitting,
  submitFunction,
  validations,
}) => {
  useEffect(() => {
    const handleWindowMessage = async (event) => {
      if (event.origin === "https://auth.phone.email") {
        const responseData = event.data;
        const data = await fetch(responseData.user_json_url);
        const response = await data.json();
        // console.log("Received data from child window:", responseData, response);

        // console.log(
        //   response.user_phone_number,
        //   " => ",
        //   phoneNumber,
        //   response.user_phone_number == phoneNumber
        // );

        if (response.user_phone_number == phoneNumber) {
          // console.log("LOGGIN SUCCESS!");
          submitFunction();
        }
      }
      setIsSubmitting(false);
    };

    window.addEventListener("message", handleWindowMessage);

    return () => {
      window.removeEventListener("message", handleWindowMessage);
    };
  }, [setIsSubmitting, phoneNumber, submitFunction]);

  return (
    <button
      style={{ maxWidth: 320 }}
      className="btn btn-neutral w-full"
      onClick={() => {
        if (!isSubmitting) {
          const isValidated = validations();
          console.log({ isValidated });

          if (!isValidated)
            if (typeof window !== "undefined") {
              setIsSubmitting(true);
              const peLoginWindow = window.open(
                `https://auth.phone.email/log-in?client_id=${process.env.NEXT_PUBLIC_PHONE_EMAIL_CLIENTID}&auth_type=8&origin=${window.location.href}&user_phone_no=${phoneNumber}`,
                "peLoginWindow",
                "toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=560,top=" +
                  (window.screen.height - 600) / 2 +
                  ",left=" +
                  (window.screen.width - 500) / 2
              );

              const checkWindowClosed = setInterval(() => {
                if (peLoginWindow.closed) {
                  clearInterval(checkWindowClosed);
                  setIsSubmitting(false);
                }
              }, 500);
            }
        }
      }}
    >
      {isSubmitting ? "Registering..." : "Register"}
    </button>
  );
};

export default VerifyNumberButton;
