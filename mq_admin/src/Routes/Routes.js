import Dashboard from "../Views/dashboard/index"

import Signin from "../Views/Auth/SignIn"
import Signup from "../Views/Auth/SignUp"

import Category from "../Views/Category/category"
import SubCategory from "../Views/Category/subcategory"

import About from "../Views/about"

import Blog from "../Views/blog"

const routes =[  
    
    {path:'/sign-up', element:<Signup />, exact:'true', type:'public' },
    {path:'/', element:<Signin />, exact:'true', type:'public' },


    {path:'/dashboard', element:<Dashboard />, exact:'true', type:'private' },

    {path:'/category', element:<Category />, exact:'true', type:'private' },
    {path:'/sub-category', element:<SubCategory />, exact:'true', type:'private' },

    {path:'/about', element:<About />, exact:'true', type:'private' },

    {path:'/blog', element:<Blog />, exact:'true', type:'private' },

]

export default routes 