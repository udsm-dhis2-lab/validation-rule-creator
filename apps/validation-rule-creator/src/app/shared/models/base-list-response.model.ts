import { IBaseObject } from './base-object.model';
import { Pager } from './pager.model';

export interface IBaseListResponse {
  pager?: Pager;
  list: IBaseObject[];
  listKey: string;
}

export abstract class BaseListResponse {
  pager?: Pager;
  list: IBaseObject[];
  constructor(response: Record<string, unknown>, public listKey: string) {
    const reponseObject =
      (response || {})[listKey] || ({} as Record<string, unknown>);

    this.pager = new Pager((reponseObject['pager'] as unknown) as Pager);
    this.list = this.getList(
      (reponseObject[listKey] as Record<string, unknown>[]) || []
    );
  }

  abstract getList(list: Record<string, unknown>[]): IBaseObject[];
}
