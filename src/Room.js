export default class Room {
    constructor (id, capacity, resource) {
        this._roomId = id;
        this._capacity = capacity;
        this._resource = resource;
        this._bookings = [];
    }

    get RoomId() {
        return this._roomId;
    }

    setRoomId(id) {
        this._roomId = id;
    }
    
    get Capacity() {
        return this._capacity;
    }

    set Capacity(capacity) {
        this._capacity = capacity;
    }

    getResource() {
        return this._resource;
    }

    Resource(resourse){
       this._resource = resourse;
    }

    get AllBookings() {
        return this._bookings;
    }

    addBooking(booking){
        this._bookings.push(booking);
    }

}