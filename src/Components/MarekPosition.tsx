import { Icon } from "leaflet";
import React, { useEffect } from "react";
import { Marker } from "react-leaflet";
import { useMapComp } from "./useMapComp";

interface MarekPositionProps {
	positionLat: number;
	postionLng: number;
}

export const MarekPosition = ({
	positionLat,
	postionLng,
}: MarekPositionProps) => {
	const { moveMap } = useMapComp(positionLat, postionLng);

	useEffect(() => {
		moveMap();
	}, [moveMap, positionLat, postionLng]);

	const customIcon = new Icon({
		iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
		iconSize: [34, 34],
	});

	return <Marker position={[positionLat, postionLng]} icon={customIcon} />;
};
