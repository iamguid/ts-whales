export abstract class AbstractValue<TValue> {
    public value: TValue;

    protected constructor(value: TValue) {
        this.value = value;
    }
}

export class NumberValue extends AbstractValue<number> {
    constructor(value: number) {
        super(value);
    }
}

export class StringValue extends AbstractValue<string> {
    constructor(value: string) {
        super(value);
    }
}