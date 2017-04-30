import {MoveBehaviour} from "../Behaviours/MoveBehaviour";
import {DyingBehaviour} from "../Behaviours/DyingBehaviour";
export abstract class Role {
    protected moveBehaviour: MoveBehaviour;
    protected creep: Creep;

    constructor(creep: Creep) {
        this.creep = creep;
        this.moveBehaviour = new MoveBehaviour(creep);
        (new DyingBehaviour(creep)).checkDying();
    }

    public abstract executeRole(): void;
}