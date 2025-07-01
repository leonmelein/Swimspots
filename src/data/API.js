async function fetchData(id) {
    try {
        const response = await fetch(`/api/nl/locations/${id}.json`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fetchList() {
    try {
        const response = await fetch(`/api/nl/locations.json`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}


export {
    fetchData,
    fetchList
}