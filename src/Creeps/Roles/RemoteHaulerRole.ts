import {RemoteRole} from "./RemoteRole";
export class RemoteHaulerRole extends RemoteRole {
    public executeRole() {
        if (this.creep.carry.energy === 0) {
            this.creep.memory.working = false;
        }
        if (this.creep.carry.energy === this.creep.carryCapacity) {
            this.creep.memory.working = true;
        }

        if (this.creep.memory.working === false) {
            if (this.creep.room.name !== this.creep.memory.room) {
                this.travelBehaviour.travelToRoom(this.creep.memory.room);
                return;
            }
            const droppedEnergy = this.creep.pos.findClosestByPath<Resource>(FIND_DROPPED_ENERGY);
            const canPickup = this.creep.pickup(droppedEnergy);
            if (canPickup === ERR_NOT_IN_RANGE) {
                this.moveBehaviour.moveToLocation(droppedEnergy);
            }
        }
        if (this.creep.memory.working === true) {
            if (this.creep.room.name !== this.creep.memory.home) {
                this.travelBehaviour.travelToRoom(this.creep.memory.home);
                return;
            }
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
            if (canTransfer === ERR_FULL || ERR_INVALID_TARGET) {
                this.creep.moveTo(19, 24);
                if (this.creep.pos.x === 19 && this.creep.pos.y === 24) {
                    this.creep.drop(RESOURCE_ENERGY);
                }
            }
        }
    }
}
