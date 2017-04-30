import {HarvesterRole} from "../Creeps/Roles/HarvesterRole";
import {BuilderRole} from "../Creeps/Roles/BuilderRole";
import {UpgraderRole} from "../Creeps/Roles/UpgraderRole";
import {HaulerRole} from "../Creeps/Roles/HaulerRole";

export class RoleExecutor {
    static executeRole(creep: Creep) {
        if(creep.memory.role === 'Harvester'){
            new HarvesterRole(creep).executeRole();
        }
        else if(creep.memory.role === 'Hauler'){
            new HaulerRole(creep).executeRole();
        }
        else if(creep.memory.role === 'Builder'){
            new BuilderRole(creep).executeRole();
        }
        else if(creep.memory.role === 'Upgrader'){
            new UpgraderRole(creep).executeRole();
        }
    }
}