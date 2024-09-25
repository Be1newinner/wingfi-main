"use client";

import Link from "next/link";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "@/infrastructure/firebase.config";
import Image from "next/image";

export default function Forms() {
  const [fullName, setFullName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [emailID, setEmailID] = useState("");
  const [orderID, setOrderID] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [modelName, setModelName] = useState("");
  const [Errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    orderID: "",
    address: "",
    model: "",
    other: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearInputs = () => {
    setFullName("");
    setPhoneNumber("");
    setEmailID("");
    setOrderID("");
    setFullAddress("");
    setModelName("");
    setErrors({
      name: "",
      phone: "",
      email: "",
      orderID: "",
      address: "",
      model: "",
      other: "",
    });
    setIsSuccess(false);
  };

  const validations = () => {
    const error = {
      name: "",
      phone: "",
      email: "",
      orderID: "",
      address: "",
      model: "",
      other: "",
    };

    if (!fullName) error.name = "Full Name is required!";
    else if (fullName.length < 3) error.name = "Invalid Name!";

    if (!PhoneNumber) error.phone = "Phone Number is required!";
    else if (!/\d{10}/.test(PhoneNumber)) error.phone = "Invalid Phone Number!";

    // if (!emailID) {
    //   error.address = "Full Name is required!";
    // }

    if (!orderID) error.orderID = "Order ID is required!";
    else if (!/^OD\d{18}$/.test(orderID))
      error.orderID = "Order ID is Invalid!";

    // if (!fullAddress) {
    //   error.address = "Full Name is required!";
    // }
    // if (!modelName) {
    //   error.address = "Full Name is required!";
    // }
    // if (!Errors) {
    //   error.address = "Full Name is required!";
    // }

    if (
      error.name ||
      error.phone ||
      error.email ||
      error.orderID ||
      error.model ||
      error.other
    ) {
      setErrors(error);
      return false;
    } else {
      setErrors({
        name: "",
        phone: "",
        email: "",
        orderID: "",
        address: "",
        model: "",
        other: "",
      });
      return true;
    }
  };

  const onSubmit = async ({
    address,
    emailID,
    model,
    name,
    orderID,
    phoneNumber,
  }) => {
    setIsSubmitting(true);
    if (!validations()) return;

    const data = {
      a: address,
      e: emailID,
      m: model,
      n: name,
      o: orderID,
      p: phoneNumber,
    };

    try {
      const docRef = await addDoc(collection(firestore, "reg78"), data);
      console.log("Document written with ID: ", docRef.id, data);
      if (docRef.id) setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setIsSuccess(false);
      setErrors({ ...Errors, other: "Unknown Error!" });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-wrap max-w-lg mx-auto lg:mx-0">
      <div className="text-sm breadcrumbs basis-full mb-4">
        <ul>
          <li>
            <Link href={"/"} className="font-medium text-lg">
              Home
            </Link>
          </li>
          <li>Register Product</li>
        </ul>
      </div>
      <div className="bg-primary p-8 rounded w-full flex flex-wrap">
        {Errors.other ? (
          <div className="label">
            <span className="label-text text-red-500">{Errors.other}</span>
          </div>
        ) : null}
        {!isSuccess ? (
          <>
            <label className="w-full basis-full sm:basis-1/2 pr-2">
              <div className="label">
                <span className="label-text text-white">Full Name*</span>
              </div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Type here"
                className="input input-bordered text-black w-full"
              />
              {Errors.name ? (
                <div className="label">
                  <span className="label-text text-red-500">{Errors.name}</span>
                </div>
              ) : null}
            </label>
            <label className="w-full basis-full sm:basis-1/2 pr-2">
              <div className="label">
                <span className="label-text text-white">Phone Number*</span>
              </div>
              <input
                value={PhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                placeholder="8130xxxxxx"
                className="input input-bordered text-black w-full"
              />
              {Errors.phone ? (
                <div className="label">
                  <span className="label-text text-red-500">
                    {Errors.phone}
                  </span>
                </div>
              ) : null}
            </label>
            <label className="w-full basis-full sm:basis-1/2 pr-2">
              <div className="label">
                <span className="label-text text-white">
                  Email ID ( optional )
                </span>
              </div>
              <input
                value={emailID}
                onChange={(e) => setEmailID(e.target.value)}
                type="text"
                placeholder="you@abc.com"
                className="input input-bordered text-black w-full"
              />
              {Errors.email ? (
                <div className="label">
                  <span className="label-text text-red-500">
                    {Errors.email}
                  </span>
                </div>
              ) : null}
            </label>
            <label className="w-full basis-full sm:basis-1/2">
              <div className="label">
                <span className="label-text text-white">Product Order ID*</span>
              </div>
              <input
                value={orderID}
                onChange={(e) => setOrderID(e.target.value)}
                type="text"
                placeholder="ODxxxxxxxxx"
                className="input input-bordered text-black w-full"
              />
              {Errors.orderID ? (
                <div className="label">
                  <span className="label-text text-red-500">
                    {Errors.orderID}
                  </span>
                </div>
              ) : null}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">Modal Name</span>
              </div>
              <select
                className="select select-bordered text-black"
                onChange={(e) => setModelName(e.target.value)}
              >
                <option disabled selected>
                  Pick one
                </option>
                <option value={1}>EnergyHUB PB100</option>
                <option value={2}>JustLookingLikeAwOw PB200</option>
                <option value={3}>NoMess PB300</option>
                <option value={4}>Messi PB400</option>
                <option value={5}>Raftaar PB500</option>
                <option value={6}>ChargeHub PB600</option>
                <option value={7}>FreeWire PB700</option>
                <option value={8}>GameChanger PB800</option>
                <option value={9}>10000Barrel PB900</option>
              </select>
              {Errors.other ? (
                <div className="label">
                  <span className="label-text text-red-500">
                    {Errors.other}
                  </span>
                </div>
              ) : null}
            </label>
            <label className="w-full">
              <div className="label">
                <span className="label-text text-white">
                  Complete Address ( optional )
                </span>
              </div>
              <input
                value={fullAddress}
                onChange={(e) => setFullAddress(e.target.value)}
                type="text"
                placeholder="Your Complete Address!"
                className="input input-bordered text-black w-full"
              />
              {Errors.address ? (
                <div className="label">
                  <span className="label-text text-red-500">
                    {Errors.address}
                  </span>
                </div>
              ) : null}
            </label>
            <div className="flex gap-2 mt-4">
              <button
                className="btn btn-outline btn-error"
                onClick={clearInputs}
              >
                Clear Inputs
              </button>

              <button
                className="btn btn-error px-16"
                onClick={() =>
                  onSubmit({
                    address: fullAddress,
                    emailID: emailID,
                    model: modelName,
                    name: fullName,
                    orderID: orderID,
                    phoneNumber: PhoneNumber,
                  })
                }
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Loading
                  </>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center align-center flex-1">
            <Image
              src={"/verified.webp"}
              height={800}
              width={800}
              alt="success"
              className="mx-auto"
              style={{
                maxWidth: 400,
                maxHeight: 400,
              }}
            />
            <button className="btn btn-outline btn-error" onClick={clearInputs}>
              Resubmit Product
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
