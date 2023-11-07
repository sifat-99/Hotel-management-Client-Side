import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";



const Account = () => {

    const { user } = useContext(AuthContext);
    console.log(user)



    return (
        <div className="mx-auto max-w-7xl mt-20  flex gap-12 justify-center">
            
            <img className="w-[150px] h-[150px] mt-20 ml-8 rounded-full bg-white" src={user?.photoURL} alt="" />
            <div className="mt-20">
            <h1 className="text-3xl">Full Name: <br /> <br /> {user?.displayName}</h1>
            <p className="text-xl mt-4 "> Email: <br /><span className=" text-blue-500 underline">{user?.email}</span></p>
            </div>
        </div>
    );
};

export default Account;