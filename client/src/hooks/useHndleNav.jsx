import { useNavigate } from "react-router-dom";

export default function useHndleNav() {
    const navigate = useNavigate();


    const handleUpdateNav = (survey) => {
        navigate(
            `/dashboard/surveyupsert`, { state: { survey } }

        )
    }
    const handlePreviewNav = (survey) => {
        navigate(
            `/dashboard/preview?surveyId=${survey}`

        )
    }
    const handleAddQuesNav = (survey) => {
        navigate(
            `/dashboard/surveys/${survey}`

        )
    }
    return { handleUpdateNav, handlePreviewNav, handleAddQuesNav }
}
