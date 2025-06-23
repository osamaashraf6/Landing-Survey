import apiClient from "@/utils/apiClient";
import globalService from "./globalService";

export const getAllQuestionsFromPublishLink = async (link) => {
  const res = await apiClient.get(
    `${globalService.baseUrl}${globalService.routes.publishLink}/${link}`
  );
  return res.data;
};
