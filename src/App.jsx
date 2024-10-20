import Navbar from "./Components/Navbar";
import Routing from "./utils/Routing";

function App() {
  let images = [
    { image: "https://travel-with-catherine.vercel.app/static/media/image-1.f3846ab428b8b1440bad.webp" },
    { image: "https://travel-with-catherine.vercel.app/static/media/image-2.361cbdb54f7e2d0f0bf2.webp" },
    { image: "https://travel-with-catherine.vercel.app/static/media/image-3.fc939f08c1e9f3caaea1.webp" },
    { image: "https://travel-with-catherine.vercel.app/static/media/image-4.ffd8103a15932b486d43.webp" },
    { image: "https://travel-with-catherine.vercel.app/static/media/image-5.bbe1ced2cdc7ce90223c.webp" },
    { image: "https://travel-with-catherine.vercel.app/static/media/image-6.41c47fe89f58b7c80c32.webp" },
    { image: "https://travel-with-catherine.vercel.app/static/media/image-7.1180d6b367a44fc16029.webp" },
    { image: "https://travel-with-catherine.vercel.app/static/media/image-8.adef25a2b9604550f0c0.webp" },
    { image: "https://travel-with-catherine.vercel.app/static/media/image-9.777e09aea7a9bfaac1ea.webp" },
    { image: "https://travel-with-catherine.vercel.app/static/media/image-10.0763d9639b3b3807fa32.webp" },
    { image: "https://travel-with-catherine.vercel.app/static/media/image-11.2d851ab816a60e2404e6.webp" },
    { image: "https://travel-with-catherine.vercel.app/static/media/image-12.3b96b543ad43b60318e5.webp" }
  ]
  let blogData = [
    {
      img: "https://travel-with-catherine.vercel.app/static/media/image-1.f3846ab428b8b1440bad.webp",
      heading: "Architectural Heritage Of Georgia: Preserving The Soul Of A Nation",
      para: "Georgia has a rich architectural heritage that reflects its diverse cultural and historical influences. Georgian architecture is a melting pot of styles, it's a blend of different cultural and historical influences, which makes it unique"
    },
    {
      img: "https://travel-with-catherine.vercel.app/static/media/image-2.361cbdb54f7e2d0f0bf2.webp", heading: "Unveiling The Allure Of Georgian Hotels: Where Tradition Meets Hospitality",
      para: "Georgia is a popular tourist destination known for its natural beauty, rich culture and history, and delicious cuisine. There are many hotels in Georgia that cater to a range of budgets and preferences."
    },
    { img: "https://travel-with-catherine.vercel.app/static/media/image-3.fc939f08c1e9f3caaea1.webp", heading: "A Tapestry Of Riches: Exploring The Arts And Culture Of Georgia", para: "Georgia has a rich and diverse artistic tradition that reflects its cultural and historical heritage - Iconography, Frescoes, Metalwork, Enamel, Textile art and much more. The use of intricate details and bright colors are common characteristics in many of the forms of art in Georgia." },
    { img: "https://travel-with-catherine.vercel.app/static/media/image-111.79921948ddb823888551.jpeg", heading: "Ancient Wine Of Georgia: Unveiling The Elixir Of History And Tradition", para: "Georgia is a country with an ancient tradition of winemaking, dating back over 8,000 years.Georgian wine is known for its unique flavor and aroma, as well as its use of traditional winemaking methods, such as the use of clay vessels called 'qvevri' for fermentation and aging." },
    { img: "https://travel-with-catherine.vercel.app/static/media/image-95.d77609565d61421e4ef6.jpeg", heading: "Graffiti In Georgia: A Canvas Of Expression And Social Commentary", para: "Georgia, like many other countries, has a graffiti culture that has developed in recent years. Graffiti in Georgia can be found in cities such as Tbilisi, Batumi, and Kutaisi, among others. Street art, murals, and graffiti are becoming increasingly popular in the country" },
    { img: "https://travel-with-catherine.vercel.app/static/media/image-96.aa058192a10de1c57dd9.jpeg", heading: "Business In Georgia: Nurturing Growth And Entrepreneurship In The Caucasus", para: "Georgia is a country with a rapidly developing economy and a growing business environment. The country has a diverse range of industries and sectors, and there are many opportunities for businesses to succeed." },
    { img: "https://travel-with-catherine.vercel.app/static/media/image-77.8f6eb4ebba9b137d9658.webp", heading: "Kazbegi: A Majestic Alpine Retreat In The Heart Of Georgia", para: "Kazbegi is a small town located in the Kazbegi Municipality in the Mtskheta-Mtianeti region of Georgia. It is situated on the banks of the Tergi River and is surrounded by the Kazbegi Mountains, which are part of the Greater Caucasus Mountain range." },
    { img: "https://travel-with-catherine.vercel.app/static/media/image-78.1470da9abc7db138d809.webp", heading: "The Majestic Beauty Of Kazbegi Mountains: A Paradise For Adventure And Serenity", para: "Kazbegi is surrounded by the Kazbegi Mountains, which are part of the Greater Caucasus Mountain range. Some of the most notable mountains in the Kazbegi region include Kazbek, Shani, Lebaiskari, Tetnuldi and others." },

    { img: "https://travel-with-catherine.vercel.app/static/media/image-39.ac916e6c867c16995421.webp", heading: "Georgian Nature: A Breathtaking Tapestry Of Diversity And Beauty", para: "Georgia is a country known for its diverse and beautiful landscapes. The country has a wide range of natural features, including mountains, forests, rivers, and lakes." },
    { img: "https://travel-with-catherine.vercel.app/static/media/image-10.0763d9639b3b3807fa32.webp", heading: "Gastronomic Delights: Exploring The Richness Of Traditional Cuisine In Georgia", para: "Georgian cuisine is known for its unique and diverse flavors, as well as its use of fresh, locally-sourced ingredients. The dishes taste like no other especially the ones which include different kinds of spices you have never seen." },
  ]
  return (
    <div className="flex">
      <Navbar />
      <Routing images={images} blogData={blogData}/>
    </div>

  )
}

export default App;





