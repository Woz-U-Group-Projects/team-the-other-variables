import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from '../../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  user: string;
  message: string;

  constructor(public afAuth: AngularFireAuth,
    private readonly authService: AuthService,
              jwtHelper: JwtHelperService,
              private readonly httpClient: HttpClient) {

    this.authService.authUserObservable.subscribe(jwt => {
      if (jwt) {
        const decoded = jwtHelper.decodeToken(jwt);
        this.user = decoded.sub;
      } else {
        this.user = null;
      }
    });

  }

  ngOnInit() {
    this.httpClient.get(`${environment.serverURL}/secret`, {responseType: 'text'}).subscribe(
      text => this.message = text,
      err => console.log(err)
    );
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    })
  }

  logout() {
    this.authService.logout();
  }

}
