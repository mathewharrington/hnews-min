import { Component, OnInit, Input } from '@angular/core';
import { HackernewsApiService } from '../../services/hackernews-api.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-story-feed-item-detail',
  templateUrl: './story-feed-item-detail.component.html',
  styleUrls: []
})
export class StoryFeedItemDetailComponent implements OnInit {
  public by: string;
  public id: number;
  public text: string;
  public title: string;
  public type: string;
  public url: string;
  public feedItemFetched: boolean;

  constructor(
    private _api: HackernewsApiService,
    private route: ActivatedRoute,
  ) {}

  // Load news items.
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.feedItemFetched = false;
      this._api.getFeedItem(params.itemId).subscribe(
        data => {
          Object.assign(this, data);
          this.feedItemFetched = true;
        },
        error => console.log(error)
      );
    });
  }
}
