//Function to get bus timings which are due to arrive
export async function getBusesTime(stopCode) {

    let busStopsAPIResponse = await fetch('https://api.tfl.gov.uk/StopPoint/' + stopCode + '/Arrivals');
    let busStopsData = await busStopsAPIResponse.json();
    
    //Only 5 or less buses which are due to arrive will be displayed
    if (busStopsData.length >= 5) {
        for (let i = 0; i < 5; i++) {
            console.log(busStopsData[i].stationName);
            console.log(busStopsData[i].lineName);
            console.log(busStopsData[i].expectedArrival);
            console.log("-----------------------------------")
        }
    }
    else {
        for (let i = 0; i < busStopsData.length; i++) {
            console.log(busStopsData[i].stationName);
            console.log(busStopsData[i].lineName);
            console.log(busStopsData[i].expectedArrival);
            console.log("-----------------------------------")

        }
    }
}