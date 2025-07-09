import { TooltipPosition } from '@angular/material/tooltip';
import { Component, computed, inject, Signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MaterialsModule } from '../../modules/materials.module';
import { FormControl } from '@angular/forms';
import { SysService } from '../../services/sys.service';
import { SysFunc } from '../../models/sys.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HrmEmployee } from '../../models/hrm.model';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterOutlet, RouterLink, MaterialsModule],
    providers: [HttpClient],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})

export class HomeComponent {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[3]);

  public curEmp: HrmEmployee;
  // empCode: string = '150025';   

  menu: SysFunc[]=[];
  public sysFunc: Signal<Observable<SysFunc[]>>;
  
  private readonly sysService = inject(SysService);
  private router = inject(Router);

  constructor() {
    this.curEmp = this.sysService.curEmp; 
    this.sysFunc = computed(() => this.sysService.select_func('MYEVN', this.curEmp.empCode));
  }
 
  get_menu(app_name: string){
    // this.menuApp = this.sysFunc().filter((item) => item.param == app_name);
    this.sysFunc().pipe(
      map((res) => res.filter((item) => item.param == app_name))
    ).subscribe((res) => this.menu = res);
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl("login");
  }

}
