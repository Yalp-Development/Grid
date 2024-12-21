# Rocket Grid
A TypeScript library to allow for easy interaction with the Roblox Grid Service and Thumbnail Relay.

I took inspiration from [this project](https://github.com/megahdrive/rccclient-node) but I have refactored a lot of the code and added improvements

## Installation
```
npm i https://github.com/Yalp-Development/Grid.git
```

## Usage
```js
import { GridService, Job, ScriptExecution } from "rocket-grid"

// Connecting

const client = new GridService("127.0.0.1", 64989)

console.log(await client.HelloWorld())

// Running a simple script

const job = new Job("GridTest")

const script = new ScriptExecution("HelloWorld", "print(\"hello world\")")

await client.OpenJobEx(job, script)
```