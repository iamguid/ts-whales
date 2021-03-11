import { AbstractCommand } from './AbstractCommand.ts';

export class MoveRightCommand extends AbstractCommand {
    execute() {
        this.save();
        this.game.player.posX += 1;
        return true
    }
}