async function getBusesByPostcode(postCode, stopTypes) {

    let postCodesAPIResponse = await fetch('https://api.postcodes.io/postcodes/' + postCode);
    let postCodesAPIData = await postCodesAPIResponse.json();
    let lat = postCodesAPIData.result.latitude;
    let lon = postCodesAPIData.result.longitude;

    let tflStopCodeAPIresponse = await fetch(`https://api.tfl.gov.uk/StopPoint/?lat=${lat}&lon=${lon}&stopTypes=${stopTypes}`);
    let stopCodeData = await tflStopCodeAPIresponse.json();

    let firstStopCode = stopCodeData.stopPoints[0].id;
   // let secondStopCode = stopCodeData.stopPoints[1].id;

    let firstBusStopsAPIResponse = await fetch('https://api.tfl.gov.uk/StopPoint/' + firstStopCode + '/Arrivals');
    let firstBusStops = await firstBusStopsAPIResponse.json();
    for (let busInfo of firstBusStops) {
        console.log('First Bus Stop: ' + busInfo.expectedArrival);

    }

    let secondBusStopsAPIResponse = await fetch('https://api.tfl.gov.uk/StopPoint/' + secondStopCode + '/Arrivals');
    let secondBusStops = await secondBusStopsAPIResponse.json();
    for (let busInfo of secondBusStops) {
        console.log('Second Bus Stop: ' + busInfo.expectedArrival);

    }

}

getBusesByPostcode("HA54UT", "NaptanPublicBusCoachTram");