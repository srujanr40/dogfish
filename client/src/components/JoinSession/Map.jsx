import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Box from "@mui/material/Box";
import "./JoinSession.css"

export default function Map() {
    const { isMapLoaded } = useLoadScript(
        {
            googleMapsApiKey: "AIzaSyAe4G85edT2a9BPunRUIV-WnVvON6DAquQ",
        }
    );
    console.log(!isMapLoaded)

    if( !isMapLoaded ) return 
    <Box sx={{
        width: 400,
        height: 600,
        backgroundColor: 'primary.dark',
    }}/>

    return (
        <GoogleMap zoom={10} center={{lat: 40, lng: -80}} mapContainerClassName="map"></GoogleMap>
    )
}