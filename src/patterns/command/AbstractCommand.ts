import { Game } from "./Game.ts";
import { IGameState } from "./GameState.ts";

export abstract class AbstractCommand {
    protected game: Game;
    protected prevState: IGameState | null = null;
    
    constructor(game: Game) {
        this.game = game;
    }

    public save() {
        this.prevState = this.game.getState();
    }

    public undo() {
        if (!this.prevState) {
            throw new Error('Cannot undo. No prev state')
        }
        
        this.game.setState(this.prevState);
    }

    abstract execute(): boolean
}