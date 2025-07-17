import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Njk3NzE0YzFhMmU1MWQ4NWI0MzBlYiIsImVtYWlsIjoiZWUuZXNsYW0zNTVAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NTI3MzI0ODgsImV4cCI6MTc1MjkwNTI4OH0.F4tHzQtyYRKjmwDRewPx0ouI_fymo0SRAwMr_h154V4";

const API = axios.create({
  baseURL:"https://server-node-3r5n.onrender.com/",
});

API.interceptors.request.use((config) =>{
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getProfile = async ()=>{
  const response =  await API.get("/api/auth/profile");
    console.log("✅ رد السيرفر:", response.data); // ✅ عشان تتأكد البيانات جت

  return response.data;
  };


