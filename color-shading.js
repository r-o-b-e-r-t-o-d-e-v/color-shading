const tinycolor = require("tinycolor2");

function generateColorShade(baseColor, variationFactor) {
    const color = tinycolor(baseColor);
    const shadedValues = []

    for (let i = 1; i <= 4; i++) {
        const lighterColor = color.clone().lighten(variationFactor * (5 - i));
        shadedValues.push(lighterColor.toHexString())
    }

    shadedValues.push(color.toHexString())

    for (let i = 1; i <= 4; i++) {
        const darkerColor = color.clone().darken(variationFactor * i);
        shadedValues.push(darkerColor.toHexString())
    }

    return shadedValues;
}

module.exports = generateColorShade;
