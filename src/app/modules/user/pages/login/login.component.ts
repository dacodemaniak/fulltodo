import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public lottieConfig: any;

  constructor() { }

  ngOnInit() {
    this.lottieConfig = {
      path: 'assets/animations/2585-imprint.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

}
