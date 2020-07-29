import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private eventEmitterService: EventEmitterService
  ) { }

  ngOnInit(): void {
  }

  firstComponentFunction(){
    this.eventEmitterService.onFirstComponentButtonClick();
  }

}
