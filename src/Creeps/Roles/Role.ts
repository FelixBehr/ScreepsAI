import {MoveBehaviour} from "../Behaviours/MoveBehaviour";
import {DyingBehaviour} from "../Behaviours/DyingBehaviour";
import {EnergyCollectorBehaviour} from "../Behaviours/EnergyCollector";
export abstract class Role {
    protected moveBehaviour: MoveBehaviour;
    protected energyCollectorBehaviour: EnergyCollectorBehaviour;
    protected creep: Creep;

    constructor(creep: Creep) {
        this.creep = creep;
        this.moveBehaviour = new MoveBehaviour(creep);
        this.energyCollectorBehaviour = new EnergyCollectorBehaviour(creep, this.moveBehaviour);
        (new DyingBehaviour(creep)).checkDying();
    }

    public abstract executeRole(): void;
}