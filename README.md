# JW Design System (Hook)

This repository contains a single source of truth for global styles and components used across JW Player sites & products. It's maintained here and included in other projects as a [git submodule](https://git-scm.com/docs/git-submodule).

## Including Hook in Your Project

### Installing the Submodule
We recommend that Hook lives at the root of your project. However, some projects like those using `create-react-app` require Hook to live within the `/src` directory. This may vary by project.

Navigate to the appropriate directory and run the following command:
```
git submodule add git@github.com:jwplayer/jw-design-system.git
```
You should now see a folder called **_jw-design-system_** in your file structure. Reference the files like any other directory in your project.

**Note:** This command may throw an error if the submodule already exists. If you encounter this error, run the following commands to remove old instances of the submodule:
```
git submodule deinit -f -- jw-design-system
rm -rf .git/modules/jw-design-system
git rm -rf jw-design-system
```
Then add the submodule as documented above.

### Updating the Submodule
Because **_jw-design-system_** is subject to new updates, it's a best practice to update your project's version of the submodule often. To ensure you're using the most recent version, run:
```
git submodule update --remote --merge
```

## How to Reference Hook
### LESS/CSS
Hook styles can be included in two ways:

##### 1. Pull LESS into Build Process
If you're using LESS with Webpack, you'll need to include Hook styles in your build in order to reference variables properly. To do this, import Hook before your other LESS files as follows:
```
@import 'path/to/jw-design-system/styles/hook.less';
@import 'path/to/your/other/styles/main.less';
```
-or-
##### 2. Include Pre-Minified CSS Stylesheet
You can also include plain CSS the old-fashioned way by referencing all minified styles in `hook.min.css`. Reference the standalone stylesheet in the document `<head>` as follows:
```
<link rel="stylesheet" type="text/css" href="./jw-design-system/styles/hook.min.css">
```

### Icons
Hook comes with two SVG sprites that contain all of the icons used across both the dashboard and the player. Step-by-step instructions coming soon.


### Components
Each folder within `/components` contains an agnostic HTML version, a version with Jekyll logic built in, and a React-ready JSX version.

##### React / JSX:
JSX components contain their own functionality. Import them as follows:

```
import SiteHeader from 'path/to/jw-design-system/components/site-header';
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

`Secondary Site Header` should be passed `selected` props to determine which menu item should be shown by default. Props must equal one of the following:
- jwplayer
- jwplatform
- android
- ios
- devtools
- releasenotes

For example:
```
<SiteSecondaryHeader selected="devtools" />
```

##### Jekyll & Grunt
Simply add a step to your `grunt-copy` task to pull your components into your `_includes`. The object should look something like this:
```
{
  cwd: 'jw-design-system/components',
  src: '**/*.html',
  dest: 'tmp/path/to/html/files/_includes',
  expand: true,
  flatten: true
}
```
**Note:** You'll also need to reference the `components.js` file in order for the menus and functionality to work.

## Contributing to Hook Source Code

### Running Locally
To run this project on your machine:
```
npm install
grunt
```
This will automatically watch and update the CSS + icon sprites as you develop.

**Note:** If you're making changes to `Site Header`, `Site Secondary Header` or `Site Footer`, be sure to update both HTML and JSX versions.

#### Adding a New Stylesheet
1. Add your LESS stylesheet to the `styles` folder
2. Import it in the `hook.less` master file as follows: `@import 'path/to/your/file';`

#### Adding New Icons
1. Determine if your new icon belongs to the player or dashboard/sites and add the SVG to the appropriate folder
2. That's it! Grunt will automatically add your new icon to the appropriate sprite

#### Using Preview Mode
Here you can preview any UI changes made to the global components. Preview mode will watch everything in the `components` and `styles` folders and rebuild as you make changes, but it **_does not hot reload_** the browser and will require a page refresh.

##### Running Preview
Navigate to the `preview` directory and run:
```
npm install
```
Now run the following two commands simultaneously to run a server at [localhost:4000](//localhost:4000/):
```
grunt watch
grunt server
```

##### Adding Components to Preview
Preview mode contains a JSON file that pulls from each component. If you add a new item to the `components` folder, add its title and file name in `src/_data/components.json` to view it in the preview context.
