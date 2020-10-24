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
        return await this.getResource(`/rockets/`);
    };

    getRocket = async (id) => {
        const rocket = await this.getResource(`/rockets/`);
        return rocket[id - 1];
    };

    getAllShips = async () => {
        const allShips = await this.getResource(`/ships/`);
        return allShips.filter((el) => el.image !== null);
    };

    getShip = async (id) => {
        const ship = await this.getResource(`/ships/`);
        return ship.find(el => el.ship_id === id);
    };

    getAllDragons = async () => {
        return await this.getResource(`/dragons/`);
    };

    getDragon = async (id) => {
        return await this.getResource(`/dragons/${id}`);
    };
};