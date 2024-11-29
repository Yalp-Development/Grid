class Script {
    readonly name: string;
    readonly script: string;
    readonly arguments: any[];

    constructor(name: string, script: string, args: any[] = []) {
        this.name = name;
        this.script = script;
        this.arguments = args;
    }
}

export default Script;
