export class EventModel {
    eventType: string;
    eventImageURL: string;
    eventLocation: string;
    eventDateTime: Date;
    genderAllowed: string;

    constructor(eType: string, imageUrl: string, location: string, dateTime: Date, gender: string) {
        this.eventType = eType;
        this.eventImageURL = imageUrl;
        this.eventLocation = location;
        this.eventDateTime = dateTime;
        this.genderAllowed = gender;
    }
}
