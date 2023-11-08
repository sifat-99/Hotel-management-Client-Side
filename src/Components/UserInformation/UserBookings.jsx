import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import moment from "moment";
import swal from "sweetalert";

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `https://hotel-management-server-two.vercel.app/booking?email=${user.email}`;

  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleCancelBooking = (id) => {
    fetch(`https://hotel-management-server-two.vercel.app/booking/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          swal({
            title: "Thank you!",
            text: "Your Booking was Cancelled!",
            icon: "success",
            button: " Ok!!!",
          })
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        }
      });
  };

  const isDateValid = (date) => {
    const currentDate = moment().format("YY-MM-DD");
    // const bookingDate = moment(date, "YYYY-MM-DD");
    // console.log(bookingDate)
    const currentDateInt = parseInt(currentDate.split("-")[2]);
    const bookingDateInt = parseInt(date.split("-")[2]);
    // console.log(currentDateInt,bookingDateInt)
    if((bookingDateInt-currentDateInt)>1){
        // console.log(true)
        return true;
        }
        else
        {
            // console.log(false)
            return false;
        }


  };

  return (
    <div>
      <h2 className="text-6xl text-center mt-14 mb-8">Booking List:</h2>
      <table className="table max-w-7xl w-11/12 mx-auto border-2 mb-12">
        <thead className="max-w-screen-2xl">
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Check-in</th>
            {/* <th>Check-out</th> */}
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="max-w-screen-2xl">
          {bookings.map((booking) => (
            <tr key={booking._id} className="mb-4">
              <td >{booking.name}</td>
              <td >{booking._id.slice(-3)}</td>
              <td >{booking.date}</td>
              {/* <td >{booking.date2}</td> */}
              <td >{booking.Category}</td>
              <td>
                {isDateValid(booking.date) ? (
                  <button
                    className="bg-red-500 text-white  rounded-lg"
                    onClick={() => handleCancelBooking(booking._id)}
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-gray-300 text-white  rounded-lg"
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
