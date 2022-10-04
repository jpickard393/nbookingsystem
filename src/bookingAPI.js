import Booking from "./booking";

export default class BookingAPI {
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
       
        console.log(room);
        
        if(room){
            const booking = new Booking(roomId,bookingDate);
            room.addBooking(booking);
            
            return true;
        }
    }
}

// must 
// list all rooms
// list all available rooms for a given day and hour
// book a specfic room by constraints

// How do I test bookRoom  -  Should it be on here or the room
