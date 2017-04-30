import {Role} from "./Role"
export class HaulerRole extends Role {
    public executeRole() {
        if (this.creep.carry.energy === 0) {
            this.creep.memory.working = false;
        }
        if (this.creep.carry.energy === this.creep.carryCapacity) {
            this.creep.memory.working = true;
        }

        if (this.creep.memory.working === false) {
            const droppedEnergy = this.creep.pos.findClosestByPath<Resource>(FIND_DROPPED_ENERGY);
            const canPickup = this.creep.pickup(droppedEnergy);
            if (canPickup === ERR_NOT_IN_RANGE) {
                this.moveBehaviour.moveToLocation(droppedEnergy);
            }
        }
        if (this.creep.memory.working === true) {
            let needsEnergy: Structure = this.creep.pos.findClosestByPath<Structure>(FIND_STRUCTURES, {
                filter: (structure: any) => {
                    return (
                            structure.structureType === STRUCTURE_SPAWN
                            || structure.structureType === STRUCTURE_EXTENSION
                        )
                        && structure.energy < structure.energyCapacity;
                },
            });
            let canTransfer = this.creep.transfer(needsEnergy, RESOURCE_ENERGY);
            if (canTransfer === ERR_NOT_IN_RANGE) {
                this.moveBehaviour.moveToLocation(needsEnergy);
            }
        }
    }
}
