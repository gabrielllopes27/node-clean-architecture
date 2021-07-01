import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";
import database from "../database/database";

export default class ParKingLotRepositorySQL implements ParkingLotRepository {

    async getParkingLot(code: string): Promise<ParkingLot> {
        const parkingLotData = await database.oneOrNone("select *, (select count(*) example.parked_car pc where pc.code = pl.code)::int as occupied_spaces from example.parking_lot pl where pl.code = $1", [code]);
        return ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_hour, parkingLotData.close_hour, parkingLotData.occupied_spaces);
        //throw new Error("Method not implemented.");
    }
    async saveParkedCar(code: string, plate: string, enterDate: Date, leaveDate: Date): Promise<void> {
        await database.none("insert into example.parkerd_car (code, plate, enterDate, leaveDate) values ($1, $2, $3, $4)", [code, plate, enterDate, leaveDate]);
        //throw new Error("Method not implemented.");
    }
}