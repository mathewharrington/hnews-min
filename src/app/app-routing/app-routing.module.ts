import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryFeedComponent } from '../components/story-feed/story-feed.component';

// In minimal state. Would enable /[subdomain] style navigation to each of the below endpoints.
const routes: Routes = [
  { path: 'news-app-top-stories', component: StoryFeedComponent },
  { path: '', redirectTo: 'news-app-top-stories', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
