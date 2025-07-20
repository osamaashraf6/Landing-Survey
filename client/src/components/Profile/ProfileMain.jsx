import React, { useState } from "react";
import personalImg from "@/assets/images/Mask group.png";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/services/userService";

function ProfileMain() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    language: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // تمنع الـ Refresh

    console.log("تم إرسال البيانات:", formData);

    // هنا تقدر تبعت للـ API لو حبيت
  };
  // const { isLoading , isError, data } = useQuery({
  //    queryKey: ['profile'],
  //   queryFn: getProfile,
  //   onSuccess: (data) => {
  //       console.log(" Profile Data:", data); //  جرب تشوف هل فعلاً وصل الداتا
  //     setFormData({
  //       name: data.name || '',
  //       email: data.email || '',
  //       password: '',
  //       phone: data.phone || '',
  //       country: data.country || '',
  //       language: data.language || '',
  //     });
  //    },
  //   //  console.log(data)
  // });

  const useGetAllPreviewQuery = () => {
    return useQuery({
      queryKey: ["preview"],
      queryFn: () => getProfile(),
    });
  };

  const {data, isLoading, isError} = useGetAllPreviewQuery();
  console.log(data)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isLoading) return <p className="text-center">...جارٍ تحميل البيانات</p>;
  if (isError) return <p className="text-red-500 text-center">حدث خطأ أثناء تحميل البيانات</p>;

  return (
    <div className="space-y-6  bg-white min-h-[83vh]  rounded-2xl p-9">
      <h2 className="text-2xl   font-semibold mb-2">Account Information</h2>
      <p className="pl-[20px] ">Update your personal information to keep your account up to date</p>
      <div className="flex items-center gap-4 flex-wrap ">
        <img src={personalImg} alt="personalImg" className="w-22 h-22 rounded-full object-cover" />

        <div className="flex flex-wrap gap-3">
          <button className="text-xs rounded-[8px] w-[150px] h-[35px] px-[20px] text-white bg-[#00B7C1] cursor-pointer hover:bg-[#b9bbc6] transition">
            Upload New Photo
          </button>
          <button className="text-xs rounded-[8px] w-[150px] h-[35px] px-[20px] text-white bg-[#b9bbc6] cursor-pointer hover:bg-[#00B7C1] transition">
            Remove Photo
          </button>
        </div>
      </div>
      <div className="">
        <form
          className="space-y-2 w-full grid grid-row-1 md:grid-cols-2 gap-8"
          onSubmit={handleSubmit}
        >
          <div>
            <div>
              <label className="block font-medium text-xs text-gray-500">User Name</label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="bg-gray-200 my-[10px] w-full indent-2 p-2 rounded-[6px] text-xs focus:outline-none"
                placeholder="Frederick Hane"
              />
            </div>
            <div>
              <label className="block font-medium text-xs text-gray-500">E-mail </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="bg-gray-200 my-[10px] w-full indent-2 p-2 rounded-[6px] text-xs focus:outline-none"
                placeholder="Gabriella.Mckenzie71@gmail.com"
              />
            </div>
            <div>
              <label className="block font-medium text-xs  text-gray-500">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-200 my-[10px] w-full indent-2 p-2 rounded-[6px] text-xs focus:outline-none"
                placeholder="Password"
              />
            </div>
            <div className="side-right mt-2">
              <button
                type="submit"
                className="bg-[#00B7C1] px-[15px] py-[8px] rounded-[6px] text-white text-xs cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
          <div>
            <div>
              <label className="block font-medium text-xs text-gray-500">phone Number</label>
              <input
                name="phone"
                type="number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-200 my-[10px] w-full indent-2 p-2 rounded-[6px] text-xs focus:outline-none"
                placeholder="520-631-1454"
              />
            </div>
            <div>
              <label className="block mt-2 font-medium text-xs  text-gray-500">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-2  w-full rounded-[6px] bg-gray-200 p-[7px] indent-2 text-gray-600 text-xs focus:outline-none"
              >
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
                className="mt-2 w-full rounded-[6px] bg-gray-200 p-[7px] indent-2 text-gray-600 text-xs focus:outline-none"
              >
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileMain;
