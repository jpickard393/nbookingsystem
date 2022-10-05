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

    // Find the room and add a booking
    bookRoom(booking) {
        console.log(booking.RoomId);
        if(!booking) return false;
        const room = this._allRooms.find(r => r.roomId === booking.RoomId);
        
        if(room){
            room.addBooking(booking);
            
            return true;
        }
        return false;
    }
}

// must 
// list all rooms
// list all available rooms for a given day and hour
// book a specfic room by constraints

// How do I test bookRoom  -  Should it be on here or the room
