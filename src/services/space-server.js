export default class SpaceServer {
    _apiBase = 'https://api.spacexdata.com/v3';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getAllRockets = async () => {
        const allRockets = await this.getResource(`/rockets/`);
        return allRockets;
    };

    getRocket = async (id) => {
        const rocket = await this.getResource(`/rockets/`);
        return rocket[id - 1];
    };

    getAllShips = async () => {
        const allShips = await this.getResource(`/ships/`);
        return allShips.slice(4);
    };

    getShip = async (id) => {
        const ship = await this.getResource(`/ships/${id}`);
        return ship;
    };
};