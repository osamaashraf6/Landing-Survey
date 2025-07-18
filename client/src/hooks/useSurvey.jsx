import globalService from "@/services/globalService";
import apiClient from "@/utils/apiClient";
import {   useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export default function useSurvey() {
    const [isload, setIsLoad] = useState(false)

    const queryClient = useQueryClient();

    // create

    const createSurvApi = async (data) => {
        setIsLoad(true)
        console.log('createSurvApi');
        try {
            const res = await apiClient.post(`${globalService.baseUrl}${globalService.routes.survey}`, data, {
            },)
            console.log(res.data);
            toast.success("Survey created successfully ✅");
           
            return res.data
        } catch (err) {
            console.log(err + "create survay erorr");
            toast.error("Failed to created survey ❌");


        } finally {
            setIsLoad(false)
        }
        
    }


    // UPDATE 
    const updateSurv = async (surveyId,data) => {
        try {
            const res = await apiClient.put(`${globalService.baseUrl}${globalService.routes.survey}/${surveyId}`,data)
            console.log(res + 'surevy updated');
            toast.success("Survey Updated successfully ✅");
        } catch (error) {
            console.log(error);
            toast.error("Failed to updated survey ❌");

        }
    }
    // DELETE

    const deleteSurv = async (surveyId) => {

        
        try {
            const res = await apiClient.delete(`${globalService.baseUrl}${globalService.routes.survey}/${surveyId}`)
            console.log(res + 'surevy deleted');
            // getAllSurv();
            queryClient.invalidateQueries(['surveysData']);
            toast.success("Survey deleted successfully ✅");


        } catch (err) {
            console.log(err);
            toast.error("Failed to delete survey ❌");
            
        }
    }



    return { createSurvApi, deleteSurv, updateSurv, isload }
}
