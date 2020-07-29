import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  display = false;
  hiddenOverflow = false;

  constructor() { }

  ngOnInit(): void {
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

}
