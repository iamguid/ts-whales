import { 
    ComparisonOperator,
    LogicalOperator,
    FunctionType,
    AbstractNode,
    AbstractParamNode,
    BinaryExprNode,
    FunctionExprNode,
    GroupExprNode,
    StringParameterNode,
    NumberParameterNode,
    EnumParameterNode
} from "./tree.ts";

export class CelGenerator {
    public visitNode = (node: AbstractNode): string => {
        if (node instanceof BinaryExprNode) {
            return this.visitBinaryExprNode(node)
        } else if (node instanceof FunctionExprNode) {
            return this.visitFunctionExprNode(node)
        } else if (node instanceof GroupExprNode) {
            return this.visitGroupExprNode(node)
        } else if (node instanceof StringParameterNode) {
            return this.visitStringParameterNode(node)
        } else if (node instanceof NumberParameterNode) {
            return this.visitNumberParameterNode(node)
        } else if (node instanceof EnumParameterNode) {
            return this.visitEnumParameterNode(node)
        } else {
            return node.toString();
        }
    }

    public visitBinaryExprNode = (node: BinaryExprNode): string => {
        const leftOperand = this.visitNode(node.leftOperand);
        const rightOperand = this.visitNode(node.rightOperand);
        
        let opearator = '';

        switch (node.operator) {
            case ComparisonOperator.EQUAL:
                opearator = '=='
                break;
            case ComparisonOperator.NOT_EQUAL:
                opearator = '!='
                break;
        }

        return `${leftOperand} ${opearator} ${rightOperand}`
    }

    public visitFunctionExprNode = (node: FunctionExprNode): string => {
        switch (node.fn) {
            case FunctionType.STRING_CONTAINS: {
                const stringArg = this.visitNode(node.args[0]);
                const substrArg = this.visitNode(node.args[1]);
                return `${stringArg}.contains(${substrArg})`
            }
            case FunctionType.STRING_STARTS_WITH: {
                const stringArg = this.visitNode(node.args[0]);
                const substrArg = this.visitNode(node.args[1]);
                return `${stringArg}.startsWith(${substrArg})`
            }
        }
    }

    public visitGroupExprNode = (node: GroupExprNode): string => {
        let opearator = '';

        switch (node.operator) {
            case LogicalOperator.AND:
                opearator = '&&'
                break;
            case LogicalOperator.OR:
                opearator = '||'
                break;
        }

        return `(${node.operands.map(this.visitNode).join(opearator)})`;
    }

    public visitStringParameterNode = (node: StringParameterNode): string => {
        return '';
    }

    public visitNumberParameterNode = (node: NumberParameterNode): string => {
        return '';
    }

    public visitEnumParameterNode = (node: EnumParameterNode): string => {
        return '';
    }
}