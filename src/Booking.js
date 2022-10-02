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

    set RoomId(id){
        this.roomId = id;
    }
    
    get BookingDate(){
        return this._bookingDate;
    }

    set BookingDate(bookingDate){
        this._bookingDate = bookingDate;
    }

    get BookingTime(){
        return this._bookingTime;
    }

    set BookingTime(bookingTime){
        this._bookingTime = bookingTime;
    }

    get EquipmentId(){
        return this._equipmentId;
    }

    set EquipmentId(equipmentId){
        this._equipmentId = equipmentId;
    }
}