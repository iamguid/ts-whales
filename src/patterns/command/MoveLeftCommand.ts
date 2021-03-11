import { AbstractCommand } from './AbstractCommand.ts';

export class MoveLeftCommand extends AbstractCommand {
    execute() {
        this.save();
        this.game.player.posX -= 1;
        return true
    }
}