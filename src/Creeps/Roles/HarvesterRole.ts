import {Role} from "./Role";
export class HarvesterRole extends Role {
    public executeRole() {
        const source = this.creep.pos.findClosestByPath<Source>(FIND_SOURCES_ACTIVE);
        const canHarvest = this.creep.harvest(source);
        if (canHarvest === ERR_NOT_IN_RANGE) {
            this.moveBehaviour.moveToLocation(source);
        }
    }
}
