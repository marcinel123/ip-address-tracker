export interface MapPropsType {
	locationData:
		| {
				location: {
					lat: number;
					lng: number;
				};
		  }
		| undefined;
}