"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { getPhoneNumber, changePhoneNumber } from "./ProfileDetailsController";
import {
  selectUser,
  selectUserEmail,
  selectUserName,
  selectUserPhone,
  selectUserPhoto,
  selectUserUID,
} from "@/redux/selectors/auth";
import { useSelector } from "react-redux";

export function ProfileDetails() {
  const User = useSelector(selectUser);
  const UserUID = useSelector(selectUserUID);
  const UserName = useSelector(selectUserName);
  const UserEmail = useSelector(selectUserEmail);
  const UserPhone = useSelector(selectUserPhone);
  const UserPhoto = useSelector(selectUserPhoto);

  const [CanEdit, setCanEdit] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputPhoneTrack, setInputPhoneTrack] = useState("");

  const [Errors, setErrors] = useState({
    phone: "",
    fullname: "",
    other: "",
  });

  const resetInputs = () => {
    setErrors({
      phone: "",
      fullname: "",
      other: "",
    });
    setCanEdit(false);
  };

  useEffect(() => {
    (async function () {
      if (UserUID) {
        const data = await getPhoneNumber(User);
        if (UserName) setInputName(UserName);
        if (data) setInputPhoneTrack(data);
        if (data) setInputPhone(data);
      }
    })();
  }, [UserUID, User, UserName]);

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
    <div className="bg-white shadow rounded-sm border p-4 sm:py-6 sm:px-10 flex flex-col gap-4 w-full">
      <div className="flex gap-4 items-center">
        <Image
          src={UserPhoto || "/images/profile_default.webp"}
          width={70}
          height={70}
          style={{
            borderRadius: 100,
          }}
          className="bg-slate-500 shadow-md"
          alt=""
        />
        <div className="flex flex-col">
          <p className="font-medium">{UserName || "New User"}</p>
          <p className="text-gray-500 text-xs">
            {UserPhone ? "+91" + UserPhone : UserEmail}
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap flex-col sm:flex-row">
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
              disabled={CanEdit ? (UserPhone ? true : false) : true}
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
              defaultValue={UserEmail?.toString()}
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
        <div className="flex gap-1">
          <button
            className="btn btn-error text-white rounded-sm px-8 mt-4"
            onClick={saveChanges}
          >
            {CanEdit ? "Save Changes" : "Edit Details"}
          </button>
          {CanEdit ? (
            <button
              className="btn btn-error btn-outline text-white rounded-sm px-8 mt-4 "
              onClick={resetInputs}
            >
              Cancel
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
