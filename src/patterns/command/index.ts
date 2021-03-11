import { Game } from "./Game.ts";
import { MoveBottomCommand } from "./MoveBottomCommand.ts";
import { MoveLeftCommand } from "./MoveLeftCommand.ts";
import { MoveRightCommand } from "./MoveRightCommand.ts";
import { MoveTopCommand } from "./MoveTopCommand.ts";
import { UndoCommand } from "./UndoCommand.ts";

const game = new Game();

const moveLeftCmd = () => (game.execCommand(new MoveLeftCommand(game)));
const moveRightCmd = () => (game.execCommand(new MoveRightCommand(game)));
const moveTopCmd = () => (game.execCommand(new MoveTopCommand(game)));
const moveBottomCmd = () => (game.execCommand(new MoveBottomCommand(game)));
const undoCmd = () => (game.execCommand(new UndoCommand(game)));

moveLeftCmd();
moveTopCmd();
moveBottomCmd();
moveBottomCmd();

console.log(`Before undo ${game.player.name} has pos X:${game.player.posX} Y:${game.player.posY}`);

moveRightCmd();
moveRightCmd();
moveRightCmd();
undoCmd();
undoCmd();
undoCmd();

console.log(`After undo ${game.player.name} has pos X:${game.player.posX} Y:${game.player.posY}`);