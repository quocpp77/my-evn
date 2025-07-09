import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HrmEmployee } from '../models/hrm.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrmService {

  private apiUrl = environment.myEVNApi;

  constructor(private http: HttpClient) { }

  selectById(empCode: string): Observable<HrmEmployee> {
    console.log("empCode is", empCode);
    return this.http.get<HrmEmployee>(this.apiUrl + '/HrmEmployee?empCode=' + empCode);
  }

  select(orgCode: string) : Observable<HrmEmployee[]> {
    return this.http.get<HrmEmployee[]>(this.apiUrl + '/HrmEmployee?OrgCode=' + orgCode);
  }

  async insert(obj: HrmEmployee) {
    const res = await this.http.post<HrmEmployee>(this.apiUrl + '/HrmEmployee', obj);
    return res;
  }

  async update(obj: HrmEmployee) {
    const res = await this.http.put<HrmEmployee>(this.apiUrl + '/HrmEmployee', obj);
    return res;
  }

  async delete(empCode: string) {
    const res = await this.http.delete(this.apiUrl + '/HrmEmployee?EmpCode=' + empCode);
    return res;
  }
}
