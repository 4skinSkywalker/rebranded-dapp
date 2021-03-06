import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild("darkModeCheck") darkModeCheck;

  constructor(public connection: ConnectionService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let check = this.darkModeCheck.nativeElement;
    let prefersColorScheme = localStorage.getItem("bs.prefers-color-scheme");
    if (prefersColorScheme === "dark") {
      check.checked = true;
    }
    else {
      check.checked = false;
    }
  }

  setDarkmode() {
    window["darkmode"].toggleDarkMode();
  }

}
