import { Injectable } from "@angular/core";
import { Dish } from "../shared/dish";
import { Comment } from "../shared/comment";
import { DISHES } from "../shared/dishes";

@Injectable({
    providedIn: "root",
})
export class DishService {

    constructor() { }

    getDishes():Dish[] {
        return DISHES;
    }
    getDish(id: string):Dish{
        return DISHES.filter((dish)=>(dish.id === id))[0];
    }
    getComments(id:string):Comment[]{
        return this.getDish(id).comments;
    }
    getFeaturedDish():Dish {
        return DISHES.filter((dish) => dish.featured)[0];
    }
}
