import { Expression, GroupAndExpression, GroupOrExpression, StringFilterExpression, NumberFilterExpression } from "./expression.ts";
import { StringParameter, NumberParameter } from "./parameter.ts";
import { StringValue, NumberValue } from "./value.ts";
import { StringOperator, NumberOperator } from "./operator.ts";

export class Filter {
    public static groupAnd(...expr: Expression[]) {
        return new GroupAndExpression(...expr);
    }
    
    public static groupOr(...expr: Expression[]) {
        return new GroupOrExpression(...expr);
    }

    public static stringFilter(param: StringParameter, value: StringValue, operator: StringOperator) {
        return new StringFilterExpression(param, value, operator);
    }
    
    public static numberFilter(param: NumberParameter, value: NumberValue, operator: NumberOperator) {
        return new NumberFilterExpression(param, value, operator);
    }
}