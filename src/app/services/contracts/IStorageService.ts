export interface IStorageService {
    setItem<T>(key: string, item: T): T;
    getItem<T>(key: string): T;
    removeItemByKey(key: string): void;
  }