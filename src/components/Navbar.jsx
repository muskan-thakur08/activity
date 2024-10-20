import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
// import { LuMenu } from "react-icons/lu";

export default function Navbar() {
    return (
        <div className="h-screen w-1/2 flex flex-col relative">
            <div className="absolute top-[40%] left-1/4">
                <div className="fixed">
                    <h1 className="text-3xl font-light text-zinc-900 tracking-tight text-center uppercase">Travel with <br /> <span className="font-semibold  text-black text-5xl font-anton ">Catherine</span></h1>
                    <div className="flex items-center justify-center flex-col mt-5 gap-5">
                        <NavLink
                            to="/"
                            className="text-xl hover:text-blue-600 font-regular tracking-tight text-zinc-500 ">Gallery</NavLink>

                        <NavLink style={(e) => {
                            return {
                                color: e.isActive ? "rgb(37 99 235)" : ""
                            }
                        }}
                            to="/blog"
                            className="text-xl hover:text-blue-600 font-regular tracking-tight text-zinc-500 ">Blog</NavLink>
                        <NavLink style={(e) => {
                            return {
                                color: e.isActive ? "rgb(37 99 235)" : ""
                            }
                        }}
                            to="/about"
                            className="text-xl hover:text-blue-600 font-regular tracking-tight text-zinc-500 ">About</NavLink>

                        <NavLink style={(e) => {
                            return {
                                color: e.isActive ? "rgb(37 99 235)" : ""
                            }
                        }}
                            to="/contact"
                            className="text-xl hover:text-blue-600 font-regular tracking-tight text-zinc-500 ">Contact</NavLink>
                    </div>
                    <div className="flex gap-4 items-center justify-center text-xl mt-3">
                        <a href="#"><FaGithub /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><IoGlobeOutline /></a>
                    </div>
                    <div className="flex items-center justify-center mt-6 text-zinc-500">
                        <p>© 2022-2024</p>
                    </div>
                </div>
            </div>
            {/* <LuMenu className="md:hidden w-8 h-8 ml-2 mt-2 fixed" /> */}
        </div>
    )
}