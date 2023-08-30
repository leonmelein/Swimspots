export async function geoIpLocate() {
    let ipinfo = await fetch("http://ip-api.com/json/");
    let countryBB = await fetch("/map/bounding-boxes.json");

    let countryData = await ipinfo.json();
    let bboxData = await countryBB.json();

    const bbox = bboxData[countryData.countryCode][1];
    return [
        [bbox[0], bbox[1]],
        [bbox[2], bbox[3]]
    ]
}