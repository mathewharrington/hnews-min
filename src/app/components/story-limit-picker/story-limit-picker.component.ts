import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'story-limit-picker',
  templateUrl: './story-limit-picker.component.html',
  styleUrls: []
})
export class StoryLimitPickerComponent implements OnInit, OnChanges {
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Change detected, navigating to " + changes + " stories.");
    this.router.navigate(['app-story-feed'], 
    {
      queryParams: 
      { 
        amount: changes
      }
    });
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
