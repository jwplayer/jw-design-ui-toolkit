# JW Design – Web UI Toolkit

This repository contains a single source of truth for global styles, icons and components used across JW Player sites. It's maintained here and included in other projects as a [git submodule](https://git-scm.com/docs/git-submodule).

## Getting Started

### Installing
We recommend that ui-toolkit lives at the root of your project. However, some projects like those using `create-react-app` require ui-toolkit to live within the `src` directory. This may vary by project.

Navigate to the appropriate directory and run the following command:
```
git submodule add git@github.com:jwplayer/jw-design-ui-toolkit.git
```
You should now see a folder called **_jw-design-ui-toolkit_** in your file structure. Reference the files like any other directory in your project.

### Updating
To be sure you're using the most recent version of ui-toolkit, it's a best practice to pull down changes regularly. To do this, run:
```
git submodule update --remote --merge
```
### Removing
Adding ui-toolkit may throw an error if an old instance of it already exists.  To remove outdated/unwanted traces of UI-toolkit, run:
```
git submodule deinit -f -- jw-design-ui-toolkit
rm -rf .git/modules/jw-design-ui-toolkit
git rm -rf jw-design-ui-toolkit
```

## How to Reference UI-Toolkit
### Styles
Styles can be included in two ways:

#### 1. Pull LESS into Build Process
If you're using LESS with Webpack, you'll need to include UI-toolkit styles in your build in order to reference variables properly. To do this, import ui-toolkit before your other LESS files as follows:
```
@import 'path_to_ui_toolkit/styles/build.less';
@import 'path_to_your_other_styles/main.less';
```
**- or -**
#### 2. Include Pre-Minified CSS Stylesheet
You can also include plain CSS the old-fashioned way by referencing all minified styles in `build.min.css`. Reference the standalone stylesheet in the document `<head>` as follows:
```
<link rel="stylesheet" type="text/css" href="path_to_ui_toolkit/styles/build.min.css">
```

### Icons
The icons folder contains two SVG sprites, `icons-player` and `icons-dashboard`, that can be easily referenced and customized with CSS.  

#### Usage
Simply create an svg element with a class of `jw-icon` in your HTML:
```
<svg class="jw-icon">
  <use href="/path_to_ui_toolkit/icons/sprite_name.svg#icon_name"></use>
</svg>
```

* `path_to_ui_toolkit`: the relative path to where ui-toolkit is included in your project
* `sprite_name`: the name of the sprite (_icons-dashboard_ or _icons-player_)
* `icon_name`: is the icon name, which will display the corresponding icon (all names can be found in the icons folder or in the table in preview-mode)


#### Sizing & Colors
UI icons by default are black, 18px and occupy a square artboard. Add one of the following classes to specify an alternate size:

|    Class    | Size |
| ----------- | ---- |
| jw-icon-xs  | 8px |
| jw-icon-sm  | 16px |
| jw-icon-med | 24px |
| jw-icon-lg  | 32px |

Append the class to the svg itself:
```
<svg class="jw-icon jw-icon-med">
  <use href="/path_to_ui_toolkit/icons/sprite_name.svg#icon_name"></use>
</svg>
```

You can override an icon's color or size with CSS:
```
.jw-icon {
    fill: #7bb4e5;
    width: 10px;
    height: 10px;
}
```

### Components
Each folder within `components` contains an agnostic HTML version, a version with Jekyll logic built in, and a React-ready JSX version.

#### React / JSX:
JSX components contain their own functionality. Import them as follows:

```
import SiteHeader from 'path_to_ui_toolkit/components/site-header';
```

`Site Header` and  `Site Footer` have dynamic titles & styles and should be customized by passing `site` via props, which must equal one of the following:
- developer
- support
- company
- dashboard

For example:
```
<SiteHeader site="support" />
<SiteFooter site="developer" />
```

`Secondary Header` should be passed `selected` props to determine which menu item should be shown by default. Props must equal one of the following:
- jwplayer
- jwplatform
- android
- ios
- devtools
- releasenotes

For example:
```
<SecondaryHeader selected="devtools" />
```

#### Jekyll & Grunt
Simply add a step to your `grunt-copy` task to pull your components into your `_includes`. The object should look something like this:
```
{
  cwd: 'jw-design-ui-toolkit/components',
  src: '**/*.html',
  dest: 'tmp/path/to/html/files/_includes',
  expand: true,
  flatten: true
}
```
**Note:** You'll also need to reference the `components.js` file in order for the dropdown menu functionality to work.

## Contributing to UI-Toolkit Source Code

### Running Locally
To run this project on your machine:
```
npm install
grunt
```
This will automatically watch and update the CSS + icon sprites as you develop.

**Note:** If you're making changes to `Site Header`, `Secondary Header` or `Site Footer`, be sure to update both HTML and JSX versions.

#### Adding a New Stylesheet
1. Add your LESS stylesheet to the `styles` folder
2. Import it in the `build.less` master file as follows: `@import 'path/to/your/file';`

#### Adding a New Icon
1. Determine if your new icon belongs to the player or dashboard and add the SVG to the appropriate folder
2. Grunt will auto-generate a new sprite with all icons

#### Component Preview Mode
To view updates to shared components as you develop, see the README.md in the `preview-mode` section of this project.
