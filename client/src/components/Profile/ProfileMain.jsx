import  React, { useState } from 'react';
import personalImg from '@/assets/images/Mask group.png';
import { useMutation } from "@tanstack/react-query";
import { changeName, changePassword } from "@/services/userService";

function ProfileMain() {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    password:'',
    oldPassword:'',
    phone:'',
    country:'',
    language:''
  });
  const nameMutation = useMutation({
    mutationFn: changeName,
    onSuccess: (data) => {
      alert("تم تعديل الاسم بنجاح");
    },
    onError: (error) => {
 alert(error?.response?.data?.error || "فشل في تحديث الاسم");
    }
  });
const passwordMutation = useMutation({
  mutationFn: changePassword,
  onSuccess: () => {
    alert("تم تغيير كلمة المرور بنجاح");
  },
  onError: () => {
    alert("فشل في تغيير كلمة المرور. تأكد من الباسورد القديم");
  }
});
  const handleChange = (e)=> {
  const { name, value } = e.target;
    setFormData(prev =>({
      ...prev,
      [name] : value
    }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("submit data", formData);
    const currentUser = JSON.parse(localStorage.getItem("user"));


  if (
  formData.name.trim() !== "" &&
  currentUser &&
  formData.name !== currentUser.name
) {
  nameMutation.mutate({ name: formData.name });
}

      if (formData.password && formData.oldPassword) {
    passwordMutation.mutate({
      oldPassword: formData.oldPassword,
      newPassword: formData.password,
    });
  }
  }

  return (
    <div className='space-y-6  bg-white min-h-[83vh]  rounded-2xl p-9'>
     <h2 className='text-2xl   font-semibold mb-2'>Account Information</h2>
     <p className="pl-[20px] ">Update your personal information to keep your account up to date</p>
     <div className="flex items-center gap-4 flex-wrap ">
      <img 
      src={personalImg}
      alt="personalImg"
      className="w-22 h-22 rounded-full object-cover"
     />
     
      <div className="flex flex-wrap gap-3">
        <button className="text-xs rounded-[8px] w-[150px] h-[35px] px-[20px] text-white bg-[#00B7C1] cursor-pointer hover:bg-[#b9bbc6] transition">
          Upload New Photo
        </button>
            <button className="text-xs rounded-[8px] w-[150px] h-[35px] px-[20px] text-white bg-[#b9bbc6] cursor-pointer hover:bg-[#00B7C1] transition">
          Remove Photo
        </button>
      </div>
     </div>
    <div className='grid grid-row-1 md:grid-cols-2 gap-8'>
        <form className="space-y-2 w-full" onSubmit={handleSubmit}>
           <div>
            <label className="block font-medium text-xs text-gray-500">User Name</label>
            <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-200 my-[10px] w-full indent-2 p-2 rounded-[6px] text-xs focus:outline-none"
            placeholder='Frederick Hane'
            />
           </div>
           <div>
            <label className="block font-medium text-xs text-gray-500">E-mail </label>
            <input 
            type="email" 
            name="email"
             value={formData.email}
            onChange={handleChange}
            className="bg-gray-200 my-[10px] w-full indent-2 p-2 rounded-[6px] text-xs focus:outline-none"
            placeholder='Gabriella.Mckenzie71@gmail.com'
            />
           </div>
           <div>
            <label className="block font-medium text-xs  text-gray-500">Old Password</label>
            <input 
            type="password" 
            name="oldPassword"
            value={formData.oldPassword || ""}
            onChange={handleChange}
            className="bg-gray-200 my-[10px] w-full indent-2 p-2 rounded-[6px] text-xs focus:outline-none"
            placeholder='Old Password'
            />
           </div>
            <div className="side-right mt-2">
            <button
            type='submit'
            
            className="bg-[#00B7C1] px-[15px] py-[8px] rounded-[6px] text-white text-xs cursor-pointer">
              Save Changes
            </button>
            
           </div>
      </form>
        <form className="">
           <div>
            <label className="block font-medium text-xs text-gray-500">phone Number</label>
            <input 
             name="phone"
            type="number" 
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-200 my-[10px] w-full indent-2 p-2 rounded-[6px] text-xs focus:outline-none"
            placeholder='520-631-1454'
            />
           </div>
           <div>
            <label className="block mt-2 font-medium text-xs  text-gray-500">Country</label>
            <select 
              name="country"
              value={formData.country}
              onChange={handleChange}
            className="mt-2  w-full rounded-[6px] bg-gray-200 p-[7px] indent-2 text-gray-600 text-xs focus:outline-none">
           <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="Egypt">Egypt</option>
              <option value="KSA">KSA</option>
              <option value="USA">USA</option>
            </select>
           </div>
           <div>
            <label className="block mt-6 font-medium text-xs  text-gray-500">Language</label>
             <select 
              name="language"
              value={formData.language}
              onChange={handleChange}
             className='mt-2 w-full rounded-[6px] bg-gray-200 p-[7px] indent-2 text-gray-600 text-xs focus:outline-none'>
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
            </select>
           </div>
          
      </form>
    </div>
    </div>
  )
}

export default ProfileMain