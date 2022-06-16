# Reusable Components with Stencil

Components are meant to be resuable. However, React components cannot be used in Angular. Angular components cannot be used in Vue. The compiler Stencil.js allows the creation of web components that are framework/library agnostic. Web components are essentially just another HTML element. In this project, we will use Stencil to generate a simple web component that can be published to NPM and consume in any UI framework.

Stencil is also great for building entire apps. For that, use the [stencil-app-starter](https://github.com/ionic-team/stencil-app-starter) instead.

## Getting Started

```bash
git clone https://github.com/etuong/reusable-components.git stencil-demo
cd stencil-demo
git remote rm origin
```

and run the following to generate a new component:

```bash
npm install
npm run generate
```

To build the component for production, run:

```bash
npm run build
```

## Publish to NPM
Create an NPM account and then log in
```bash
npm login
```

and then publish
```bash
npm publish
```

## Using this component

### Script tag

- Put a script tag similar to this `<script type='module' src='https://unpkg.com/my-component@0.0.1/dist/my-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc
- See MyWebComponent.html for example

### Node Modules
- Run `npm install my-component --save`
- Put a script tag similar to this `<script type='module' src='node_modules/my-component/dist/my-component.esm.js'></script>` in the head of your index.html

### React
- Run `npm install my-component --save`
- Call `defineCustomElements(window)` from the index.js file
    ```
    import { applyPolyfills, defineCustomElements } from '<your-component-name>/loader';

    applyPolyfills().then(() => {
        defineCustomElements(window);
    });
    ```

### Angular
- Run `npm install my-component --save`
- Including the CUSTOM_ELEMENTS_SCHEMA in the module 
    ``` 
    import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

    @NgModule({
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    export class AppModule {}
    ```
- Define the custom elements
    ```
    import { defineCustomElements } from '<your-component-name>/loader';

    defineCustomElements(window);
    ```