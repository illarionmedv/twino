import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  display = false;
  hiddenOverflow = false;
  id: any;
  planIsChosed = false;
  userEmails = new FormGroup({
    primaryEmail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
  });

  constructor(
    private eventEmitterService: EventEmitterService
  ) { }

  ngOnInit() {
    if (this.eventEmitterService.subsVar === undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
      invokeFirstComponentFunction.subscribe((name: string) => {
        this.onPress();
      });
    }
  }

  get primEmail(){
    return this.userEmails.get('primaryEmail');
  }

  onPress() {
    this.display = !this.display;
    this.hiddenOverflow = !this.hiddenOverflow;
    if (this.hiddenOverflow === true){
      document.body.classList.add('modal-open');
    }else{
      document.body.classList.remove('modal-open');
    }
  }

  addClass(id: any) {
    this.id = id;
    this.planIsChosed = true;
  }

  onSubmit() {
      this.onPress();
  }

}
