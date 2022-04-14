import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({ // 3 Angular correlates the bootstrapped component with what is defined here
    selector:   'app-root',
    template:   `<h1>Hello World</h1><p>A word from Dave...</p>`
})

class HelloWorldComponent {
    
}

@NgModule({
    bootstrap:  [HelloWorldComponent], // 2 Angular finds a module with a bootstrapped component
    declarations: [
        // List of all components to be added
        HelloWorldComponent
    ],
    imports:    [
        BrowserModule
    ]
})

class AppModule {
    
}

platformBrowserDynamic().bootstrapModule(AppModule);  // 1 Angular begins here - looking for a module