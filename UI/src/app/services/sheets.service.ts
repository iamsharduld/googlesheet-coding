import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SheetsService {

  constructor(
    private http: HttpClient
  ) { }

  getSheetData(sheetId) {
    return this.http.get("http://localhost:5000/getSheetData?sheetId="+sheetId);
  }
}
