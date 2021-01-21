export default class SpaceServer {
    _apiBase = 'https://api.spacexdata.com/v3';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        return res.json();
    };

    getAllRockets = () => {
        return this.getResource(`/rockets/`);
    };

    getRocket = async (id) => {
        const rocket = await this.getResource(`/rockets/`);
        return rocket[id - 1];
    };

    getAllShips = async (num) => {
        const offset = 12 * (num - 1)
        const allShips = await this.getResource(`/ships/?limit=12&offset=${offset}`);
        return allShips.filter((el) => el.image !== null);
    };

    getShip = async (id) => {
        const ship = await this.getResource(`/ships/`);
        return ship.find(el => el.ship_id === id);
    };

    getAllDragons = () => {
        return this.getResource(`/dragons/`);
    };

    getDragon = (id) => {
        return this.getResource(`/dragons/${id}`);
    };
};
