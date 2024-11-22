import React, { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, X, Check, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getContactTypeSelector } from "../redux/selectors/ContactType/getContactTypeSelector";
import { addContactTypeRequest } from "../redux/reducers/ContactType/addContactTypeReducer";
import { deleteContactTypeRequest } from "../redux/reducers/ContactType/deleteContactTypeReducer";
import { getContactTypeRequest } from "../redux/reducers/ContactType/getContactTypeReducer";
import { updateContactTypeRequest } from "../redux/reducers/ContactType/updateContactTypeReducer";

const ContactType = () => {
  const dispatch = useDispatch();
  const [types, setTypes] = useState([]);
  const [newType, setNewType] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const contactTypes = useSelector(getContactTypeSelector);

  useEffect(() => {
    fetchTypes();
  }, [dispatch]);

  // Update types when contactTypes changes
  useEffect(() => {
    if (contactTypes?.data) {
      setTypes(contactTypes.data);
    }
  }, [contactTypes]);

  const fetchTypes = async () => {
    setLoading(true);
    try {
      dispatch(getContactTypeRequest());
      setError("");
    } catch (err) {
      setError("Failed to fetch types");
      console.error("Error fetching types:", err);
    } finally {
      setLoading(false);
    }
  };

  const clearMessages = () => {
    setError("");
    setSuccess("");
  };

  const showTemporarySuccess = (message) => {
    setSuccess(message);
    setTimeout(() => setSuccess(""), 3000);
  };

  const validateType = (typeName, currentId = null) => {
    if (!typeName.trim()) {
      setError("Type cannot be empty");
      return false;
    }

    const typeExists = types.some(
      (type) =>
        type.type.toLowerCase() === typeName.toLowerCase() &&
        type.id !== currentId
    );

    if (typeExists) {
      setError("Type already exists");
      return false;
    }

    return true;
  };

  const handleAddType = async () => {
    clearMessages();

    if (!validateType(newType)) {
      return;
    }

    setLoading(true);
    try {
      await dispatch(addContactTypeRequest({ type: newType }));
      setNewType("");
      await fetchTypes();
      showTemporarySuccess("Type added successfully");
    } catch (err) {
      setError("Failed to add type");
      console.error("Error adding type:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditType = async (id) => {
    clearMessages();

    if (!validateType(editValue, id)) {
      return;
    }

    setLoading(true);
    try {
      await dispatch(updateContactTypeRequest({ type: editValue, id }));
      fetchTypes();
      setEditingId(null);
      showTemporarySuccess("Type updated successfully");
    } catch (err) {
      setError("Failed to update type");
      console.error("Error updating type:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteType = async (id) => {
    clearMessages();

    if (!window.confirm("Are you sure you want to delete this type?")) {
      return;
    }

    setLoading(true);
    try {
      await dispatch(deleteContactTypeRequest(id));
      fetchTypes();
      showTemporarySuccess("Type deleted successfully");
    } catch (err) {
      setError("Failed to delete type");
      console.error("Error deleting type:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e, action) => {
    if (e.key === "Enter") {
      action();
    }
  };

  const startEditing = (type) => {
    setEditingId(type.id);
    setEditValue(type.type); // Set initial edit value to current type
    setError("");
  };

  const filteredTypes = types.filter((type) =>
    type.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Fixed Header Section */}
      <div className="flex-none p-6 space-y-6 bg-white border-b">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manage Contact Types</h1>
        </div>

        <div className="flex gap-4 items-center">
          <input
            type="text"
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e, handleAddType)}
            placeholder="Enter new type"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
          <button
            onClick={handleAddType}
            disabled={loading || !newType.trim()}
            className="flex items-center gap-2 font-semibold px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="h-4 w-4" />
            Add Type
          </button>
        </div>

        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search types..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>

        {(error || success) && (
          <div
            className={`${
              error
                ? "bg-red-50 border-red-200 text-red-700"
                : "bg-green-50 border-green-200 text-green-700"
            } border px-4 py-3 rounded-lg`}
          >
            {error || success}
          </div>
        )}
      </div>

      {/* Scrollable Content Section */}
      <div className="flex-grow overflow-auto mb-20">
        <div className="border rounded-lg mx-6 my-2">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[150px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td
                    colSpan={2}
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    Loading...
                  </td>
                </tr>
              ) : filteredTypes.length === 0 ? (
                <tr>
                  <td
                    colSpan={2}
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No types found
                  </td>
                </tr>
              ) : (
                filteredTypes.map((type) => (
                  <tr key={type.id}>
                    <td className="px-6 py-4">
                      {editingId === type.id ? (
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onKeyDown={(e) =>
                              handleKeyPress(e, () => handleEditType(type.id))
                            }
                            className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoFocus
                          />
                          <button
                            onClick={() => handleEditType(type.id)}
                            disabled={loading}
                            className="p-1 text-green-600 hover:text-green-700 disabled:opacity-50"
                          >
                            <Check className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => {
                              setEditingId(null);
                              setError("");
                            }}
                            className="p-1 text-gray-600 hover:text-gray-700"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        type.type
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {editingId !== type.id && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => startEditing(type)}
                            className="p-1 text-blue-600 hover:text-blue-700"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteType(type.id)}
                            disabled={loading}
                            className="p-1 text-red-600 hover:text-red-700 disabled:opacity-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactType;
