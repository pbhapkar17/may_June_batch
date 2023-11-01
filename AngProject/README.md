# AngProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


data transmission technique:
1.services : if want to travell data between components(having no relation between each , if components are not live )
2.parent to child :if components having relation between them and both are live 
3.child to parent :if components having relation between them and both are live 
4.subjects:  if want to travel data between components(having no relation between each , if components are  live )
5. viewChild :if want to share data between components who are live and dont have relation between them .

2.Parent to child data transmission:
parent compo
child compo
parent >> add selector of child component
p>>>c
p>>made input in parent 
c>> @input() propertyName:any 