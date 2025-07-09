import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { SysFunc } from '../models/sys.model';
import { HrmEmployee } from '../models/hrm.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class SysService {

  isBrowser: boolean;
  public curEmp!: HrmEmployee;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private http: HttpClient) { 
      this.isBrowser = isPlatformBrowser(platformId);
    }

  select_func(AppCode: string, EmpCode: string): Observable<SysFunc[]> {
    return this.http.get<SysFunc[]>(environment.myEVNApi + '/SysFunc?AppCode=' + AppCode + '&EmpCode=' + EmpCode);
  } 

  async grantRole(empCode: string, createdEmp: string, funcId: any) {
    return await this.http.post(environment.myEVNApi + "/SysRole?EmpCode=" + empCode + "&CreatedEmp=" + createdEmp, funcId);
  }

  loginUser(user: any) {
    return this.http.post<HrmEmployee>(environment.myEVNApi + "/HrmEmployee/Login", user);
  }

  updateCurrentEmp(obj: HrmEmployee) {
    this.curEmp = obj;
  }

  //  localStorage methods

  loggedIn(): boolean {
    if (!this.isBrowser) return false;
    return !!localStorage.getItem('token');
  }

}
