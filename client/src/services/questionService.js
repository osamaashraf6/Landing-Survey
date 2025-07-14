import apiClient from "@/utils/apiClient";
import globalService from "./globalService";

export const addQuestion = async ({surveyId, question}) => {
 
  const res = await apiClient.post(`${globalService.baseUrl}/questions/${surveyId}`, {
    questions: [].concat(question),
  });
  return res.data;
};
