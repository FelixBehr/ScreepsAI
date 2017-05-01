import {MoveBehaviour} from "./MoveBehaviour";
export class EnergyCollectorBehaviour {
    private creep: Creep;
    private moveBehaviour: MoveBehaviour;

    constructor(creep: Creep, moveBehaviour: MoveBehaviour) {
        this.creep = creep;
        this.moveBehaviour = moveBehaviour;
    }

    public collectEnergy() {
        const container = this.creep.pos.findClosestByPath<StructureContainer>(FIND_STRUCTURES, {
            filter: (structure: StructureContainer) => {
                return structure.structureType === STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] > 0;
            },
        });
        const canWithdraw = this.creep.withdraw(container, RESOURCE_ENERGY);
        if (canWithdraw === ERR_NOT_IN_RANGE) {
            this.moveBehaviour.moveToLocation(container);
        }
    }
}
