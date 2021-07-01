export default class ParkedCar {
    code: string;
    plate: string;
    enterDate: Date;
    leaveDate: Date;

    constructor(code: string, plate: string, enterDate: Date, leaveDate: Date) {
        if (!/[A-Z]{3}-[0-9]{4}/.test(plate)) throw new Error('Invalid plate');
        this.code = code;
        this.plate = plate;
        this.enterDate = enterDate;
        this.leaveDate = leaveDate;
    }
}