import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HackernewsApiService } from '../../services/hackernews-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-story-feed',
  templateUrl: './story-feed.component.html',
  styleUrls: []
})
export class StoryFeedComponent implements OnInit {
  private subscription: any;
  public feedType: string;
  public feed: Array<string>;
  public take: number;
  constructor(
    private cdRef: ChangeDetectorRef,
    private _api: HackernewsApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.feedType = "topstories";
    this.take = 20;
    this.subscription = this.route.queryParams
      .pipe(
        switchMap(params => {
          this.feed = [];
          return this._api.getNumberOfFeedItems(this.feedType, this.take);
        })
      )
      .pipe(
        map(data => 
        {
          data.item.time = moment.unix(data.item.time).fromNow();
          return data;
        })
      )
      .subscribe(
        data => 
        {
          this.feed.push(data.item);
          this.cdRef.detectChanges();
        },
        error => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
