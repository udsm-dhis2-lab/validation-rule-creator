export interface IBaseObject {
  [key: string]: unknown;
}

export class BaseObject<T> implements IBaseObject {
  [key: string]: unknown;
  constructor(details: Partial<T>) {
    Object.keys(details).forEach((key) => {
      this[key] = details[key];
    });
  }
}
