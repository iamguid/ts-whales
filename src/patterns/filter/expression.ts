import { AbstractParameter, NumberParameter, StringParameter } from "./parameter.ts"
import { AbstractValue, NumberValue, StringValue } from "./value.ts"
import { AbstractOperator, NumberOperator, StringOperator } from "./operator.ts";

export type Expression = AbstractFilterExpression<any> | GroupAndExpression | GroupOrExpression

export abstract class AbstractFilterExpression<TValue> {
    public leftOperand: AbstractParameter;
    public rightOperand: AbstractValue<TValue>;
    public operator: AbstractOperator;

    protected constructor(leftOperand: AbstractParameter, rightOperand: AbstractValue<TValue>, operator: AbstractOperator) {
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
        this.operator = operator;
    }

    abstract toString(): string;
}

export class StringFilterExpression extends AbstractFilterExpression<string> {
    constructor(leftOperand: StringParameter, rightOperand: StringValue, operator: StringOperator) {
        super(leftOperand, rightOperand, operator)
    }

    public toString() {
        return `${this.leftOperand.name} ${this.operator.name} ${this.rightOperand.value.toString()}`;
    }
}

export class NumberFilterExpression extends AbstractFilterExpression<number> {
    constructor(leftOperand: NumberParameter, rightOperand: NumberValue, operator: NumberOperator) {
        super(leftOperand, rightOperand, operator)
    }
    
    public toString() {
        return `${this.leftOperand.name} ${this.operator.name} ${this.rightOperand.value.toString()}`;
    }
}

export class GroupAndExpression {
    public expressions: Expression[];

    constructor(...expr: Expression[]) {
        this.expressions = expr;
    }

    public toString(): string {
        return '(' + this.expressions.map(expr => expr.toString()).join(" AND ") + ')'
    }
}

export class GroupOrExpression {
    public expressions: Expression[];

    constructor(...expr: Expression[]) {
        this.expressions = expr;
    }

    public toString(): string {
        return '(' + this.expressions.map(expr => expr.toString()).join(" OR ") + ')'
    }
}
