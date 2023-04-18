import { customIcon } from "./CustomIcon";
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

	return <Marker position={[positionLat, postionLng]} icon={customIcon} />;
};
