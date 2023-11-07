
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";


const UserBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5001/booking?email=${user.email}`;
    useEffect(() => {
        fetch(url,{credentials: 'include'})
            .then(res => res.json())
            .then((data) => setBookings(data))

    }
    , [url]);

console.log(bookings)

    return (
        <div>
            <h2 className="text-6xl">{bookings.length}</h2>
        </div>
    );
};

export default UserBookings;