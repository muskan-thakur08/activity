import blogData from '../data/BlogDetails.js';

export default function Blog() {
    return (
        <div className="w-full min-h-screen">
            <h1 className="text-center text-4xl text-black mt-6 mb-2 uppercase">Blog</h1>
            <div className="w-full h-[450px] flex flex-wrap gap-2">

                {blogData.map((item, idx) => {
                    return <div key={idx} className="cards w-[440px] h-full">
                        <img src={item.img}className="w-full h-[256px] object-fit rounded-lg cursor-pointer hover:opacity-80 object-cover" />
                        <a href="#" className="text-2xl text-black hover:text-blue-600">{item.heading}</a>
                        <p className="mt-2">{item.para}</p>
                    </div>
                })}

            </div>
        </div>
    )
}