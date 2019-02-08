import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';
import { FeedComponent } from './feed/feed.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginFormComponent,
    SignupFormComponent,
    FeedComponent,
    ChatRoomComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginFormComponent, pathMatch: 'full' },
      { path: 'login', component: LoginFormComponent },
      { path: 'signup', component: SignupFormComponent },
      //{ path: 'feed', component: FeedComponent },
      { path: 'chatroom', component: ChatRoomComponent },
    ])
  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
