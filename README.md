![hero-image](https://github.com/masa-sumimoto/figma-color-scale-z/blob/main/repository-assets/hero.png)

# About Figma Color Scale Z

A plugin that can generate color scales. Select one Text, Rectangle, or Ellipse node and run the plugin. You can get graded colors from the node fill color towards white, black, complementary colors etc. You can also get a color scale by selecting two specific nodes.

※ This is a Figma plugin that further enhances [the Adobe XD plugin](https://github.com/masa-sumimoto/adobe-xd-color-scale) created in 2020 and has been released for Figma.


## For User

Click the "Try it out" button on [the Figma Color Scale Z plugin page](https://www.figma.com/community/plugin/1266991314988750571/Color-Scale-Z). Afterward, the plugin will be invoked from the Figma app, so please click "Run" or "Save" to use it.

※ As a note, this plugin requires selecting one to two target elements for it to be functional.


## For Developer

- I created a plugin template based on [the official portal](https://www.figma.com/plugin-docs/plugin-quickstart-guide/).

- I am using Webpack for bundling TypeScript, based on the information from [the official documentation](https://www.figma.com/plugin-docs/libraries-and-bundling/). As a result, the npm script has been modified as follows:

```
"build": "webpack",
"watch": "npm run build -- --watch"
↓
"build": "tsc -p tsconfig.json",
"watch": "npm run build -- --watch",
```

## Updates

In the Figma Plugin portal, every time developers upload a new source, the version is incremented by 1. I are also using the versioning approach that follows this in this repository.

### Version 1

- Implementation of `To Black`, `To White`, `To Complementary`, `To Random` modes.
- Implementation of two-color blending mode.

### Version 2

- In the mode where you select one color, it is now possible to change the selected color while the plugin is active.

### Version 3

- While the plug-in is running, it is now possible to seamlessly switch between single node mode and two nodes mode.

### Version 4

- Changes assuming dynamic page loading