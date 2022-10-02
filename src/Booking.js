export default class Booking {
    constructor(roomId, date, time, equipmentId){
        this._roomId = roomId;
        this._bookingDate = date;
        this._bookingTime = time;
        this._equipmentId = equipmentId;
    }

    get RoomId() {
        return this._roomId;
    }

    setRoomId(id){
        this.roomId = id;
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

    get EquipmentId(){
        return this._equipmentId;
    }

    setEquipmentId(equipmentId){
        this._equipmentId = equipmentId;
    }
}