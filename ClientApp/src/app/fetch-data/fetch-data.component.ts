import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public profile?: Profile;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Profile>(baseUrl + 'profile').subscribe(result => {
      this.profile = result;
    }, error => console.error(error));
  }
}

interface Profile {
  name?: string;
  surname?: number;
  email?: number;
  phone?: string;
  address?: string;
  province?: string;
  lastLogin?: string;
  documentExpirationDate?: string;
  balance?: number;
}
