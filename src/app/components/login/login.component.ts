import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from './../../modules/materials.module';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { SysService } from '../../services/sys.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    imports: [MaterialsModule, FormsModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide = signal(true);

  userObj: any = {
    userName: '',
    password: ''
  };

  private readonly sysService = inject(SysService);
  private router = inject(Router);

  private toastr = inject(ToastrService);
  
  constructor() { }


  onLogin(){
    this.sysService.loginUser(this.userObj)
      .subscribe(
        res => {
          if (res != null) {
            localStorage.setItem('token', res.empCode);
            this.sysService.updateCurrentEmp(res);
            this.router.navigateByUrl('');
          } else {
            this.toastr.error(':: Kiểm tra lại tên đăng nhập hoặc mật khẩu !');
          }
        });
  }

}

