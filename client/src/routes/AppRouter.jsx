import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import LazyLoadingRoute from "../features/loading/LazyLoadingRoute";

// layouts
import MainLayout from "../layouts/MainLayout";
import SurveyLayout from "../layouts/SurveyLayout";
import AuthGuard from "../guards/AuthGuard";

// pages
const About = lazy(() => import("../pages/About"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Preview = lazy(() => import("../pages/Preview"));
const SurveyDetails = lazy(() => import("../pages/SurveyDetails")); //
const SurveyUpsert = lazy(() => import("../pages/SurveyUpsert")); //
const Faqs = lazy(() => import("../pages/Faqs"));
const ForgetPassword = lazy(() => import("../pages/ForgetPassword"));
const Home = lazy(() => import("../pages/Home"));
const Pricing = lazy(() => import("../pages/Pricing"));
const Profile = lazy(() => import("../pages/Profile")); //
const ResetCode = lazy(() => import("../pages/ResetCode")); //
const ResetPassword = lazy(() => import("../pages/ResetPassword")); //
const SignIn = lazy(() => import("../pages/SignIn")); //
const SignUp = lazy(() => import("../pages/SignUp")); //
const FillingForm = lazy(() => import("../pages/FillingForm")); //

// routing config
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LazyLoadingRoute />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LazyLoadingRoute />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "faqs",
        element: (
          <Suspense fallback={<LazyLoadingRoute />}>
            <Faqs />
          </Suspense>
        ),
      },

      {
        path: "pricing",
        element: (
          <Suspense fallback={<LazyLoadingRoute />}>
            <Pricing />
          </Suspense>
        ),
      },
    ],
  },

  //========
  {
    path: "dashboard",
    element: <SurveyLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <AuthGuard>
            <Suspense fallback={<LazyLoadingRoute />}>
              <Dashboard />
            </Suspense>
          </AuthGuard>
        ),
      },
      {
        path: "surveys/:surveyId",
        element: (
          <AuthGuard>
            <Suspense fallback={<LazyLoadingRoute />}>
              <SurveyDetails />
            </Suspense>
          </AuthGuard>
        ),
      },
      {
        path: "preview",
        element: (
          <AuthGuard>
            <Suspense fallback={<LazyLoadingRoute />}>
              <Preview />
            </Suspense>
          </AuthGuard>
        ),
      },
      {
        path: "surveyupsert",
        element: (
          <AuthGuard>
            <Suspense fallback={<LazyLoadingRoute />}>
              <SurveyUpsert />
            </Suspense>
          </AuthGuard>
        ),
      },
    ],
  },

  //========
  {
    path: "forgetpassword",
    element: (
      <Suspense fallback={<LazyLoadingRoute />}>
        <ForgetPassword />
      </Suspense>
    ),
  },
  {
    path: "signin",
    element: (
      <Suspense fallback={<LazyLoadingRoute />}>
        <SignIn />
      </Suspense>
    ),
  },

  {
    path: "signup",
    element: (
      <Suspense fallback={<LazyLoadingRoute />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "resetcode",
    element: (
      <Suspense fallback={<LazyLoadingRoute />}>
        <ResetCode />
      </Suspense>
    ),
  },
  {
    path: "resetpassword",
    element: (
      <Suspense fallback={<LazyLoadingRoute />}>
        <ResetPassword />
      </Suspense>
    ),
  },

  {
    path: "profile",
    element: (
      <AuthGuard>
        <Suspense fallback={<LazyLoadingRoute />}>
          <Profile />
        </Suspense>
      </AuthGuard>
    ),
    children:[
      {
        index:true,
        element: <Profile />,
      },
      {
        path:"edit-profile",
        element:<Profile />,
      },
    ],
  },
  {
    path: "fillingform",
    element: (
      <Suspense fallback={<LazyLoadingRoute />}>
        <FillingForm />
      </Suspense>
    ),
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;
