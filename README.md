# Description

This is a simple tool to execute a script that generates a color shading based on a given base color.

Example:

Given this input:

```
baseColor: #434343
baseColorName: brand-black
```

It will generate these values:
```
--color-brand-black-100: #767676;
--color-brand-black-200: #696969;
--color-brand-black-300: #5c5c5c;
--color-brand-black-400: #505050;
--color-brand-black-500: #434343;
--color-brand-black-600: #363636;
--color-brand-black-700: #292929;
--color-brand-black-800: #1d1d1d;
--color-brand-black-900: #101010;
```

The output values will also be not only printed in the console but
also copied to clipboard to give more easiness using the tool. 

---

# Scripts

There are actually two scripts:

## index.js

Arguments:
- (Required) **baseColor**: The color that will be taken as the base (in hexadecimal format). Example: #434343
- (Required) **baseColorName**: The name that will have the color shading assign: --color-{baseColorName}-{shadeNumber}. Example: --color-brand-black-300, --color-brand-red-600
- (Optional) **variationFactor**: The amount (percentage) of difference between one shade from the previous or next. If
  not specified, the default value will be taken. Default value is 3.85.

You can run by `npm run shade` or `npm run shade-variation`. The only difference in 'shade-variation'
is that this one already has a value that overrides the default 'variationFactor'.

## index-file.js

Arguments:
- (Required) **jsonFile**: Specifies the path and file name for the json file that contains the color information that
  will be used as input to generate the shading.
- (Optional) **variationFactor**: The amount (percentage) of difference between one shade from the previous or next. If
  not specified, the default value will be taken. Default value is 3.85.

You can run by `npm run shade-json` or `npm run shade-json-variation`. The only difference in 'shade-variation'
is that this one already has a value that overrides the default 'variationFactor'.

---
