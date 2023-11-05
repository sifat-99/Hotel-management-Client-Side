import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="w-full h-[100vh]  flex gap-8 flex-col items-center justify-center">
            <h1 className="text-6xl text-white font-bold">Error 404</h1>
            <p className="text-2xl text-white font-semibold">Sorry, We Misplaced That Page</p>
            <p className="text-white text-xl">Our digital librarian seems to have misplaced the page you requested. Stay with us, and we will help you rediscover it.</p>
            <Link to={'/'}><button className="btn btn-accent text-black w-48 text-2xl font-bold normal-case">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;