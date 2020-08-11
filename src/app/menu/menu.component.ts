import { Component, OnInit } from "@angular/core";
import { Dish } from "../shared/dish";
import { DISHES } from '../shared/dishes';
import { Comment } from "../shared/comment";

@Component({
    selector: "app-menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.scss"],
})


export class MenuComponent implements OnInit {

    dishes: Dish[] = DISHES;

    selectedDish: Dish;
    selectedComment:Comment[];
    
    constructor() { }

    ngOnInit() { }
    onSelect(dish:Dish){
        this.selectedDish=dish;
        this.selectedComment=dish.comments;
    }
}
