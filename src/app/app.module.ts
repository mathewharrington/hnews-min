import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoryFeedComponent } from './components/story-feed/story-feed.component';
import { HackernewsApiService } from './services/hackernews-api.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { StoryFeedItemComponent } from './components/story-feed-item/story-feed-item.component';
import { StoryFeedItemDetailComponent } from './components/story-feed-item-detail/story-feed-item-detail.component';
import { StoryLimitPickerComponent } from './components/story-limit-picker/story-limit-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryFeedComponent,
    StoryFeedItemComponent,
    StoryFeedItemDetailComponent,
    StoryLimitPickerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HttpModule],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent]
})

export class AppModule {}

