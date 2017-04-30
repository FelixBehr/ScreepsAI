import {RemoteRole} from "./RemoteRole";
export class RemoteHarvesterRole extends RemoteRole {
    public executeRole() {
        if (this.creep.room.name === this.creep.memory.home) {
            this.travelBehaviour.travelToRoom(this.creep.memory.room);
        } else {
            this.creep.drop(RESOURCE_ENERGY);
            const source = Game.getObjectById<Source>(this.creep.memory.target);
            if (source === null) {
                return;
            }
            const canHarvest = this.creep.harvest(source);
            if (canHarvest === ERR_NOT_IN_RANGE) {
                this.moveBehaviour.moveToLocation(source);
            }
        }
    }
}
