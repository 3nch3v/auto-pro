import { Injectable } from '@angular/core';

interface IStorageService {
  setItem<T>(key: string, item: T): T;
  getItem<T>(key: string): T;
}

@Injectable({
  providedIn: 'root'
})

export class BrowserStorageService implements IStorageService {
  localStorage = localStorage;

  setItem<T>(key: string, item: T): T {
    const str = typeof item === 'string' ? item : JSON.stringify(item);
    this.localStorage.setItem(key, str);
    return item;
  }

  getItem<T>(key: string): T {
    let item;
    const tmp = this.localStorage.getItem(key);
    if (!tmp) { 
      return null as any; 
    }
    try {
      item = JSON.parse(tmp);
    } catch {
      item = tmp;
    }
    return item;
  }
}
