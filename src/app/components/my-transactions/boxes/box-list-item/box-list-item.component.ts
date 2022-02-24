import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EboxService } from 'src/app/services/ebox.service';
import { COMPLETE, ONE_WAY, OTC_TRADE, PENDING } from '../box';

@Component({
  selector: 'app-box-list-item',
  templateUrl: './box-list-item.component.html',
  styleUrls: ['./box-list-item.component.css']
})
export class BoxListItemComponent implements OnInit {

  ONE_WAY = ONE_WAY;
  OTC_TRADE = OTC_TRADE;
  PENDING = PENDING;
  COMPLETE = COMPLETE;

  @Input("box") box;
  @Input("mode") mode;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goToDetails() {
    if (this.box.isPrivate)
      this.router.navigate(["./", "private", this.box.id], { relativeTo: this.route });
    else
      this.router.navigate(["./", this.box.id], { relativeTo: this.route });
  }

}
