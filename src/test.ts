import { GridService, Job, ScriptExecution } from "./index.js"

const client = new GridService("127.0.0.1", 64989)

console.log(await client.HelloWorld())

const job = new Job("GridTest")

const script = new ScriptExecution("HelloWorld", "print(\"hello world\")")

await client.OpenJobEx(job, script)