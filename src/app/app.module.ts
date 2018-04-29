import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { ContentComponent } from './features/content/content.component';
import { ApiService } from './shared/api.service';
import { LocalStorageService } from './shared/local-storage.service';
import { AuthenticationService } from './shared/authentication.service';
import { ProfileComponent } from './features/profile/profile.component';

const appRoutes: Routes = [
  { path: 'home', component: ContentComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService, LocalStorageService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
