export async function getBusesTime(stopCode) {

    let busStopsAPIResponse = await fetch('https://api.tfl.gov.uk/StopPoint/' + stopCode + '/Arrivals');
    let busStopsData = await busStopsAPIResponse.json();

    for (let i = 0; i < 5; i++) {
        console.log(busStopsData[i].stationName);
        console.log(busStopsData[i].lineName);
        console.log(busStopsData[i].expectedArrival);
        console.log("-----------------------------------")

    }
}