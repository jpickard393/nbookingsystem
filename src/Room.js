export default class Room {
    constructor (id, capacity, resource) {
        this._id = id;
        this._capacity = capacity;
        this._resource=resource;
    }

    getId() {
        return this._id;
    }
    
    getCapacity() {
        return this._capacity;
    }

    getResource() {
        return this._resource;
    }


}