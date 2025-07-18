import * as Img from '@/assets/images/Images.jsx'
// import * as Icon from '@/assets/icons/Icons.js'
import { Button } from '@/components'
import HeaderSurv from '../common-Dash/headerSurv';
import SurveyView from '../SurveyView/SurveyView';
import { useContext } from 'react';
import { SurveyContext } from '@/context/SurveyContext';
import { useNavigate } from 'react-router-dom';



export default function EmptyDash() {
    const { survData } = useContext(SurveyContext)
const navigate = useNavigate()
    const handleCreateSurvNav = () => {
        navigate('/dashboard/surveyupsert');
      };
    return <>

        { survData.length > 0  ? (<SurveyView surveys={survData}  />) :
            (<>
            <div className=''>

                <HeaderSurv />
                <div className=' flex flex-col items-center justify-center  gap-10 md:gap-4 md:mb-5'>
                    <img src={Img.emptyImg} alt="emptySurvey" />
                    <p className='text-center font-medium text-sm md:text-base text-[#62636C]'>No surveys have been created. To create surveys, click "Create Survey"</p>
                        <Button onClick={() => { handleCreateSurvNav() }} className="bg-primary text-white rounded-lg w-32 font-medium text-base leading-normal px-18 transition-all hover:bg-[#b9feffe8] hover:text-primary hover:font-bold cursor-pointer ">
                        
                        Create Survey

                    </Button>
                </div>
            </div>
            </>)
        }
            


    </>
}
