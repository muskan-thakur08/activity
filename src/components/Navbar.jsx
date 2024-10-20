import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    let navData = [
        { path: "/", name: "Gallery" },
        { path: "/blog", name: "Blog" },
        { path: "/about", name: "About" },
        { path: "/contact", name: "Contact" },
    ]
    return (
        <div className="h-screen w-1/2 flex flex-col relative">
            <div className="absolute top-[40%] left-1/4">
                <div className="fixed">
                    <h1 className="text-3xl font-light text-zinc-900 tracking-tight text-center uppercase">Travel with <br/> <span className="font-semibold  text-black text-5xl font-anton ">Catherine</span></h1>
                    <div className="flex items-center justify-center flex-col mt-5 gap-5">
                        {navData.map((nav, idx) => {
                            return <NavLink
                            style={(e) => {
                                return {
                                  color:  idx!=0 && e.isActive ? "rgb(37 99 235)" : "",
                                };
                              }}
                                to={nav.path}
                                key={idx}
                                className="text-xl hover:text-blue-600 font-regular tracking-tight text-zinc-500 ">{nav.name}</NavLink>
                        })}
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
        </div>
    )
}