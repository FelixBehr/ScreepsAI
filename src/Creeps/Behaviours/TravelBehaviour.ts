
import {MoveBehaviour} from "./MoveBehaviour";
export class TravelBehaviour {
    private creep: Creep;
    private moveBehaviour: MoveBehaviour;

    constructor(creep: Creep, moveBehaviour: MoveBehaviour) {
        this.creep = creep;
        this.moveBehaviour = moveBehaviour;
    }

    public travelToRoom(roomName: string) {
        let exit = this.creep.room.findExitTo(roomName);
        this.moveBehaviour.moveToLocation(this.creep.pos.findClosestByRange<RoomPosition>(exit));
    }
}
