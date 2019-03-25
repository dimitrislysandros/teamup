import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};


  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    // console.log(this.model);

    this.authService.register(this.model)
      .subscribe(() => {
        this.alertify.success('Registeration successfull!');
      }, error => {
        this.alertify.error(error);
        console.log(error);
      });
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.message('Registeration was canceled');
  }

}
