"use client";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/registry/context";
import { useState } from "react";
import { getPhoneNumber, changePhoneNumber } from "./ProfileDetailsController";

export default function ProfileDetails() {
  const { User } = useContext(AuthContext);

  const [CanEdit, setCanEdit] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputPhoneTrack, setInputPhoneTrack] = useState("");

  const [Errors, setErrors] = useState({
    phone: "",
    fullname: "",
    other: "",
  });

  useEffect(() => {
    (async function () {
      if (User) {
        const data = await getPhoneNumber(User);
        setInputName(User?.displayName || "");
        setInputPhoneTrack(data);
        setInputPhone(data);
      }
    })();
  }, [User]);

  const saveChanges = async () => {
    if (!CanEdit) setCanEdit(true);

    if (CanEdit) {
      if (!inputPhone) {
        setErrors({
          ...Errors,
          phone: "Phone Number is Empty!!!",
        });
        return;
      }

      if (inputPhone.length !== 10) {
        setErrors({
          ...Errors,
          phone: "Phone Number is Invalid!!!",
        });
        return;
      }

      if (inputPhoneTrack !== inputPhone) {
        const res = await changePhoneNumber({ User, phone: inputPhone });

        if (res.status == 200) {
          setInputPhoneTrack(inputPhone);
          console.log("Phone Changed Successfully!");
        } else {
          console.error("Error in  Changing Phone => ", res.error);
        }
      }

      setCanEdit(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-sm border py-6 px-10 flex flex-col gap-4 w-full">
      <div className="flex gap-4 items-center">
        <Image
          src={User?.photoURL}
          width={70}
          height={70}
          style={{
            borderRadius: 100,
          }}
          alt=""
        />
        <div className="flex flex-col">
          <p className="font-medium">{User?.displayName}</p>
          <p className="text-gray-500 text-xs">
            {User?.phoneNumber ? "+91" + User?.phoneNumber : User?.email}
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap">
          <label className="form-control w-full basis-1/2 px-1">
            <div className="label">
              <span className="label-text font-medium">Full Name</span>
            </div>
            <input
              type="text"
              placeholder="your name"
              className="input input-bordered rounded-sm focus:outline-none focus:border-success w-full text-sm"
              maxLength={20}
              onChange={(e) => setInputName(e.target.value)}
              required
              value={inputName}
              disabled
            />
            {Errors.fullname && (
              <div className="label">
                <span className="label-text-alt text-error font-medium">
                  {Errors.fullname}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full basis-1/2 px-1">
            <div className="label">
              <span className="label-text font-medium">Contact Number</span>
            </div>
            <input
              type="text"
              placeholder="10 Digit Number"
              className={[
                "input input-bordered rounded-sm  focus:outline-none w-full text-sm",
                Errors?.phone
                  ? "border-error focus:border-error"
                  : "focus:border-success",
              ].join(" ")}
              maxLength={10}
              value={inputPhone}
              onChange={(e) => setInputPhone(e.target.value)}
              required
              disabled={CanEdit ? (User?.phoneNumber ? true : false) : true}
            />
            {Errors.phone && (
              <div className="label">
                <span className="label-text-alt text-error font-medium">
                  {Errors.phone}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full basis-1/2 px-1">
            <div className="label">
              <span className="label-text font-medium">email ID</span>
            </div>
            <input
              type="text"
              placeholder="e.g. example@abc.com"
              className="input input-bordered rounded-sm  focus:outline-none focus:border-success w-full text-sm"
              maxLength={20}
              defaultValue={User?.email}
              disabled
            />
            <div className="label">
              <span className="label-text-alt text-error font-medium">
                Contact Support for Changing Email
              </span>
            </div>
          </label>

          {/* <label className="form-control w-full basis-1/2 px-1">
            <div className="label">
              <span className="label-text font-medium">Date of Birth</span>
            </div>
            <input
              type="date"
              placeholder="email ID"
              className="input input-bordered rounded-sm  focus:outline-none focus:border-success w-full text-sm"
              maxLength={20}
              required
              disabled
            />
            <div className="label">
              <span className="label-text-alt text-error font-medium">
                Bottom Left label
              </span>
            </div>
          </label> */}

          {/* <label className="form-control pl-2 justify-center">
            <div className="label">
              <span className="label-text font-medium">Gender</span>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="type-radio"
                  className="radio radio-error mb-1 radio-sm"
                  disabled
                />
                <span
                  style={{
                    fontSize: 14,
                    marginBottom: 4,
                  }}
                >
                  Male
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="type-radio"
                  className="radio radio-error mb-1 radio-sm"
                  disabled
                />
                <span
                  style={{
                    fontSize: 14,
                    marginBottom: 4,
                  }}
                >
                  Female
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="type-radio"
                  className="radio radio-error mb-1 radio-sm"
                  defaultChecked
                  disabled
                />
                <span
                  style={{
                    fontSize: 14,
                    marginBottom: 4,
                  }}
                >
                  Other
                </span>
              </div>
            </div>
            <div className="label">
              <span className="label-text-alt text-error font-medium">
                Bottom Left label
              </span>
            </div>
          </label> */}
        </div>
        <button
          className="btn btn-error text-white rounded-sm px-8 mt-4"
          onClick={saveChanges}
        >
          {CanEdit ? "Save Changes" : "Edit Details"}
        </button>
      </div>
    </div>
  );
}
