import apiClient from "@/utils/apiClient";
import globalService from "./globalService";

export const getProfile = async () => {
  const response = await apiClient.get(`${globalService.baseUrl}/auth/profile`);

  return response.data;
};
