async function seeBusByStopCode() {

    let lat = 51.5539;
    let lon = -0.1468;
    const stopTypes = "NaptanPublicBusCoachTram";

    let postCodesAPIResponse = await fetch('ttps://api.postcodes.io/postcodes');

    let tflStopCodeAPIresponse = await fetch(`https://api.tfl.gov.uk/StopPoint/?lat=${lat}&lon=${lon}&stopTypes=${stopTypes}`);
    let stopCodeData = await tflStopCodeAPIresponse.json();

    console.log(stopCodeData.stopPoints[0].id);
    console.log(stopCodeData.stopPoints[1].id);

    let tflBusStopsAPIResponse = await fetch('https://api.tfl.gov.uk/StopPoint/490008660S/Arrivals');
    let tflBusStops = await tflBusStopsAPIResponse.json();
    for (let busInfo of tflBusStops) {
        console.log(busInfo.expectedArrival);

    }

}

seeBusByStopCode();