import {Role} from "./Role";
export class RepairerRole extends Role {
    public executeRole() {
        if (this.creep.carry.energy === 0) {
            this.creep.memory.working = false;
        }
        if (this.creep.carry.energy === this.creep.carryCapacity) {
            this.creep.memory.working = true;
        }
        if (this.creep.memory.working === true) {
            let needsRepair = this.creep.room.find<Structure>(FIND_STRUCTURES, {
                filter: (structure: Structure) => structure.hits < structure.hitsMax,
            });
            needsRepair = _.sortByOrder(needsRepair, "hits", true);
            if (needsRepair.length === 0) {
                return;
            }
            let canBuild = this.creep.repair(needsRepair[0]);
            if (canBuild === ERR_NOT_IN_RANGE) {
                this.moveBehaviour.moveToLocation(needsRepair[0]);
            }
        }
        if (this.creep.memory.working === false) {
            this.energyCollectorBehaviour.collectEnergy();
        }
    }
}