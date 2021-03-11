import { AbstractCommand } from "./AbstractCommand.ts";

export class CommandHistory {
    private stack: AbstractCommand[] = [];

    public push(cmd: AbstractCommand) {
        this.stack.push(cmd);
    }

    public pop() {
        return this.stack.pop();
    }
}