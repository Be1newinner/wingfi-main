import axios from "axios";

export default async function loginAdminApi(credentials) {
  const response = await axios.post("/api/admin/login", credentials);
  return response.data;
}
