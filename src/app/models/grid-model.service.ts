import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GridModelService {

  private gridSizeObservable = new BehaviorSubject<any>({
    height: 8, 
    width: 15
  });
  gridSize = this.gridSizeObservable.asObservable();

  constructor() { }

  changeGridSize(height: number, width: number) {
    let currentGridSize = {
        height: height, 
        width: width
     };
    this.gridSizeObservable.next(currentGridSize);
  }

}
