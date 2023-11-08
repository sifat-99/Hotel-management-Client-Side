
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [23.806333, 90.361315];

  return (
    <div className="h-[40vh] w-[80vw] mx-auto md:w-3/4">
      <MapContainer center={position} zoom={16} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Mirpur 2 <br /> Dhaka
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  );
};

export default MapComponent;