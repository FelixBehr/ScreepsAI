import {Role} from "./Role";
import {TravelBehaviour} from "../Behaviours/TravelBehaviour";
export abstract class RemoteRole extends Role {
    protected travelBehaviour: TravelBehaviour;

    constructor(creep: Creep) {
        super(creep);
        this.travelBehaviour = new TravelBehaviour(creep, this.moveBehaviour);
    }
}
