import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MarkerPosition } from "./MarkerPosition/MarkerPosition";

interface MapPropsType {
	locationData:
		| {
				location: {
					lat: number;
					lng: number;
				};
		  }
		| undefined;
}

export const Map = ({ locationData }: MapPropsType) => {
	if (!locationData) {
		return null;
	}
	const { location } = locationData;
	const { lat, lng } = location;

	return (
		<MapContainer
			className="h-1/2 sm:h-full relative z-0"
			center={[lat, lng]}
			zoom={13}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<MarkerPosition positionLat={lat} postionLng={lng} />
		</MapContainer>
	);
};
