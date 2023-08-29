export async function geoIpLocate() {
    console.log((await fetch("http://ip-api.com/json/")).json())
}