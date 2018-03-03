import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
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
  private originNode;

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
            grid[column + row] = {
              active: false,
              color: 'blank'
            };
        });
      });
   }

  ngOnInit() {
  }


  moveToken(e: any) {
    let targetNode = e.nativeEvent.target;
    let originNode = this.originNode;
    if (!this.grid[targetNode.id].active) {
      targetNode.classList.add(this.grid[originNode.id].color);
      originNode.classList.remove(this.grid[originNode.id].color);
      this.grid[originNode.id].color = 'blank';
      this.grid[originNode.id].active = false;
      this.grid[targetNode.id].color = 'blue';
      this.grid[targetNode.id].active = true;
    }
  }

  storeOrigin(e: any) {
    this.originNode = e.target;
  }

  addToken(e: any) {

      if (!this.grid[e.target.id].active) {
        this.grid[e.target.id].color = 'blue';
        this.grid[e.target.id].active = true;
        e.target.classList.add(this.grid[e.target.id].color);
      } else if (this.grid[e.target.id].active) {
        e.target.classList.remove(this.grid[e.target.id].color);
        this.grid[e.target.id].color = 'blank';
        this.grid[e.target.id].active = false;
      }
  }
}
