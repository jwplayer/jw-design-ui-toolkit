# JW Player Sites Commons

This repository contains HTML and LESS/CSS that are used globally across JW Player sites. This helps us maintain design consistency by pulling from a single source.

## Add the Submodule
Navigate to the root of your project and run the following command:
```
git submodule add git@github.com:jwplayer/jw-sites-commons.git
```

You should now see a folder called *jw-sites-commons* within your project. You can now reference these files like you would any other file in your project.


## Update the Submodule
If the commons code has been changed, you'll need to update the commons submodule in each project that contains it. This manual step ensures that none of our varied builds will break when a global update is pushed.

From the root of your project, run:
```
git submodule update --remote --merge
```

You should now have the most updated version of the commons repo within your project.


## Reference the Submodule

### Including CSS/LESS
For styles from a single component, import the file in your main LESS file via a relative path as you normally would:

```
@import 'path/to/jw-sites-commons/components/site-header/style.less'
```

Or to import all the global styles at once, use:
```
@import 'path/to/jw-sites-commons/components/components.less'
```


### Including HTML Content
You can refer to the HTML templates for the components with `{% include template.html %}`, where "template" is the filename of the template you want to pull in.


### Updating Grunt
If you're using Grunt, you'll need to port your HTML through the `temp` folder and into your compiled `dist` or `build` directory to avoid Grunt failures.

In the files array for your `copy` task, add the following object:

```
{
  cwd: 'jw-sites-commons/components',
  src: '**/*.html',
  dest: 'tmp/path/to/html/files/_includes',
  expand: true,
  flatten: true
}
```

More detailed steps can be found [here](https://docs.google.com/document/d/1FqhNp7H6_kE5buhEAPISssWEyQqqyzQItERsSmwOPzM/).
