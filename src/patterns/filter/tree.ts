export enum ComparisonOperator {
    EQUAL,
    NOT_EQUAL
}

export enum LogicalOperator {
    AND,
    OR
}

export enum FunctionType {
    STRING_CONTAINS,
    STRING_STARTS_WITH
}

export class AbstractNode {}

export class BinaryExprNode extends AbstractNode {
    public readonly leftOperand: AbstractNode;
    public readonly rightOperand: AbstractNode;
    public readonly operator: ComparisonOperator;

    constructor(leftOperand: AbstractNode, rightOperand: AbstractNode, operator: ComparisonOperator) {
        super();
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
        this.operator = operator;
    }
}

export class FunctionExprNode extends AbstractNode {
    public readonly fn: FunctionType;
    public readonly args: AbstractNode[];

    constructor(fn: FunctionType, ...args: AbstractNode[]) {
        super();
        this.fn = fn;
        this.args = args;
    }
}

export class GroupExprNode extends AbstractNode {
    public readonly operands: AbstractNode[];
    public readonly operator: LogicalOperator;

    constructor(operands: AbstractNode[], operator: LogicalOperator) {
        super();
        this.operands = operands;
        this.operator = operator;
    }
}

export class AbstractParamNode extends AbstractNode {}

export class StringParameterNode extends AbstractNode {}
export class NumberParameterNode extends AbstractNode {}
export class EnumParameterNode extends AbstractNode {}
