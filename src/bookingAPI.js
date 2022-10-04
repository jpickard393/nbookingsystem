import Booking from "./booking";

export default class bookingApi {
    _allAvailableRooms;
    _allRooms;

    constructor(){
        this._allAvailableRooms=[];
        this._allRooms=[];
       };

    get AllRooms() {
        return this._allRooms;
       }

    AddRoom(room){
        this._allRooms.push(room);
    }

    get AvailableRooms(){
        return this._allAvailableRooms;
    }

    bookRoom(roomId, bookingDate) {
        if(!roomId) return false;
        const room = this._allRooms.find(r => r.roomId === roomId);
        
        if(room){
            const booking = new Booking(roomId,bookingDate);
            room.addBooking(booking);
        }
    }
}