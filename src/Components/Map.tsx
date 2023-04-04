import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MarekPostion } from "./MarekPostion";

interface PropsType {
	locationData: {
		location: {
			lat: number;
			lng: number;
		};
	};
}

export const Map = ({ locationData }: PropsType) => {
	const { location } = locationData;
	const { lat, lng } = location;
	const positionLat: number = lat;
	const postionLng: number = lng;

	return (
		<MapContainer
			className="h-3/5 sm:h-full relative z-0"
			center={[positionLat, postionLng]}
			zoom={13}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<MarekPostion positionLat={positionLat} postionLng={postionLng} />
		</MapContainer>
	);
};
