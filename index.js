const copyToClipboard = require('./copy-clipboard-utils');
const generateColorShade = require('./color-shading');

const argv = process.argv.slice(2);

let baseColor = null;
let baseColorName = null;
let variationFactor = 3.85;

argv.forEach((arg) => {
    const [argName, argValue] = arg.split("=")

    if (argName === '--baseColor') {
        baseColor = argValue;
    }
    if (argName === '--baseColorName') {
        baseColorName = argValue;
    }
    if (argName === '--variationFactor') {
        variationFactor = parseFloat(argValue);
    }
});

if (!baseColor || !baseColorName) {
    console.error("Error: 'baseColor' and 'baseColorName' are required arguments. Example on how to run the command: node index.js --baseColor='#434343' --baseColorName='black' --variationFactor=3.85");
    process.exit(1);
}

console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
console.log("🌀 Generating shading colors based on this configuration:");
console.log("   → Base Color:", baseColor);
console.log("   → Base Color Name:", baseColorName);
console.log("   → Variation Factor:", variationFactor);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const result = generateColorShade(baseColor, variationFactor)
    .map((value, i) =>
        `--color-brand-${baseColorName}-${i * 100 + 100}: ${value};`)
    .join('\n');

console.log(result);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
console.log("");

copyToClipboard(result)
