import { AbstractCommand } from './AbstractCommand.ts';

export class MoveBottomCommand extends AbstractCommand {
    execute() {
        this.save();
        this.game.player.posY -= 1;
        return true
    }
}