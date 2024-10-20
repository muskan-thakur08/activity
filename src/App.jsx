import Navbar from "./Components/Navbar";
import Routing from "./utils/Routing";

function App() {
  let images = [
    {
      image:
        "https://travel-with-catherine.vercel.app/static/media/image-1.f3846ab428b8b1440bad.webp",
    },
    {
      image:
        "https://travel-with-catherine.vercel.app/static/media/image-2.361cbdb54f7e2d0f0bf2.webp",
    },
    {
      image:
        "https://travel-with-catherine.vercel.app/static/media/image-3.fc939f08c1e9f3caaea1.webp",
    },
    {
      image:
        "https://travel-with-catherine.vercel.app/static/media/image-4.ffd8103a15932b486d43.webp",
    },
    {
      image:
        "https://travel-with-catherine.vercel.app/static/media/image-5.bbe1ced2cdc7ce90223c.webp",
    },
    {
      image:
        "https://travel-with-catherine.vercel.app/static/media/image-6.41c47fe89f58b7c80c32.webp",
    },
    {
      image:
        "https://travel-with-catherine.vercel.app/static/media/image-7.1180d6b367a44fc16029.webp",
    },
    {
      image:
        "https://travel-with-catherine.vercel.app/static/media/image-8.adef25a2b9604550f0c0.webp",
    },
    {
      image:
        "https://travel-with-catherine.vercel.app/static/media/image-9.777e09aea7a9bfaac1ea.webp",
    },
    {
      image:
        "https://travel-with-catherine.vercel.app/static/media/image-10.0763d9639b3b3807fa32.webp",
    },
    {
      image:
        "https://travel-with-catherine.vercel.app/static/media/image-11.2d851ab816a60e2404e6.webp",
    },
    {
      image:
        "https://travel-with-catherine.vercel.app/static/media/image-12.3b96b543ad43b60318e5.webp",
    },
  ];

  return (
    <div className="flex">
      <Navbar />
      <Routing images={images} />
    </div>
  );
}

export default App;
