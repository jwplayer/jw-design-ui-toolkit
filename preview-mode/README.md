# Component Preview Mode
Here you can preview any UI changes made to the global components. Preview mode will watch everything in the `components` and `styles` folders and rebuild as you make changes, but it **_does not hot reload_** the browser and will require a page refresh.

## Running Preview
Navigate to the `preview-mode` directory and run:
```
npm install
```
Now run the following two commands simultaneously to run a server at [localhost:4000](//localhost:4000/):
```
grunt watch
grunt server
```

## Adding Components to Preview Mode
Preview mode contains a JSON file that pulls from each component. If you add a new item to the `components` folder, add its title and file name in `src/_data/components.json` to view it in the preview context.
