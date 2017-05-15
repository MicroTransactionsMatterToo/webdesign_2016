/**
 * Created by ennis on 4/04/17.
 */
import { Component } from '@angular/core';
import {componentFactoryName} from "@angular/compiler";

@Component({
    selector: 'app-nav',
    templateUrl: './navbarView.html',
    styleUrls: ['assets/css/navbar.css']
})
export class Navbar {
    public currentSelection: Number;
    public name = 'Navigation'
}


@Component({
    selector: 'app-nav__item',
    templateUrl: './navbarItem.html'
})
export class NavbarItem {
    public items: Array<NavbarItemEntry>;
    public currentlySelected: boolean;
}

@Component({
    selector: 'app-nav__item--entry',
    templateUrl: './navbarItemEntry.html'
})
export class NavbarItemEntry {
    public textContent: string;
    public linksTo: string;
    public enabled: boolean;


}