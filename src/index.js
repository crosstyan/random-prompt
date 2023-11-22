import randomPrompt from "./prompt.js"

const args = process.argv.slice(2)
const truthy = (s) => {
  return s === "true" || s === "1" || s === "yes" || s === "y" || s === "t" || s === "on"
}

console.log(randomPrompt(args.length > 0 && truthy(args[0])));
