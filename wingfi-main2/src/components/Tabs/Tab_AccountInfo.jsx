import styles from "./Tab_AccountInfo.module.css";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";

export function Tab_AccountInfo() {
  return (
    <div className="mx-2">
      <label className="form-control w-full max-w-md">
        <div className="label">
          <span className="label-text font-semibold">What is your name *?</span>
        </div>
        <div className="join">
          <div className="join-item bg-slate-100 border flex items-center px-3">
            <FaRegUser size={20} className="text-slate-600" />
          </div>
          <input
            type="text"
            placeholder="full name"
            className="input input-bordered join-item w-full max-w-md"
            required
          />
        </div>

        <div className="label">
          <span className="label-text-alt text-error">Bottom Left label</span>
        </div>
      </label>
      <label className="form-control w-full max-w-md">
        <div className="label">
          <span className="label-text font-semibold">
            What is your email ID *?
          </span>
        </div>
        <div className="join">
          <div className="join-item bg-slate-100 border flex items-center px-3">
            <MdAlternateEmail size={24} className="text-slate-600" />
          </div>
          <input
            type="text"
            placeholder="example@email.com"
            className="input input-bordered join-item w-full max-w-md"
            required
          />
        </div>
        <div className="label">
          <span className="label-text-alt text-error">Bottom Left label</span>
        </div>
      </label>
      <label className="form-control w-full max-w-md">
        <div className="label">
          <span className="label-text font-semibold">
            What is your Contact Number *?
          </span>
        </div>
        <div className="join">
          <div className="join-item bg-slate-100 border flex items-center px-3">
            <FaPhoneAlt size={20} className="text-slate-600" />
          </div>
          <input
            type="text"
            placeholder="0123456789"
            maxLength={10}
            minLength={10}
            className="input input-bordered join-item w-full max-w-md"
            required
          />
        </div>
        <div className="label">
          <span className="label-text-alt text-error">Bottom Left label</span>
        </div>
      </label>

      <label className="form-control w-full max-w-md">
        <div className="label">
          <span className="label-text font-semibold">What is your Gender?</span>
        </div>
        <div className={["join", styles.Gender].join(" ")}>
          <input
            className="join-item btn px-8"
            type="radio"
            name="options"
            aria-label="Men"
          />
          <input
            className="join-item btn  px-8"
            type="radio"
            name="options"
            aria-label="Women"
          />
          <input
            className="join-item btn  px-8"
            type="radio"
            name="options"
            aria-label="Other"
          />
        </div>
        <div className="label">
          <span className="label-text-alt text-error">Bottom Left label</span>
        </div>
      </label>
      <label className="form-control w-full max-w-md">
        <div className="label">
          <span className="label-text font-semibold">
            What is your Address?
          </span>
        </div>
        <textarea
          className="textarea textarea-bordered"
          style={{
            lineHeight: 1,
            padding: 5,
            paddingLeft: 10,
          }}
          rows={5}
          placeholder="Your Complete delivery address"
        />
        <div className="label">
          <span className="label-text-alt text-error">Bottom Left label</span>
        </div>
      </label>
      <button className="btn btn-error text-white mt-2 px-8">
        Update Account
      </button>
    </div>
  );
}
