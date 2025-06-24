import globalService from "@/services/globalService";
import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";




export const SurveyContext = createContext();

export default function SurveyContextProvider({ children }) {
    
    const getAllSurv = async () => {
        console.log("getAllSurv");
        try {
            const res = await apiClient.get(`${globalService.baseUrl}${globalService.routes.survey}?page=1&pageSize=200`)
            console.log(res.data);
            return res.data;
        } catch (err) {
            console.log(err + "all survay erorr");
        }


    }

    const { data } = useQuery(
        {
            queryKey: ['surveysData'],
            queryFn: getAllSurv
        }


    )

    const survData = data?.data || []
    

    return <>
        <SurveyContext.Provider value={{ survData }}>
            {children}
        </SurveyContext.Provider>
    </>
}
