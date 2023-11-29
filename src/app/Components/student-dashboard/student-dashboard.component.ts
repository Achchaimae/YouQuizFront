import { Component , HostListener } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
  isSidebarOpen = false;
  currentSidebarTab: any = null;
  isSettingsPanelOpen = false;
  isSubHeaderOpen = false;

  ngOnInit(): void {
    this.watchScreen();
  }

  @HostListener('window:resize')
  watchScreen() {
    if (window.innerWidth <= 1024) {
      this.isSidebarOpen = false;
    }
  }

}
