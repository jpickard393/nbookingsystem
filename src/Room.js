export default class Room {
    constructor (id, capacity, resource) {
        this._roomId = id;
        this._capacity = capacity;
        this._resource=resource;
        this._bookings=[];
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

    setCapacity(capacity) {
        this._capacity = capacity;
    }

    get Resource() {
        return this._resource;
    }

    setResource(resourse){
       this._resource = resourse;
    }

    get AllBookings() {
        return this._bookings;
    }

    setAllBookings(bookings){
        this._bookings = bookings;
    }

}