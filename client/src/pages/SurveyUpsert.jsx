import { Input } from '@/components/UI/input';
import { Label } from "@/components/ui/label";
import { Button } from '@/components/UI/button';
import * as Img from '@/assets/images/Images.jsx';
import useSurvey from '@/hooks/useSurvey';
import { useForm, Controller } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useContext, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { ThemeContext } from '@/context/ThemeContext';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const SurveyUpsert = () => {


  const location = useLocation();
  const survey = location.state?.survey;
  const { createSurvApi, updateSurv, isload } = useSurvey();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);


  // validation================
  const schema = yup.object().shape({
    title: yup.string().required('Title is required').min(2,'Title must be at least 2 characters')
      .max(10, 'Title must be at most 10 characters'),
    description: yup.string().required('Description is required').min(2, 'Title must be at least 2 characters')
      .max(10, 'Title must be at most 150 characters'),
    deadline: yup.string().required('Deadline is required'),
  });
  // ====================================



// useForm================
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      title: '',
      description: '',
      deadline: '',
      file: null,
    },

  }

  );

  useEffect(() => {
    if (survey) {
      reset({
        title: survey.title,
        description: survey.description,
        deadline: survey.deadline
          ? new Date(survey.deadline).toISOString().split("T")[0]
          : '',
        file: survey.file,
      });
    }
  }, [survey, reset]);
  

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('deadline', data.deadline);

    if (data.file && data.file[0]) {
      formData.append('file', data.file[0]); 
    }

    if (survey) {
      const res = updateSurv(survey.id, formData);
      if (res) {
        navigate('/dashboard');
      }
      
    } else {
      const res = await createSurvApi(formData);
      if (res) {
        navigate('/dashboard'); 
      }
    }
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  return (
    <div className='min-h-screen flex flex-col mt-10'>
      <div className='flex flex-col items-center justify-center'>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Dropzone field connected  */}
            <Controller
              control={control}
              name="file"
              render={({ field: { onChange, value } }) => {
                const onDrop = useCallback((acceptedFiles) => {
                  onChange(acceptedFiles); 
                }, [onChange]);

                const { getRootProps, getInputProps } = useDropzone({
                  onDrop,
                  accept: {
                    'image/*': []
                  },
                  multiple: false,
                });

                return (
                  <div
                    {...getRootProps()}
                    className="flex items-center border-2 border-[#00B7C1] w-50 py-2 px-5 gap-4 mb-5 rounded-md transition-all cursor-pointer hover:bg-[#00B7C1] hover:text-white"
                  >
                    <input {...getInputProps()} />
                    <div>
                      <img src={Img.uploadImg} alt="upload" />
                    </div>
                    <p className="text-base font-medium">
                      {value?.[0]?.name || 'Add Logo'}
                    </p>
                  </div>
                );
              }}
            />

            <div className={`flex flex-col gap-6 p-7 justify-center ${theme === 'dark' ? "[box-shadow:0_4px_16px_rgba(255,255,255,0.2)] border-none" : "bg-white border-gray-200 "}  border rounded-md`}>
              <div className='flex items-center gap-2'>
                <Label htmlFor="title" className="text-sm min-w-[70px] text-[#a7a8ab] font-medium">Title:</Label>
                <Input id='title' type="text" placeholder="Enter title" className={`${theme === 'dark' ? "" : "bg-[#EFF0F3]"}`} {...register('title', { required: 'Title is required' })} />

              </div>
                {errors.title && <p className="text-red-500 text-sm ms-20">{errors.title.message}</p>}

              <div className='flex items-center gap-2'>
                <Label htmlFor="description" className="min-w-[70px] text-[#a7a8ab] font-medium">Desc:</Label>
                <Input id='description' type="text" placeholder="Enter description" className={`${theme === 'dark' ? "" : "bg-[#EFF0F3]"}`}  {...register('description', { required: 'Title is required' })} />

              </div>
                {errors.description && <p className="text-red-500 text-sm ms-20">{errors.description.message}</p>}

              <div className='flex items-center gap-2'>
                <Label htmlFor="deadline" className="min-w-[70px] text-[#a7a8ab] font-medium">Deadline:</Label>
                <Input id="deadline" type="date" className={`${theme === 'dark' ? "" : "bg-[#EFF0F3] text-gray-500"}  w-40`} {...register('deadline', { required: 'deadlineis required' })} />

              </div>
                {errors.deadline && <p className="text-red-500 text-sm ms-20">{errors.deadline.message}</p>}

              <div className='flex gap-2 justify-end'>
                <Button type="button"
                  className={`${theme === 'dark' ? "bg-transparent" : "bg-white"} text-primary border-2 border-primary w-32 font-medium hover:bg-[#b9feffe8] hover:font-bold`}
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isload === 'true'}
                  className={`w-32 font-medium ${isload === 'true'
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-[#b9feffe8] hover:text-primary hover:font-bold'
                    }`}
                >
                  {isload === 'true' ? 'Saving...' : 'Save'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyUpsert;
