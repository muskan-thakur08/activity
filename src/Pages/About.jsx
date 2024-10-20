export default function About() {
    return (
        <div className="min-h-screen text-zinc-600 text-lg">
            <p className="mt-8">
                My name is Ekaterine Mitagvaria, and I come from the beautiful city of Tbilisi, Georgia. Programming is my passion, and I love every moment I spend immersed in it. The joy of creating something from scratch and bringing ideas to life is an absolute pleasure for me.</p>
            <p className="mt-5">
                Besides programming, another great love of mine is photography. I don't carry any heavy cameras; instead, I rely on my trusty iPhone to capture the essence of every new place I visit. These photographs become precious memories, allowing me to cherish and relive those experiences whenever I want. Sharing these moments with others is equally fulfilling, as it lets me offer a unique perspective of the world to those around me.
            </p>

            <p className="mt-5">My wanderlust has taken me to various places in Georgia, Turkey, Azerbaijan, Armenia, and even as far as Germany. Though I haven't traveled to many countries, whenever I do, I make it a point to explore every corner, even if it means focusing on just one city. I believe that every place has its own charm and hidden treasures waiting to be discovered.</p>

            <p className="mt-5">The farthest I've journeyed is to the enchanting landscapes of South America, particularly Argentina, a trip that left me awe-inspired and hungry for more adventures. Exploring its diverse cities and natural wonders was an experience like no other, and it fueled my passion for capturing moments through my lens.</p>
            <p className="mt-5">
                To express my passions and share my travel experiences, I've created a YouTube channel. It's not just a hobby; it's a way for me to connect with fellow travelers and enthusiasts, inspiring their curiosity and igniting their desire to explore.</p>

            <p className="mt-5">In my heart, I am both a programmer and a photographer, and these passions continue to drive me toward exciting opportunities and discoveries. Whether I'm immersed in code or capturing mesmerizing sceneries, I know that these pursuits will always be an essential part of who I am.</p>

            <div className="flex flex-wrap gap-2 w-full justify-center items-center mt-3">
                <div>
                    <img src="https://travel-with-catherine.vercel.app/static/media/imgOne.8d3d346000eae2526ecb.webp" className="w-[224px] h-[208px]" />
                    <p className="font-bold text-sm text-black">Iguazu Falls, Argentina</p>
                </div>
                <div>
                    <img src="https://travel-with-catherine.vercel.app/static/media/imgTwo.3016029895d5acbb5acf.webp" className="w-[224px] h-[208px]" />
                    <p className="font-bold text-sm text-black">Baku, Azerbaijan</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 w-full justify-center items-center mb-3">
                <div>
                    <img src="https://travel-with-catherine.vercel.app/static/media/imgFour.68ab0ed8f2019de73bb1.webp" className="w-[224px] h-[208px]" />
                    <p className="font-bold text-sm text-black">Kazbegi, Georgia</p>
                </div>
                <div>
                    <img src="https://travel-with-catherine.vercel.app/static/media/imgThree.05ba3f5cff191ede1b77.webp" className="w-[224px] h-[208px]" />
                    <p className="font-bold text-sm text-black">Istanbul, Turkey</p>
                </div>
            </div>
        </div>
    )
}