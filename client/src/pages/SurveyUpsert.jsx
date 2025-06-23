import { Input } from '@/components/UI/input'
import { Label } from "@/components/ui/label"
import { Button } from '@/components/UI/button';
import * as Img from '@/assets/images/Images.jsx'

const SurveyUpsert = () => {

  return <>
    <div className='min-h-screen   flex flex-col mt-10 '>

    <div className='flex flex-col items-center justify-center  '>
    <div className="container">
          <form className='' >

            <div className='flex items-center border-2 border-[#00B7C1] w-50 py-2 px-5 gap-4 mb-5 rounded-md transition-all cursor-pointer hover:bg-[#00B7C1] hover:text-white '>
              <div>
                <img src={ Img.uploadImg} alt="" />
              </div>

              <p className='text-base font-medium '>Add Logo</p>
            </div>


            <div className='flex flex-col gap-6  p-7 justify-center bg-white border border-gray-200 rounded-md '>
          <div className='flex items-center gap-2'>
                <Label htmlFor="title" className="text-sm min-w-[70px] text-[#a7a8ab] font-medium">Title:</Label>
                <Input id='title' name='title' type="text" placeholder="Enter title" className=" bg-[#EFF0F3] shadow-none border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary "  />
          </div>
          <div className='flex items-center gap-2'>
                <Label htmlFor="description" className="min-w-[70px] text-[#a7a8ab] font-medium">Desc:</Label>
                <Input id='description' name='description' type="text" placeholder="Enter description" className=" bg-[#EFF0F3] shadow-none border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary " />
          </div>
          <div className='flex items-center gap-2'>
                <Label htmlFor="deadline" className="min-w-[70px] text-[#a7a8ab] font-medium">Deadline:</Label>
                <Input
                  id="deadline"
                  name="deadline"
                  type="date"
                  className="bg-[#EFF0F3] shadow-none border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-gray-500 w-40"
                />
              </div>
              
              <div className='flex gap-2 justify-end'>

                <Button
                  className="bg-white text-primary border-2 border-primary rounded-lg w-32 font-medium text-base leading-normal px-18 transition-all hover:bg-[#b9feffe8] hover:text-primary hover:font-bold cursor-pointer"
                        >
                          cancel
                        </Button>
                <Button type="submit"
                          className="bg-primary text-white rounded-lg w-32 font-medium text-base leading-normal px-18 transition-all hover:bg-[#b9feffe8] hover:text-primary hover:font-bold cursor-pointer"
                        >
                          save
                        </Button>
              </div>


        </div>
      </form>

    </div>

    </div>
    </div>
  </>;
};

export default SurveyUpsert;
