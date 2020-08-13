import { Component, OnInit } from "@angular/core";
import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment'
import { DishService } from "../services/dish.service";

@Component({
	selector: "app-dishdetail",
	templateUrl: "./dishdetail.component.html",
	styleUrls: ["./dishdetail.component.scss"],
})


export class DishdetailComponent implements OnInit {

	dish: Dish;
	// @Input()
	dishc: Comment[];
	// dishc = dish.comments;

	constructor(private dishService: DishService,
		private route: ActivatedRoute,
		private location: Location) { }

	ngOnInit() {
		let id = this.route.snapshot.params['id'];
		this.dish = this.dishService.getDish(id);
		this.dishc = this.dishService.getComments(id);
	}
	goBack():void{
		this.location.back();
	}


}
