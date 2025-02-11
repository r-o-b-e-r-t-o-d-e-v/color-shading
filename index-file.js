const fs = require('fs');
const copyToClipboard = require('./copy-clipboard-utils');
const generateColorShade = require('./color-shading');

const argv = process.argv.slice(2);

let variationFactor = 3.85;

let jsonFile = null;

argv.forEach((arg) => {
    const [argName, argValue] = arg.split("=")

    if (argName === '--jsonFile') {
        jsonFile = argValue;
    }
    if (argName === '--variationFactor') {
        variationFactor = parseFloat(argValue);
    }
});

if (!jsonFile) {
    console.error("Error: 'jsonFile' is a required argument. Example on how to run the command: node index-file.js --jsonFile='colors.json'");
    process.exit(1);
}

fs.readFile(jsonFile, 'utf-8', (err, fileData) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    const allResults = []

    JSON.parse(fileData).forEach(({baseColor, baseColorName}) => {

        console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
        console.log("🌀 Generating shading colors based on this configuration:");
        console.log("   → Base Color:", baseColor);
        console.log("   → Base Color Name:", baseColorName);
        console.log("   → Variation Factor:", variationFactor);
        console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

        const result = generateColorShade(baseColor, variationFactor)
            .map((value, i) =>
                `--color-${baseColorName}-${i * 100 + 100}: ${value};`)
            .join('\n');

        console.log(result);
        console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
        console.log("");

        allResults.push(result);
        allResults.push('\n\n');
    });

    copyToClipboard(allResults.join(''));
});
