
//Function to get Latitude and Longitude based on valid Postcode 
export async function getLatLon(postCode) {
    let postCodesAPIResponse = await fetch("https://api.postcodes.io/postcodes/" + postCode);
    let postCodesAPIData = await postCodesAPIResponse.json();
    let lat = postCodesAPIData.result.latitude;
    let lon = postCodesAPIData.result.longitude;
    return [lat, lon];
}