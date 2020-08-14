import { Component, OnInit } from '@angular/core';
import { Leader } from "../shared/leader";
import { LeaderService } from "../services/leader.service";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  corpoLeaders:Leader[];
  // featuredLeader:Leader;
  constructor(private leaderService:LeaderService) { }

  ngOnInit() {
    this.corpoLeaders = this.leaderService.getCorporateLeaders();
    // this.featuredLeader = this.leaderService.getFeaturedLeader();
  }


}
