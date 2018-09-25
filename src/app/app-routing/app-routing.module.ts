import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryFeedComponent } from '../components/story-feed/story-feed.component';
import { StoryFeedItemDetailComponent } from '../components/story-feed-item-detail/story-feed-item-detail.component';

// Unused now in minimal state. Would enable /[subdomain] style navigation to each of the below endpoints.
const routes: Routes = [
  { path: 'app-story-feed', data: {  }, component: StoryFeedComponent },
  { path: 'topstories', data: { feed: 'topstories' }, component: StoryFeedComponent },
  { path: '', redirectTo: 'topstories', pathMatch: 'full' },
  { path: 'newstories', data: { feed: 'newstories' }, component: StoryFeedComponent },
  { path: 'beststories', data: { feed: 'beststories' }, component: StoryFeedComponent },
  { path: 'askstories', data: { feed: 'askstories' }, component: StoryFeedComponent },
  { path: 'showstories', data: { feed: 'showstories' }, component: StoryFeedComponent },
  { path: 'jobstories', data: { feed: 'jobstories' }, component: StoryFeedComponent },
  { path: 'item/:itemId', component: StoryFeedItemDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
