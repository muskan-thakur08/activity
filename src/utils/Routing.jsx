import { Route, Routes } from "react-router-dom";
import ImagesData from "../Components/ImagesData";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";

export default function Routing({images,blogData}){
    return(
        <Routes>
        <Route path="/" element={<ImagesData images={images} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog blogData={blogData} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    )
}