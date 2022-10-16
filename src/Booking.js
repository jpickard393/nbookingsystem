export default class Booking {
    constructor(roomId, date, time, equipment){
        this._roomId = roomId;
        this._bookingDate = date;
        this._bookingTime = time;
        this._equipment = equipment;
    }

    get RoomId() {
        return this._roomId;
    }

    setRoomId(id){
        this._roomId = id;
    }
    
    get BookingDate(){
        return this._bookingDate;
    }

    setBookingDate(bookingDate){
        this._bookingDate = bookingDate;
    }

    get BookingTime(){
        return this._bookingTime;
    }

    setBookingTime(bookingTime){
        this._bookingTime = bookingTime;
    }

    get Equipment(){
        return this._equipment;
    }

    setEquipment(equipment){
        this._equipment = equipment;
    }
}