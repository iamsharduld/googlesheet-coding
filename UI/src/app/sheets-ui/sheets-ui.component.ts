import { Component, OnInit } from '@angular/core';

import { SheetsService } from '../services/sheets.service';

@Component({
  selector: 'app-sheets-ui',
  templateUrl: './sheets-ui.component.html',
  styleUrls: ['./sheets-ui.component.css']
})
export class SheetsUiComponent implements OnInit {

  displayedColumns = [];
  dataSource = [];
  sumPrice = -1;
  avgPrice = -1;
  sheetId = "18uMK7w0zhT8HBICzQPKhlIkFIUiHvWnQFuWTP9kEpa4";

  constructor(
    private sheetsService: SheetsService
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['name', 'price']
    this.sheetsService.getSheetData(this.sheetId).subscribe((res: any) => {
      let tableData = JSON.parse(res['data']);
      this.dataSource = tableData;
      this.sumPrice = res['sumPrice'];
      this.avgPrice = res['avgPrice'];

    })


  }

  getData() {
    console.log('here' , this.sheetId);
    this.sheetsService.getSheetData(this.sheetId).subscribe((res) => {
      let tableData = JSON.parse(res['data']);
      this.dataSource = tableData;
      this.sumPrice = res['sumPrice'];
      this.avgPrice = res['avgPrice'];
    })
  }

}
