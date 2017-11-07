# AngularBootstrapSelect

An example project to demonstrate how bootstrap-select (https://github.com/silviomoreto/bootstrap-select) can be wrapped in a directive to use throughout your app in an 'Angular' way.

The idea is to create a reusable component that extends from a base class which wraps bootstrap-select. See [CityMultiselect](src/app/shared/bootstrap-select/examples/city-multiselect/) for an example of how this is done. As of now, there is nothing special about the CityMultiselect component. Further examples will be added to demonstrate how to use Object options, optgroups, as well as programatically alter the state of the bootstrap-select.

This has only been tested to work with Angular 4. Since bootstrap-select does not officially support Bootstrap4, I used a shim repo (https://github.com/heimrichhannot/bootstrap-select) that seems to work with Bootstrap4-beta2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
