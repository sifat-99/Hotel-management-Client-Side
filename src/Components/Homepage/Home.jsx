// import {  Typography } from "@material-tailwind/react";
import { CarouselCustomNavigation } from "./Banner";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import { Carousel } from "@material-tailwind/react";
import MapComponent from "../ExtraPage/Map";



const Home = () => {
  const { user } = useContext(AuthContext);

  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting Email: ${email}`);
    event.target.form.reset();
  };
  return (
    <div>
      <div className="h-[50vh] w-ful mx-12 mt-12">
        <CarouselCustomNavigation></CarouselCustomNavigation>
      </div>

      {!user && (
        <div className="w-[70vw] mx-auto border border-pink-100 mt-12 h-[10vh] rounded-lg flex items-center justify-center gap-8 bg-pink-400 text-black font-bold px-4">
          <h2 className="text-2xl md:text-6xl">Login to Save 30%</h2>
          <Link to={"/login"}>
            <button className="btn btn-primary w-32">Login</button>
          </Link>
        </div>
      )}

      <div className="mx-auto max-w-screen-2xl py-12 px-8">
        


        <div className="mt-12">
                  <h2 className="text-3xl font-bold mb-8 text-center underline">...User Testimonials...</h2>
                  <Carousel
                    className=" shadow-md rounded-md overflow-hidden bg-gray-800"
                  >
                    <div className="p-8 px-20 bg-gray-800 h-full">
                      <p className="text-white mb-4">
                        I had a wonderful stay at Relax Pacific Mirpur Dhaka. The staff
                        was friendly and attentive, and the room was clean and
                        comfortable. I would definitely recommend this hotel to anyone
                        visiting Dhaka.
                      </p>
                      <p className="text-orange-800 font-bold">- Jane Doe</p>
                    </div>
                    <div className="p-8 px-20 bg-gray-800 h-full">
                      <p className="text-white mb-4">
                        The service at Relax Pacific Mirpur Dhaka was exceptional. The
                        staff went above and beyond to make sure I had everything I
                        needed, and the facilities were top-notch. I would definitely
                        stay here again.
                      </p>
                      <p className="text-orange-800 font-bold">- John Smith</p>
                    </div>
                    <div className="p-8 px-20 bg-gray-800 h-full">
                      <p className="text-white mb-4">
                        I was impressed by the attention to detail at Relax Pacific
                        Mirpur Dhaka. The room was beautifully decorated and had
                        everything I needed for a comfortable stay. I would highly
                        recommend this hotel to anyone visiting Dhaka.
                      </p>
                      <p className="text-orange-800 font-bold">- Sarah Johnson</p>
                    </div>
                  </Carousel>
                </div>

                <div className="bg-gray-200 p-6 rounded-md mt-12">
      <h2 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h2>
      <p className="mb-4">Get updates, deals, and exclusive offers.</p>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            type="email"
            className="mr-2 p-2 flex-grow rounded-md border-2 border-gray-300"
            placeholder="Your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
            Subscribe
          </button>
        </div>
      </form>
    </div>
        
            <div className=" w-auto mx-auto mt-20">
              <h1 className="text-3xl text-center font-bold mb-4">Our Location</h1>
            < MapComponent></MapComponent>
            </div>
            

      </div>
    </div>
  );
};

export default Home;
