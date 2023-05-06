import { customIcon } from "./CustomIcon";
import { useEffect } from "react";
import { Marker } from "react-leaflet";
import { useMapComp } from "./useMapComp";

interface MarkerPositionProps {
	positionLat: number;
	postionLng: number;
}

export const MarkerPosition = ({
	positionLat,
	postionLng,
}: MarkerPositionProps) => {
	const { moveMap } = useMapComp(positionLat, postionLng);

	useEffect(() => {
		moveMap();
	}, [moveMap, positionLat, postionLng]);

	return <Marker position={[positionLat, postionLng]} icon={customIcon} />;
};
