import { GridService, Job, ScriptExecution, ThumbnailsRelay } from "./index.js"
import { ImageFormat, ThumbnailType } from "./modules/thumbnail/enums.js";

/* test grid service */
const client = new GridService("127.0.0.1", 64989)

console.log(await client.HelloWorld())

const job = new Job("GridTest")

const script = new ScriptExecution("HelloWorld", "print(\"hello world\")")

await client.OpenJobEx(job, script)

/* test thumb relay */
const thumbRelay = new ThumbnailsRelay("127.0.0.1", 64988)

console.log(
    await thumbRelay.RequestThumbnailGenerationEx(
        ThumbnailType.Place,
        ImageFormat.Png,
        800,
        800,
        "https://www.rocket.loc/asset?id=1818",
        "https://www.rocket.loc",
        1818
    )
)