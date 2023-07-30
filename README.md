# About Figma Color Scale Z

A plugin that can generate color scales. Select one Text, Rectangle, or Ellipse node and run the plugin. You can get graded colors from the node fill color towards white, black, complementary colors etc. You can also get a color scale by selecting two specific nodes.

※ This is a Figma plugin that further enhances [the Adobe XD plugin](https://github.com/masa-sumimoto/adobe-xd-color-scale) created in 2020 and has been released for Figma.



# For User

Click the "Try it out" button on [the Figma Color Scale Z plugin page](https://www.figma.com/community/plugin/1266991314988750571/Color-Scale-Z). Afterward, the plugin will be invoked from the Figma app, so please click "Run" or "Save" to use it.

※ As a note, this plugin requires selecting one to two target elements for it to be functional.


# For Developer

- I created a plugin template based on [the official portal](https://www.figma.com/plugin-docs/plugin-quickstart-guide/).

- I am using Webpack for bundling TypeScript, based on the information from [the official documentation](https://www.figma.com/plugin-docs/libraries-and-bundling/). As a result, the npm script has been modified as follows:

```
"build": "webpack",
"watch": "npm run build -- --watch"
↓
"build": "tsc -p tsconfig.json",
"watch": "npm run build -- --watch",

```

