import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckTokenService {
  @Output() stateEmitter = new EventEmitter();
  @Output() token = new EventEmitter();
}
