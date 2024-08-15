import { useState } from "react";
import { addNewAddressController } from "@/registry/functions";

export function AddNewAddressDialog() {
  const [inputName, setInputName] = useState("");
  const [inputContact, setInputContact] = useState("");
  const [inputAdd1, setInputAdd1] = useState("");
  const [inputAdd2, setInputAdd2] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputState, setInputState] = useState("");
  const [inputPin, setInputPin] = useState("");
  const [inputType, setInputType] = useState(0);

  const onRadioChnage = (key) => {
    setInputType(key.target.value);
  };

  const [Errors, setErrors] = useState({
    name: "",
    contact: "",
    add1: "",
    add2: "",
    city: "",
    state: "",
    pin: "",
    other: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!inputName.length) {
      newErrors.name = "please provide a name!";
    }
    if (inputContact) {
      if (inputContact.length != 10) {
        newErrors.contact = "please provide a valid 10 Digit Contact Number!";
      }
    } else {
      newErrors.contact = "please provide a Contact Number!";
    }

    if (!inputAdd1) {
      newErrors.add1 = "please provide a Home/Flat/Office number!";
    }
    if (!inputAdd2) {
      newErrors.add2 = "please provide a Landmark or Area!";
    }
    if (!inputCity) {
      newErrors.city = "please provide a City Name!";
    }
    if (!inputState) {
      newErrors.state = "please provide a State Name!";
    }
    if (!inputPin) {
      if (inputPin.length != 6) {
        newErrors.pin = "please provide a Valid Pin Code!";
      } else {
        newErrors.pin = "please provide a Pin Code!";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const response = await addNewAddressController({
        Name: inputName,
        Contact: inputContact,
        Add1: inputAdd1,
        Add2: inputAdd2,
        City: inputCity,
        State: inputState,
        Pin: inputPin,
        Type: inputType,
      });

      if (response.status == 200) {
        console.log("Got Success!");
      } else {
        console.error("Got Some Error!");
      }
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box rounded-sm max-w-2xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <h3 className="font-medium text-md">Add New Address!</h3>
          <div className="flex flex-wrap mt-4">
            <label className="form-control w-full basis-full sm:basis-1/2 p-1">
              <input
                type="text"
                placeholder="full name"
                className={[
                  "input input-bordered rounded-sm focus:outline-none w-full text-sm focus:border-success",
                  Errors.name ? "border-error" : "border",
                ].join(" ")}
                maxLength={20}
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />
              {Errors.name && (
                <div className="label">
                  <span className="label-text-alt text-error font-medium">
                    {Errors.name}
                  </span>
                </div>
              )}
            </label>
            <label className="form-control w-full basis-full sm:basis-1/2 p-1">
              <input
                type="tel"
                placeholder="contact number"
                className={[
                  "input input-bordered rounded-sm focus:outline-none w-full text-sm focus:border-success",
                  Errors.contact ? "border-error" : "border",
                ].join(" ")}
                maxLength={10}
                value={inputContact}
                onChange={(e) => setInputContact(e.target.value)}
              />
              {Errors.contact && (
                <div className="label">
                  <span className="label-text-alt text-error font-medium">
                    {Errors.contact}
                  </span>
                </div>
              )}
            </label>

            <label className="form-control w-full basis-full sm:basis-1/2 p-1">
              <input
                type="text"
                placeholder="House/Flat/Office No."
                className={[
                  "input input-bordered rounded-sm focus:outline-none w-full text-sm focus:border-success",
                  Errors.add1 ? "border-error" : "border",
                ].join(" ")}
                maxLength={20}
                value={inputAdd1}
                onChange={(e) => setInputAdd1(e.target.value)}
              />
              {Errors.add1 && (
                <div className="label">
                  <span className="label-text-alt text-error font-medium">
                    {Errors.add1}
                  </span>
                </div>
              )}
            </label>
            <label className="form-control w-full basis-full sm:basis-1/2 p-1">
              <input
                type="text"
                placeholder="Street Address, Landmark"
                className={[
                  "input input-bordered rounded-sm focus:outline-none w-full text-sm focus:border-success",
                  Errors.add2 ? "border-error" : "border",
                ].join(" ")}
                value={inputAdd2}
                onChange={(e) => setInputAdd2(e.target.value)}
              />
              {Errors.add2 && (
                <div className="label">
                  <span className="label-text-alt text-error font-medium">
                    {Errors.add2}
                  </span>
                </div>
              )}
            </label>

            <label className="form-control w-full basis-full sm:basis-1/3 p-1">
              <input
                type="text"
                placeholder="city"
                className={[
                  "input input-bordered rounded-sm focus:outline-none w-full text-sm focus:border-success",
                  Errors.city ? "border-error" : "border",
                ].join(" ")}
                value={inputCity}
                onChange={(e) => setInputCity(e.target.value)}
              />
              {Errors.city && (
                <div className="label">
                  <span className="label-text-alt text-error font-medium">
                    {Errors.city}
                  </span>
                </div>
              )}
            </label>
            <label className="form-control w-full basis-1/2 sm:basis-1/3 p-1">
              <input
                type="text"
                placeholder="State"
                className={[
                  "input input-bordered rounded-sm focus:outline-none w-full text-sm focus:border-success",
                  Errors.state ? "border-error" : "border",
                ].join(" ")}
                value={inputState}
                onChange={(e) => setInputState(e.target.value)}
              />
              {Errors.state && (
                <div className="label">
                  <span className="label-text-alt text-error font-medium">
                    {Errors.state}
                  </span>
                </div>
              )}
            </label>
            <label className="form-control w-full basis-1/2 sm:basis-1/3 p-1">
              <input
                type="tel"
                placeholder="Pin Code"
                className={[
                  "input input-bordered rounded-sm focus:outline-none w-full text-sm focus:border-success",
                  Errors.pin ? "border-error" : "border",
                ].join(" ")}
                value={inputPin}
                onChange={(e) => setInputPin(e.target.value)}
                minLength={6}
                maxLength={6}
              />
              {Errors.pin && (
                <div className="label">
                  <span className="label-text-alt text-error font-medium">
                    {Errors.pin}
                  </span>
                </div>
              )}
            </label>
            <label className="form-control w-full pb-2">
              <div className="label">
                <span className="label-text">Address Type</span>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="type-radio"
                    value={0}
                    id="homeAddressType"
                    className="radio radio-error mb-1 radio-sm"
                    checked={inputType == 0 ? true : false}
                    onChange={onRadioChnage}
                  />
                  <span
                    htmlFor="homeAddressType"
                    style={{
                      fontSize: 12,
                      cursor: "pointer",
                      marginBottom: 4,
                    }}
                  >
                    Home ( All Day Delivery )
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="type-radio"
                    value={1}
                    id="OfficeAddressType"
                    checked={inputType == 1 ? true : false}
                    className="radio radio-error mb-1 radio-sm"
                    onChange={onRadioChnage}
                  />
                  <label
                    htmlFor="OfficeAddressType"
                    style={{
                      fontSize: 12,
                      cursor: "pointer",
                      marginBottom: 4,
                    }}
                  >
                    Office ( Delivery 9 Am to 5 PM )
                  </label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="type-radio"
                    value={2}
                    id="OtherAddressType"
                    checked={inputType == 2 ? true : false}
                    className="radio radio-error mb-1 radio-sm"
                    onChange={onRadioChnage}
                  />
                  <label
                    htmlFor="OtherAddressType"
                    style={{
                      fontSize: 12,
                      cursor: "pointer",
                      marginBottom: 4,
                    }}
                  >
                    Other
                  </label>
                </div>
              </div>
            </label>

            <div className="flex gap-2">
              <input
                type="submit"
                className="btn btn-error text-white rounded-sm "
                value={"Add a New Address"}
                onClick={onSubmit}
              />
              <button
                className="btn bg-gray-300 rounded-sm px-12"
                onClick={() => {
                  setErrors({
                    name: "",
                    contact: "",
                    add1: "",
                    add2: "",
                    city: "",
                    state: "",
                    pin: "",
                    other: "",
                  });
                  setInputName("");
                  setInputContact("");
                  setInputAdd1("");
                  setInputAdd2("");
                  setInputCity("");
                  setInputState("");
                  setInputPin("");
                  setInputType("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
}
