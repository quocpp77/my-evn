import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SysService } from './services/sys.service';
import { HrmService } from './services/hrm.service';
import { firstValueFrom } from 'rxjs';
import { HrmEmployee } from './models/hrm.model';

export const authGuard: CanActivateFn = async (route, state) => {
  const hrmService = inject(HrmService);
  const sysService = inject(SysService);
  const router = inject(Router);

  if (sysService.loggedIn()) {
    const empCode = localStorage.getItem('token');

    const obj: HrmEmployee = await firstValueFrom(hrmService.selectById(empCode!)) as HrmEmployee;

    if (obj != null) sysService.updateCurrentEmp(obj);

    return true;

  } else {
    router.navigateByUrl("login");

    return false;
    
  }

};


