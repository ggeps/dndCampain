import { Component, OnInit, ViewChildren, ElementRef, QueryList, AfterViewInit, ViewChild, Input } from '@angular/core';
import { GridModelService } from '../../models/grid-model.service';
import { isNumber } from 'util';

@Component({
  selector: 'grid-component',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements AfterViewInit {
  @ViewChild('addToken') addTokenElement: ElementRef;
  @ViewChild('gridElement') gridElement: ElementRef;
  private gridSize = {};
  private rows = [];
  private columns = [];
  private grid = [];
  private alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  private originNode;
  private newToken = {
    color: 'blue',
    hp: null,
    name: null,
    size: null
  };

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
              color: 'blank',
              name: null,
              hp: null
            };
        });
      });
   }

  ngAfterViewInit() {
  }


  moveToken(e: any) {
    let targetNode = this.grid[e.nativeEvent.target.id];
    let originNode = this.grid[this.originNode.id];
    if (!targetNode.active) {
      targetNode.color = originNode.color;
      targetNode.active = true;
      targetNode.name = originNode.name;
      targetNode.hp = originNode.hp;
      targetNode.size = originNode.size;
      originNode.color = 'blank';
      originNode.active = false;
      originNode.name = null;
      originNode.hp = null;
      originNode.size = 1;
    }
  }

  isSelectedColor(color) {
    if (this.newToken.color === color) return 'option selected';
    return 'option';
  } 

  storeOrigin(e: any) {
    this.originNode = e.target;
  }

  addTokenToGrid() {
      var originNode = this.grid[this.originNode.id];
      if (originNode.active) return false;
        originNode.color = this.newToken.color;
        originNode.active = true;
        originNode.name = this.newToken.name;
        originNode.hp = this.newToken.hp;
        originNode.size = this.newToken.size;

      this.addTokenElement.nativeElement.classList.remove('visible');
  }

  setColor(color) {
    this.newToken.color = color;
  }

  hideNewToken() {
    this.addTokenElement.nativeElement.classList.remove('visible');
  }

  createToken(e: any) {
    this.originNode = e.target;
    this.addTokenElement.nativeElement.classList.add('visible');
  }

  removeToken(id) {
    let node = this.grid[id];
    node.name = null;
    node.hp = null;
    node.color = 'blank';
    node.size = 1;
    node.active = false;
    return false
  }

  tokenColor(id) {
    return 'token ' + this.grid[id].color;  
  }
}
