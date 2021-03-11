import { AbstractCommand } from './AbstractCommand.ts';

export class MoveTopCommand extends AbstractCommand {
    execute() {
        this.save();
        this.game.player.posY += 1;
        return true
    }
}