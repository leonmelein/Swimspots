function getStoredLocations() {
    const localData = localStorage.getItem('spots');
    return localData ? JSON.parse(localData) : [];
}

function addStoredLocation(id){
    let data = getStoredLocations();
    data.push(id);
    saveStoredLocations(data);
}

function deleteStoredLocation(id) {
    const data = getStoredLocations()
    const index = data.indexOf(String(id));
    console.log(index > -1);
    if (index > -1) { // only splice array when item is found
        data.splice(index, 1); // 2nd parameter means remove one item only
    }
    console.log(data);
    saveStoredLocations(data);
    return data;
}

function updateStoredLocations(id) {
    let swimspots = JSON.parse(localStorage.getItem("spots"))
    if (swimspots === null) {
        swimspots = []
    }
    swimspots.push(id)
    saveStoredLocations(swimspots);
    return swimspots;
}

function saveStoredLocations(locations){
    localStorage.setItem("spots", JSON.stringify(locations))
}

export {
    getStoredLocations,
    addStoredLocation,
    updateStoredLocations,
    deleteStoredLocation
}