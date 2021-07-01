import Express from "express";
import ExpressAdapter from "../../adapter/ExpressAdapter";
import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkingLotController from "../../controller/ParkingLotController";
import GetParkingLot from "../../core/usecase/GetParkingLot";
import ParkingLotRepositoryMemory from "../repository/ParkingLotRepositoryMemory";
import ParKingLotRepositorySQL from "../repository/ParkingLotRepositorySQL";
const app = new Express();

app.get("/parking-lots/:code", ExpressAdapter.create(ParkingLotController.getParkingLot));

app.listen(3000);