import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SettingsService, TitleService } from '@delon/theme';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sys',
  template: `<router-outlet></router-outlet>`,
})
export class SysComponent implements OnInit {
  ngOnInit() {
    
  }
}
