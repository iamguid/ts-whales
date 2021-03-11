import { AbstractCommand } from "./AbstractCommand.ts";
import { CommandHistory } from "./CommandHistory.ts";
import { IGameState } from "./GameState.ts";
import { Player } from "./Player.ts";

export class Game {
    public player: Player = new Player("Player 1", 0, 0);
    public commandHistory: CommandHistory = new CommandHistory();

    public getState(): IGameState {
        return {
            player: this.player.getState()
        }
    }

    public setState(state: IGameState) {
        this.player.setState(state.player);
    }

    public execCommand(cmd: AbstractCommand) {
        if (cmd.execute()) {
            this.commandHistory.push(cmd);
        }
    }

    public undoCommand() {
        const cmd = this.commandHistory.pop();
        if (cmd != null) {
            cmd.undo()
        }
    }
}