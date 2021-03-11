import { StringParameter, NumberParameter } from "./parameter.ts";
import { StringOperator, NumberOperator } from "./operator.ts";
import { StringValue, NumberValue } from "./value.ts";
import { Filter } from "./filter.ts";

const nameParameter = new StringParameter("name");
const countParameter = new NumberParameter("count")
const containsOperator = new StringOperator("contains");
const equalOperator = new NumberOperator("=");
const notEqualOperator = new NumberOperator("!=");
const lessOperator = new NumberOperator("<");
const lessOrEqualOperator = new NumberOperator("<=");
const moreOperator = new NumberOperator(">");
const moreOrEqualOperator = new NumberOperator(">=");

const expr1 = Filter.groupOr(
    Filter.stringFilter(nameParameter, new StringValue("test"), containsOperator),
    Filter.stringFilter(nameParameter, new StringValue("tset"), containsOperator)
)

const expr2 = Filter.groupAnd(
    Filter.numberFilter(countParameter, new NumberValue(10), lessOperator),
    Filter.numberFilter(countParameter, new NumberValue(5), moreOperator)
)

const expr3 = Filter.groupAnd(
    expr1,
    expr2
)

console.log(expr3.toString());