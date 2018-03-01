import { Component, OnInit } from '@angular/core';
import { GridModelService } from '../../models/grid-model.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {

  private gridSize = {};
  private rows = [];
  private columns = [];
  private grid = [];
  private alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  constructor(private gridModel: GridModelService) {
      this.gridModel.gridSize.subscribe(data => this.gridSize=data);
      this.rows = Array(this.gridSize['height'])
        .fill(null, 0,this.gridSize['height'])
        .map((x,i)=>i+1);
      
      for (let i = 0; i < this.gridSize['width']; i++) {
        this.columns.push(this.alphabet[i]);
      }

      var rows = this.rows;
      var columns = this.columns;
      var grid = this.grid;

      rows.forEach(function(row) {
        columns.forEach(function(column) {
            grid
            .push({
              name: column + row,
              active: false,
              color: 'blank'
            });
        });
      });
   }

  ngOnInit() {
  }


  moveToken(e: any) {
    let target = e.nativeEvent.target;
    console.log(e.nativeEvent);
    var grid = this.grid;
    grid.forEach(function(originCell) {
      if (originCell.name === e.dragData.name) {
        grid.forEach(function(targetCell) {
          if(targetCell.name === target.id && !targetCell.active) {
            targetCell.color = originCell.color;
            targetCell.active = true;
            originCell.color = 'blank';
            originCell.active = false;
            console.log(originCell.name);
            let origin: HTMLElement = document.getElementById(originCell.name);
            console.log(origin);
          }
        });
      }
    });
  }

  addToken(e: any) {
    this.grid.forEach(function(cell) {
      if (cell.name === e.target.id && !cell.active) {
        cell.color = 'blue';
        cell.active = true;
        e.target.classList.add(cell.color);
      } else if (cell.name === e.target.id && cell.active ) {
        e.target.classList.remove(cell.color);
        cell.color = 'blank';
        cell.active = false;
      }
    });
  }
  
}
