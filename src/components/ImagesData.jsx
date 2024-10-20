export default function ImagesData() {
    return (
        <div className="w-full min-h-screen flex gap-4 flex-wrap mb-20">
            {images.map((img, idx) => {
                return <div key={idx} className="w-[288px] h-[288px] overflow-hidden rounded-lg mt-3">
                    <img src={img.image} className="w-full h-full  object-fit cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-150 duration-300" />
                </div>
            })} 
        </div>
    )
}