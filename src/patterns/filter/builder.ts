import { 
    AbstractNode,
    GroupExprNode,
    BinaryExprNode,
    NumberParameterNode,
    StringParameterNode,
    ComparisonOperator,
    LogicalOperator,
    FunctionExprNode,
    FunctionType
} from "./tree.ts";

class FilterBuilderGroup {
    public static and(...nodes: AbstractNode[]) {
        return new GroupExprNode(nodes, LogicalOperator.AND);
    }

    public static or(...nodes: AbstractNode[]) {
        return new GroupExprNode(nodes, LogicalOperator.OR);
    }
}

class FilterBuilderNumber {
    public static eq(parameter: NumberParameterNode, value: number) {
        return new BinaryExprNode(parameter, value, ComparisonOperator.EQUAL)
    }
}

class FilterBuilderString {
    public static eq(parameter: StringParameterNode, value: string) {
        return new BinaryExprNode(parameter, value, ComparisonOperator.EQUAL)
    }

    public static contains(parameter: StringParameterNode, value: string) {
        return new FunctionExprNode(FunctionType.STRING_CONTAINS, parameter, value)
    }
}

export class FilterBuilder {
    public static group = FilterBuilderGroup;
    public static number = FilterBuilderNumber;
    public static string = FilterBuilderString;

    private readonly root: AbstractNode;

    constructor(root: AbstractNode | FilterBuilder) {
        if (root instanceof FilterBuilder) {
            this.root = root.expression
        } else {
            this.root = root
        }
    }

    public get expression() {
        return this.root;
    }
}