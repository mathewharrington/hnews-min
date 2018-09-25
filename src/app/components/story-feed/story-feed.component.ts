import { Component, OnInit, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { HackernewsApiService } from '../../services/hackernews-api.service';
import { ActivatedRoute, Router} from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-story-feed',
  templateUrl: './story-feed.component.html',
  styleUrls: []
})
export class StoryFeedComponent implements OnInit {
  
  // 
  private subscription: any;
  
  // Type of HN feed to get e.g top, new, best.
  public feedType: string;

  // The feeed.
  public feed: Array<string>;
  
  // The number of feed items to take.
  public take: number;

  constructor
  (
    private cdRef: ChangeDetectorRef,
    private _api: HackernewsApiService,
    private route: ActivatedRoute,
    private router: Router    
  ) {}

  ngOnInit() 
  {    
    // Harcode to take from top stories for now, make configurable from UI.
    this.feedType = "topstories";

    this.subscription = this.route.queryParams
      .pipe(
        switchMap(params => {
          this.feed = [];
          this.take = +params.amount || 20; // Default to twenty stories.
          return this._api.getNumberOfFeedItems(this.feedType, this.take);
        })
      )
      .pipe(
        map(data => 
        {
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

  ngOnDestroy() 
  {
    console.log("Unsubscribing...");
    this.subscription.unsubscribe();
  }
}
