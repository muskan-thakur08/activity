import { Route, Routes } from "react-router-dom";
import ImagesData from "../components/ImagesData";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

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