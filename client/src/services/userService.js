import axios from "axios";
const BASE_URL = "https://server-node-3r5n.onrender.com";
 

//  تغيير الاسم
export const changeName = async (name) => {
  const response = await axios.post(`${BASE_URL}/api/auth/change-name`, { name });
  return response.data;
};
//  تغيير كلمة المرور
export const changePassword = async ({ oldPassword, newPassword }) => {
  const response = await axios.post(`${BASE_URL}/api/auth/change-password`, {
    oldPassword,
    newPassword,
  });
  return response.data;
};

