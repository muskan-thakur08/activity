import { MdCheckBoxOutlineBlank } from "react-icons/md";
export default function Contact() {
    return (
        <div className="w-full min-h-screen ">
            <div className="flex items-center justify-center">
                <h1 className="text-4xl my-5 uppercase">Contact</h1>
            </div>
            <div className="w-[60%] mx-auto flex gap-5 mt-12 mb-10">
                <div className="flex flex-col w-full">
                    <label htmlFor="firstname" className="uppercase text-zinc-700 text-xs mb-2 tracking-wide">first name</label>
                    <input type="text" id="firstname" className="w-full bg-zinc-200 rounded py-3 outline-none px-3 text-zinc-700 focus:outline-none focus:bg-white border focus:border-gray-500 leading-tight" />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="lastname" className="uppercase text-zinc-700 text-xs mb-2 tracking-wide">last name</label>
                    <input type="text" id="lastname" className="w-full bg-zinc-200 rounded py-3 outline-none px-3 text-zinc-700 focus:outline-none focus:bg-white border focus:border-gray-500 leading-tight" />
                </div>
            </div>
            <div className="w-[60%] mx-auto">
                <label htmlFor="email" className="uppercase text-zinc-700 text-xs tracking-wide">e-mail</label>
                <input type="email" id="email" className="w-full bg-zinc-200 rounded py-3 mt-2 outline-none px-3 text-zinc-700 focus:outline-none focus:bg-white border focus:border-gray-500 leading-tight" />
            </div>
            <div className="w-[60%] mx-auto mt-10 flex flex-col">
                <label htmlFor="message" className="uppercase text-zinc-700 text-xs tracking-wide">message</label>
                <textarea id="message" className="w-full h-48 resize-none bg-zinc-200 rounded py-3 mt-2 outline-none px-3 text-zinc-700 focus:outline-none focus:bg-white border focus:border-gray-500 leading-tight"></textarea>
                <div className="w-[304px] border-2 rounded mt-10 mb-10 bg-zinc-100">
                    <div className="flex items-center gap-2 py-5 ">
                        <MdCheckBoxOutlineBlank className="text-4xl text-gray-400" />
                        <p className="tracking-tight text-zinc-800">I'm not a robot</p>
                    </div>
                </div>
                <div className="mb-10">
                <button className="text-center px-4 py-2 bg-blue-600 font-bold  text-white rounded hover:bg-blue-500 transition ease-in-out delay-150  duration-300">Send</button>
                </div>
            </div>
        </div>
    )
}