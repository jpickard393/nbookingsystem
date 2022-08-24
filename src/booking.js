export default class Booking {
    _bookedHours;

    constructor(){
        if (this._bookedHours === undefined || 
            this._bookedHours.length===0) 
            this._bookedHours = [];
    };

    addBooking(bookedHour){
        if(this.validateBooking(bookedHour)){
            this._bookedHours.push ({timeBooked: bookedHour});
            return true;
        }
        return false;
    }

    validateBooking(bookedHour){
        return bookedHour !== undefined &&
        this.isNotDoubleBooked(bookedHour) && 
        this.isCorrectTimeFormat(bookedHour);
    }

    // return a list of booked hours
    getBookedHours(){
        return this._bookedHours;
    }

    // check that there is not already a dublicate time in the array
    isNotDoubleBooked(bookedHour){
        return !this._bookedHours.includes(bookedHour);
    }

    // check that the time is in format 00:00 and only on the hour
    isCorrectTimeFormat(bookedHour){
        const correctFormat = new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$");
        return correctFormat.test(bookedHour.timeBooked);
    }
}
