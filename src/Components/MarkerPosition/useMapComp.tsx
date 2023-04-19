import { useMap } from "react-leaflet";

export const useMapComp = (positionLat: number, postionLng: number) => {
	const map = useMap();

	const moveMap = () => {
		map.flyTo([positionLat, postionLng], 13, {
			animate: true,
		});
	};

	return { moveMap };
};
