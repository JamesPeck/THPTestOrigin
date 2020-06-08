import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {

  }

  logout() {
    return new Promise((resolve, reject) => {
      var headers = new Headers();
      var url = 'https://mobilemembers.tufts-health.com/siteminderagent/forms/logout.html';

      let options: RequestOptions = new RequestOptions({ headers: headers });
      this.http.get(url, options)
          .subscribe(async data => {
            console.log("Working")
              resolve(data);
          },
              error => {
                  reject(error);
              });
  });
  }

}
