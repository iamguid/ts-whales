export interface IPlayer {
    name: string;
    posX: number;
    posY: number;
}

export class Player implements IPlayer {
    public name: string;
    public posX: number;
    public posY: number;

    constructor(name: string, posX: number, posY: number) {
        this.name = name;
        this.posX = posX;
        this.posY = posY;
    }

    public setState(state: IPlayer) {
        this.name = state.name;
        this.posX = state.posX;
        this.posY = state.posY;
    }

    public getState(): IPlayer {
        return {
            name: this.name,
            posX: this.posX,
            posY: this.posY
        }
    }
}