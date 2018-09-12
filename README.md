# JW Design System (Hook)

This repository contains a single source of truth for global styles and components used across JW Player sites & products. It's maintained here and included in other projects as a [git submodule](https://git-scm.com/docs/git-submodule).

## Using Hook in Your Project:

### Installing the Submodule
Navigate to the root of your project and run the following command:
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

### Including Styles
Hook styles can be included in two ways:

##### 1. Pull LESS into Build Process
To include global LESS (to be compiled & minified alongside your own), import it into your own LESS file as follows:
```
@import 'path/to/jw-design-system/styles/build.less'
```
-or-
##### 2. Include Pre-Minified CSS Stylesheet
This project contains a Grunt file that builds all LESS into a single, minified CSS file called `hook.min.css`. Reference the standalone stylesheet in the document head as follows:
```
<link rel="stylesheet" type="text/css" href="./jw-design-system/styles/hook.min.css">
```

## Updating Hook Styles & Components
To update code within Hook, navigate to the root of this project and run:
```
npm install
grunt
```
This will watch all LESS for changes as you develop and update the minified CSS file.

### Preview Mode
Here you can preview any UI changes made to the global components. Preview mode will watch everything in the `components` and `styles` folders and rebuild as you make changes, but it **_does not hot reload_** the browser and will require a page refresh.

#### Running Preview:
Navigate to the `preview` directory and run:
```
npm install
```
Now run the following two commands simultaneously to run a server at [localhost:4000](//localhost:4000/):
```
grunt watch
grunt server
```
#### Adding Components to Preview:
Preview mode contains a JSON file that pulls from each component. If you add a new item to the `components` folder, add its title and file name in `src/_data/components.json` to view it in the preview context.
