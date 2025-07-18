import globalService from "./globalService";
import apiClient from "@/utils/apiClient";

export const getAllPreview = async (surveyId) => {
  const res = await apiClient.get(
    `${globalService.baseUrl}${globalService.routes.preview}/${surveyId}`
  );
  return res.data;
};

export const createPublishLink = async (surveyId) => {
  const res = await apiClient.patch(`${globalService.baseUrl}/survey/${surveyId}/link`);
  return res.data;
};
