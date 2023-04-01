import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

interface PropsType {
	locationData: {
		location: {
			lat: number;
			lng: number;
		};
	};
}

const customIcon = new Icon({
	iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
	iconSize: [34, 34],
});

export const Map = ({ locationData }: PropsType) => {
	const { location } = locationData;
	const { lat, lng } = location;
	console.log(lat);
	console.log(lng);
	const position = [lat, lng];
	return (
		<MapContainer
			className="h-3/5 sm:h-full relative z-0"
			center={position}
			zoom={13}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position} icon={customIcon} />
		</MapContainer>
	);
};
