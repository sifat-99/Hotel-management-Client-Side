import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import moment from "moment";

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5001/booking?email=${user.email}`;

  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleCancelBooking = (id) => {
    fetch(`http://localhost:5001/booking/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Booking Canceled Successfully");
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        }
      });
  };

  const isDateValid = (date) => {
    const currentDate = moment().format("YY-MM-DD");
    const currentDateInt = parseInt(currentDate.split("-")[2]);
    const bookingDateInt = parseInt(date.split("-")[2]);
    console.log(currentDateInt,bookingDateInt)
    if((currentDateInt-bookingDateInt)>1){
        return true;
        }
        else
        {
            return false;
        }


  };

  return (
    <div>
      <h2 className="text-6xl text-center mt-14 mb-8">Booking List:</h2>
      <table className="table max-w-7xl w-11/12 mx-auto border-2 mb-12">
        <thead>
          <tr>
            <th>Name</th>
            <th>Booking ID</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Room Type</th>
            <th>Cancel Booking</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id} className="mb-4">
              <td className="p-6">{booking.name}</td>
              <td className="p-6">{booking._id.slice(-3)}</td>
              <td className="p-6">{booking.date}</td>
              <td className="p-6">{booking.date2}</td>
              <td className="p-6">{booking.Category}</td>
              <td>
                {isDateValid(booking.date) ? (
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleCancelBooking(booking._id)}
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-gray-300 text-white px-4 py-2 rounded-lg"
                  >
                    Cannot Cancel
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserBookings;
