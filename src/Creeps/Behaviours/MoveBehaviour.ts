export class MoveBehaviour {
    private creep: Creep;

    constructor(creep: Creep) {
        this.creep = creep;
    }

    public moveToLocation(object: any, fillStyle = "#fff"): void {
        this.creep.moveTo(object, {
            reusePath: 30,
            visualizePathStyle: {
                fill: "transparent",
                lineStyle: "dashed",
                opacity: .1,
                stroke: fillStyle,
                strokeWidth: .15,
            },
        });
    }

    public moveToCoordinates(x: number, y: number, fillStyle = "#fff"): void {
        this.creep.moveTo(x, y, {
            reusePath: 30,
            visualizePathStyle: {
                fill: "transparent",
                lineStyle: "dashed",
                opacity: .1,
                stroke: fillStyle,
                strokeWidth: .15,
            },
        });
    }
}
