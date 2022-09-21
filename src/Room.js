export default class Room {
    constructor (id, capacity, resource) {
        this._id = id;
        this._capacity = capacity;
        this._resource=resource;
        this._bookings=[];
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

    getAllBookings() {
        return this._bookings;
    }


}