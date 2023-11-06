import { Card, Typography } from "@material-tailwind/react";
import { CarouselCustomNavigation } from "./Banner";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";




const Home = () => {

  const {user} = useContext(AuthContext)
  return (
    <div>

    <div className="h-[50vh] w-ful mx-12 mt-12">
    <CarouselCustomNavigation></CarouselCustomNavigation>
    </div>
 
      {
        !user && <div className="w-[70vw] mx-auto border border-pink-100 mt-12 h-[10vh] rounded-lg flex items-center justify-center gap-8 bg-pink-400 text-black font-bold px-4" >

        <h2 className="text-2xl md:text-6xl">Login to Save 30%</h2>
        <Link to={'/login'}><button className="btn btn-primary w-32">Login</button></Link>
         
         
       </div>
      }

      <div className="mx-auto max-w-screen-lg py-12">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </Card>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          What is Material Tailwind
        </Typography>
        
      </div>

      
    </div>
  );
};

export default Home;