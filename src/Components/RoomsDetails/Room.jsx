import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const Room = () => {
    
    const { id } = useParams();
    const [room, setRoom] = React.useState(null);

    React.useEffect(() => {
        axios.get(`http://localhost:5001/${id}`)
            .then(res => {
                setRoom(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    if (!room) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-7xl">
            <div>{room.Category}</div>
            <div>
                <div>{room.RoomDescription}
                <img src={room.RoomImages[0]} alt="" />
                </div>
                <div>{room.PricePerNight}</div>
                <div>{room.Remaining}</div>
            </div>
        </div>
    );
};

export default Room;

