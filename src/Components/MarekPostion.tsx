import { Icon } from "leaflet";
import React, { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";

interface MarekPostionProps {
	positionLat: number;
	postionLng: number;
}

export const MarekPostion = ({
	positionLat,
	postionLng,
}: MarekPostionProps) => {
	const map = useMap();

	useEffect(() => {
		map.flyTo([positionLat, postionLng], 13, {
			animate: true,
		});
	}, [map, positionLat, postionLng]);

	const customIcon = new Icon({
		iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
		iconSize: [34, 34],
	});

	return <Marker position={[positionLat, postionLng]} icon={customIcon} />;
};
