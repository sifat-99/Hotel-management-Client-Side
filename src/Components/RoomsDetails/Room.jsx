import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Room = () => {
  const { id } = useParams();
  const [room, setRoom] = React.useState(null);
  const [remaining, setRemaining] =useState(room?.Remaining);
  

  React.useEffect(() => {
    axios
      .get(`http://localhost:5001/${id}`)
      .then((res) => {
        setRoom(res.data);
        const remainingSeat = res.data.Remaining;
        setRemaining(remainingSeat);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);


  if (!room) {
    return (
      <div className="text-center mt-32">
        <Spinner className="h-16 w-16 text-gray-900/50 mt-20 text-center mx-auto" />
        <h1 className="text-center text-6xl mt-4">Loading........</h1>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto mt-12 mb-20">
      <div className=" max-w-screen-2xl mx-auto ">
        <img className=" h-[40vh] w-full rounded-xl" src={room?.RoomImages[1]} alt="" />
      </div>
      <div className="grid mt-14 gap-4 grid-cols-1 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold bg-white p-2 rounded-lg text-purple-600">Category: {room?.Category}</h1>
          <img className=" h-[200px] rounded-lg" src={room?.RoomImages[0]} alt="" />
          <img className="h-[200px] rounded-lg" src={room?.RoomImages[2]} alt="" />
        </div>
        <div className="grid  mt-14 px-8 lg:col-span-2">
            <h1 className="text-3xl font-bold ">{room?.Title}</h1>
            <p className=" text-justify mt-4">{room?.CategoryDescription}</p>
            </div>
        <div className="mt-14 border p-5 rounded-xl">
        <h1 className="text-2xl font-bold bg-white p-2 rounded-lg text-purple-600">Category: {room?.Category}</h1>
        <h1 className="text-2xl font-bold mt-4">Price per night: {room?.PricePerNight}</h1>
        <p>Room Remaining  :
             {
                    remaining > 0 ? <span className="text-green-500 pl-4">Available <span className="text-red-600">({room?.Remaining})</span></span> : <span className="text-red-500 pl-4">Not Available</span>
             }
             </p>

             <p>Room Size: <span className="text-blue-600">{room?.RoomSize}</span></p>
             SpecialOffers:
             <ol  className="pl-8 mt-2">
                <li className="list-disc">{room?.SpecialOffers}</li>
                <li className="list-disc">Complimentary Wifi</li>
                <li className="list-disc">24 Hours Fitness Center</li>
             </ol>
             <button className="btn btn-success mt-4 mx-auto w-full">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Room;
