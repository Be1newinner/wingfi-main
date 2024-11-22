import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContactDetailsSelector } from "../redux/selectors/addContactDetailsSelector";
import { addContactDetailsRequest } from "../redux/reducers/addContactDetailsReducer";
import { toast } from "react-toastify";
import { getContactTypeSelector } from "../redux/selectors/ContactType/getContactTypeSelector";

function AddContactDetails() {
  const dispatch = useDispatch();
  const formRef = useRef();
  const { data, loading, error } = useSelector(addContactDetailsSelector);

  const { data: contactType } = useSelector(getContactTypeSelector);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumbers: {
      phoneNoOne: "",
      phoneNoTwo: "",
    },
    address: "",
    type: "",
    profession: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    // Dispatch action to add contact details
    dispatch(addContactDetailsRequest(formData));

    toast.success("Contact details added successfully.");

    if (data) {
      formRef.current.reset(); // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phoneNumbers: {
          phoneNoOne: "",
          phoneNoTwo: "",
        },
        address: "",
        type: "",
        profession: "",
      }); // Reset form data state
    }
  };

  // Handle error state
  useEffect(() => {
    if (error) {
      toast.error("Error adding contact details."); // Show error message as toast
    }
  }, [error]);

  return (
    <div className="h-screen overflow-y-scroll w-full flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-6 underline">
        User Information Form
      </h2>
      <form onSubmit={onSubmit} ref={formRef} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phoneNoOne"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNoOne"
              name="phoneNoOne"
              placeholder="Enter phone number"
              maxLength={10}
              value={formData.phoneNumbers.phoneNoOne}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phoneNumbers: {
                    ...formData.phoneNumbers,
                    phoneNoOne: e.target.value,
                  },
                })
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="phoneNoTwo"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phoneNoTwo"
              name="phoneNoTwo"
              placeholder="Enter phone number"
              maxLength={10}
              value={formData.phoneNumbers.phoneNoTwo}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phoneNumbers: {
                    ...formData.phoneNumbers,
                    phoneNoTwo: e.target.value,
                  },
                })
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            User Type
          </label>
          <select
            name="type"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="">Select User Type</option>
            {contactType.map((item, index) => (
              <option key={index} value={item.type}>
                {item.type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="profession"
            className="block text-sm font-medium text-gray-700"
          >
            Profession
          </label>
          <input
            type="text"
            id="profession"
            name="profession"
            placeholder="Enter profession"
            value={formData.profession}
            onChange={(e) =>
              setFormData({ ...formData, profession: e.target.value })
            }
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddContactDetails;
