import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map, tap, flatMap } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';

@Injectable()
export class HackernewsApiService {
  private cacheFeed: string[];
  private cacheFeedSize: number;
  constructor(private _api: Http) {}

  // Get list of hackernews stories beginning from top and upto 'take'.
  getNumberOfFeedItems(feedType, take): Observable<any> 
  {
    return this.getFeed(feedType)
      .pipe(map(data => data.slice(0, take)))
      .pipe(flatMap(data => from(data)))
      .pipe(flatMap(data => this.getFeedItem(data)))
      .pipe(map(data => ({ item: data, feedCount: this.cacheFeedSize })));
  }

  // Gets entire hackernews feed - limit is 500.
  getFeed(feedType): Observable<any> 
  {
    return this._api
      .get(`https://hacker-news.firebaseio.com/v0/${feedType}.json`)
      .pipe(map(data => data.json()))
      .pipe(tap(data => ((this.cacheFeed = data), (this.cacheFeedSize = data.length))));
  }

  // Gets individual hackernews story item by id.
  getFeedItem(itemId): Observable<any> 
  {
    return this._api
      .get(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`)
      .pipe(map(data => data.json()));
  }
}
