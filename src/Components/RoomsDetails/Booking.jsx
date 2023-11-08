import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import { useLocation, useParams } from "react-router-dom";

const BookingForm = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const room = location.state;

  const { displayName, email, uid } = user;

  const [name, setName] = useState(displayName);
  const [Email, setEmail] = useState(email);
  const [date, setDate] = useState("");
  const [date2, setDate2] = useState("");
  const [Room, setRoom] = React.useState(null);
  const [remaining, setRemaining] = useState(room?.Remaining);
  console.log(remaining);
  console.log(Room);
  const handleSubmit = (event) => {
    event.preventDefault();

    const booking = {
      uid,
      Category: id,
      name,
      email,
      date,
      dateINT: parseInt(date.split("-")[2]),
      date2
    };
    console.log(booking);

    axios
      .post("http://localhost:5001/bookings", booking)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  };

  React.useEffect(() => {
    axios
      .get(`http://localhost:5001/${id}`)
      .then((res) => {
        setRoom(res.data);
        const remainingSeat = res.data.Remaining;
        console.log(remainingSeat);
        setRemaining(remainingSeat);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleRemaining = () => {
    const newRemaining = remaining - 1;
    console.log(newRemaining);
    // setAvailable(newRemaining);
    const data = {
      Remaining: newRemaining,
    };
    axios
      .put(`http://localhost:5001/services/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[70vh] max-w-sm mx-auto mt-20 border p-4 flex flex-col"
    >
      <label>
        Name:
        <input
          placeholder={user?.displayName}
          className="w-full pl-4 border-2 rounded-lg gap-4 flex border-red-500"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          placeholder={user?.email}
          className="w-full pl-4 border-2 rounded-lg gap-4 flex border-red-500"
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Check-in Date:
        <input
          className="border-2 px-4 rounded-lg gap-4 flex border-red-500 my-2 w-full"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Check-out Date:
        <input
          className="border-2 px-4 rounded-lg gap-4 flex border-red-500 my-2 w-full"
          type="date"
          value={date2}
          onChange={(e) => setDate2(e.target.value)}
          required
        />
      </label>
      <input
        type="submit"
        onClick={handleRemaining}
        className="btn btn-primary mt-4"
        value="Book"
      />
    </form>
  );
};

export default BookingForm;
