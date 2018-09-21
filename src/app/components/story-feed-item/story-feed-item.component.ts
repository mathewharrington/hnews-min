import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story-feed-item',
  templateUrl: './story-feed-item.component.html',
  styleUrls: []
})

export class StoryFeedItemComponent implements OnInit {

  // Data bound properties.
  @Input() id: number;
  @Input() title: string;
  @Input() url: string;

  public domain: string;
  
  // Get source hostname - used for display of 'source: (xxxx.com)'
  extractHostname(url) 
  {
    if (!url) 
      return undefined;
    
      let hostname;
    
    if (url.indexOf('://') > -1) 
    {
      hostname = url.split('/')[2];
    } 
    else 
    {
      hostname = url.split('/')[0];
    }

    return hostname.split(':')[0].split('?')[0];
  }

  constructor() {}

  // Load each individual new item, set url.
  ngOnInit() 
  {
    this.domain = this.extractHostname(this.url);
  }

  // Open link to source for given news item.
  openUrl() 
  {
    this.url ? window.open(this.url) : window.open(`/item/${this.id}`);
  }
}
