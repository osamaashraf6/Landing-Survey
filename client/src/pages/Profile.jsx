import React from "react";
import ProfileMain from "../components/Profile/ProfileMain";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import Navbar from "../components/layout/Navbar";
const Profile = () => {
  return <section className="bg-gray-100">
    <Navbar/>
      <div className="p-6 grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <ProfileSidebar />
          </div>
            <div className="col-span-12 md:col-span-8 lg:col-span-8">
        <ProfileMain />
        </div>
      </div>
  </section>
};

export default Profile;
