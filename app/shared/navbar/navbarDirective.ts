/**
 * Created by ennis on 4/04/17.
 */
import { Component } from '@angular/core';
import {componentFactoryName} from "@angular/compiler";

@Component({
    selector: 'app-nav',
    templateUrl: 'navbarView.html'
})
export class Navbar {
    currentSelection: Number;

    name = 'Navigation'
}


@Component({
    selector: 'app-nav__item'
})
export class NavbarItem {

}

@Component({
    selector: 'app-nave__item--entry'
})
export class NavbarItemEntry {
    hasSubItems: boolean;
    subItems: Array<NavbarItem>;

}