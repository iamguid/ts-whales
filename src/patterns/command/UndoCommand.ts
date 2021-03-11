import { AbstractCommand } from './AbstractCommand.ts';

export class UndoCommand extends AbstractCommand {
    execute() {
        this.game.undoCommand();
        return false;
    }
}