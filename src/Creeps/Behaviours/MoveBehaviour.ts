export class MoveBehaviour {
    private creep: Creep;
    private fillStyle: string;

    constructor(creep: Creep, fillStyle = "#fff") {
        this.creep = creep;
        this.fillStyle = fillStyle;
    }

    public moveToLocation(object: any): void {
        this.creep.moveTo(object, {
            reusePath: 30,
            visualizePathStyle: {
                fill: "transparent",
                lineStyle: "dashed",
                opacity: .1,
                stroke: this.fillStyle,
                strokeWidth: .15,
            },
        });
    }
}
