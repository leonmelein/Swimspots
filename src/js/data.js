export const fetchLocations = async () => {
    return await fetch(
        '/data/locations.json'
    ).then(res => res.json());
};
