export default class Booking {
    constructor(roomId, date, time, equipmentId){
        this._roomId = roomId;
        this._bookingDate = date;
        this._bookingTime = time;
        this._equipmentId = equipmentId;
    }

    getRoomId() {
        return this._roomId;
    }
    
    getBookingDate(){
        return this._bookingDate;
    }

    getBookingTime(){
        return this._bookingTime;
    }

    getEquipmentId(){
        return this._equipmentId;
    }
}