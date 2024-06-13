import Home from "../pages/home/index"

import Contact from "../pages/contact/index"

import Category from "../pages/categories";

import AboutAndContact from "../pages/auth/auth.signup";

import BlogPage from "../pages/blog";

import Jobs from "../pages/about/job.about"; 

import SignUpForm from "../pages/auth/auth.signup";
import Login from "../pages/auth/auth.signin";

import BlogSection from "../pages/blog";
import BlogDetails from "../pages/blog/blogdetails";


import Deals from "../pages/deals";


// Bsuiness module Pages 

import ContactUs from "../pages/business/contactus/index"
import BusinessSignUp from "../pages/business/auth/auth.business";

import Error from "../pages/business/error/error.business";

import Demo from "../pages/business/demo/business.demo";

import BusinessHome from "../pages/business/home/business.home";

const routes = [

  { path: "/", element: <Home />, exact: "true", type: "public" },

  { path: "/sign-up", element: <SignUpForm />, exact: "true", type: "public" },

  { path: "/login", element: <Login />, exact: "true", type: "public" },

  { path: "/contact", element: <Contact />, exact: "true", type: "public" },

  { path: "/categories", element: <Category />, exact: "true", type: "public" },

  { path: "/about", element: <AboutAndContact />, exact: "true", type: "public" },

  { path: "/blog", element: <BlogPage />, exact: "true", type: "public" },

  { path: "/jobs", element: <Jobs />, exact: "true", type: "public" },

  { path: "/blogs", element: <BlogSection />, exact: "true", type: "public" },
  { path: "/blog-detail", element: <BlogDetails />, exact: "true", type: "public" },

  { path: "/deals", element: <Deals />, exact: "true", type: "public" },

  // ------------------ Business MOdule PAges
  { path: "/contactus", element: <ContactUs />, exact: "true", type: "public" },

  { path: "/business-signup", element: <BusinessSignUp />, exact: "true", type: "public" },

  { path: "/error", element: <Error />, exact: "true", type: "public" },

  { path: "/demo", element: <Demo />, exact: "true", type: "public" },

  { path: "/business", element: <BusinessHome />, exact: "true", type: "public" },

 
];
export default routes;
