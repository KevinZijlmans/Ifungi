import L from 'leaflet'
import marker from '../assets/mushroommarker.png'

const iconMushroom = L.icon({
    iconUrl: marker,
    iconSize: new L.Point(60, 75),
});

export default iconMushroom;