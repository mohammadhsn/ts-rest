export class Email {
    readonly value: string;
    constructor(value: string) {
        const pattern = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
        if (!pattern.test(value)) {
            throw new Error(`Invalid email address ${value}`);
        }

        this.value = value;
    }
}
