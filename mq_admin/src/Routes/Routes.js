import Dashboard from "../Views/dashboard/index"

import Signin from "../Views/Auth/SignIn"
import Signup from "../Views/Auth/SignUp"

import Category from "../Views/Category/category"
import SubCategory from "../Views/Category/subcategory"

import About from "../Views/about"

import Blog from "../Views/blog"

import Companies from "../Views/companies"

import TrendingBusiness from "../Views/trending"

import Deals from "../Views/deals"

import Dubai from "../Views/dubai/index"

const routes =[  
    
    {path:'/sign-up', element:<Signup />, exact:'true', type:'public' },
    {path:'/', element:<Signin />, exact:'true', type:'public' },


    {path:'/dashboard', element:<Dashboard />, exact:'true', type:'private' },

    {path:'/category', element:<Category />, exact:'true', type:'private' },
    {path:'/sub-category', element:<SubCategory />, exact:'true', type:'private' },

    {path:'/about', element:<About />, exact:'true', type:'private' },

    {path:'/blog', element:<Blog />, exact:'true', type:'private' },

    {path:'/companies', element:<Companies />, exact:'true', type:'private' },

    {path:'/businesses', element:<TrendingBusiness />, exact:'true', type:'private' },

    {path:'/deals', element:<Deals />, exact:'true', type:'private' },

    {path:'/dubai', element:<Dubai />, exact:'true', type:'private' },

]

export default routes 