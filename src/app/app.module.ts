/**
 * Created by ennis on 15/05/17.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Navbar, NavbarItem, NavbarItemEntry} from "./shared/navbar/navbarDirective";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        Navbar,
        NavbarItemEntry,
        NavbarItem
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}