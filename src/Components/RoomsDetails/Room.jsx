import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRating from "./Rating";

const Room = () => {
  const { id } = useParams();
  const [room, setRoom] = React.useState(null);
  const [remaining, setRemaining] = useState(room?.Remaining);
  const [available, setAvailable] = useState(remaining);
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = React.useState(true);
  // console.log(remaining);
  // console.log(available);
  // console.log(rating);
  let users = 1;

  React.useEffect(() => {
    axios
      .get(`https://hotel-management-server-two.vercel.app/${id}`)
      .then((res) => {
        setRoom(res.data);
        setLoading(false);
        const remainingSeat = res.data.Remaining;
        console.log(remainingSeat);
        setRemaining(remainingSeat);
        setAvailable(remainingSeat);
        const Rating = res.data.Rating;
        setRating(Rating);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <div className=" flex h-[60vh] flex-col justify-center items-center w-full mx-auto">
      <h1 className="text-6xl mt-30">Loading</h1>
      <br />
      <Spinner className="h-12 w-12" />
      </div>;
  }

  const handleRating = (num) => {
    const newRating = rating + num;
    users = users + 1;
    // console.log(newRating);
    setRating(newRating);
    const data = {
      Rating: newRating,
    };
    axios
      .put(`https://hotel-management-server-two.vercel.app/services/rating/${id}`, data, {
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
  var AverageRating = rating / users / 10;
  AverageRating = AverageRating.toFixed(1);

  if (!room) {
    return (
      <div data-aos="zoom-in-down" className="text-center mt-32">
        <Spinner className="h-16 w-16 text-gray-900/50 mt-20 text-center mx-auto" />
        <h1 className="text-center text-6xl mt-4">Be Patient........</h1>
        <h1 className="text-center text-6xl mt-4">Coming soon....</h1>
        <Spinner className="h-12 w-12 mx-auto mt-12" />
      </div>
    );
  }
  return (
    <div data-aos="zoom-in-down" className="max-w-7xl mx-auto mt-12 mb-20">
      <div className=" max-w-screen-2xl mx-auto ">
        <img
          className=" h-[40vh] w-full rounded-xl"
          src={room?.RoomImages[1]}
          alt=""
        />
      </div>
      <div className="grid mt-14 gap-4 grid-cols-1 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold bg-white p-2 rounded-lg text-purple-600">
            Category: {room?.Category}
          </h1>
          <img
            className=" h-[200px] rounded-lg"
            src={room?.RoomImages[0]}
            alt=""
          />
          <img
            className="h-[200px] rounded-lg"
            src={room?.RoomImages[2]}
            alt=""
          />
        </div>
        <div className="grid  mt-14 px-8 lg:col-span-2">
          <h1 className="text-3xl font-bold ">{room?.Title}</h1>
          <p className=" text-justify mt-4">{room?.CategoryDescription}</p>
        </div>
        <div className="mt-14 border p-5 rounded-xl">
          <h1 className="text-2xl font-bold bg-white p-2 rounded-lg text-purple-600">
            Category: {room?.Category}
          </h1>
          <h1 className="text-2xl font-bold mt-4">
            Price per night: {room?.PricePerNight}
          </h1>
          <p>
            Room Remaining :
            {remaining > 0 ? (
              <span className="text-green-500 pl-4">
                Available <span className="text-red-600">({available})</span>
              </span>
            ) : (
              <span className="text-red-500 pl-4">Not Available</span>
            )}
          </p>
          <p>Rating: {AverageRating}</p>
          <div className="flex gap-2 mt-2">
            <StarRating rating={AverageRating} />
          </div>
          <p>
            Room Size: <span className="text-blue-600">{room?.RoomSize}</span>
          </p>
          SpecialOffers:
          <ol className="pl-8 mt-2">
            <li className="list-disc">{room?.SpecialOffers}</li>
            <li className="list-disc">Complimentary Wifi</li>
            <li className="list-disc">24 Hours Fitness Center</li>
          </ol>
          {
            available >0 ?<Link
            to={{
             pathname: `/${id}/booking`,
             state: { 
               room
             }
           }}
           >
             <button className="btn btn-success mt-4 mx-auto w-full">
               Book Now
             </button>
           </Link> : <button disabled className="btn btn-danger mt-4 mx-auto w-full">
              Book Now
            </button>

          }
          <div>
            <h1 className="mt-5 text-2xl font-bold">Rate Us:</h1>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleRating(1)}
                className="btn btn-outline btn-primary font-bold text-2xl"
              >
                1
              </button>
              <button
                onClick={() => handleRating(2)}
                className="btn btn-outline btn-primary font-bold text-2xl"
              >
                2
              </button>
              <button
                onClick={() => handleRating(3)}
                className="btn btn-outline btn-primary font-bold text-2xl"
              >
                3
              </button>
              <button
                onClick={() => handleRating(4)}
                className="btn btn-outline btn-primary font-bold text-2xl"
              >
                4
              </button>
              <button
                onClick={() => handleRating(5)}
                className="btn btn-outline btn-primary font-bold text-2xl"
              >
                5
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
