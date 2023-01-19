import { getStopCodes } from "./busStopCode.js";


export async function getLatLon(postCode, stopTypes) {
    let postCodesAPIResponse = await fetch(`https://api.postcodes.io/postcodes/${postCode}`);
    let postCodesAPIData = await postCodesAPIResponse.json();
    let lat = postCodesAPIData.result.latitude;
    let lon = postCodesAPIData.result.longitude;

    getStopCodes(lat, lon, stopTypes);

}