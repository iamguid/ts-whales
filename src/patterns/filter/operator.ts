export abstract class AbstractOperator {
    public name: string;

    protected constructor(name: string) {
        this.name = name;
    }
}

export class StringOperator extends AbstractOperator {
    constructor(name: string) {
        super(name);
    }
}

export class NumberOperator extends AbstractOperator {
    constructor(name: string) {
        super(name);
    }
}