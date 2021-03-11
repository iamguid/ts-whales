export enum ParameterType {
    STRING,
    NUMBER
}

export abstract class AbstractParameter {
    public type: ParameterType;
    public name: string;

    constructor(type: ParameterType, name: string) {
        this.type = type;
        this.name = name;
    }
}

export class StringParameter extends AbstractParameter {
    constructor(name: string) {
        super(ParameterType.STRING, name)
    }
}

export class NumberParameter extends AbstractParameter {
    constructor(name: string) {
        super(ParameterType.NUMBER, name)
    }
}