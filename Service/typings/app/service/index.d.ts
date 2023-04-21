// This file is created by egg-ts-helper@1.34.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportLogin from '../../../app/service/login';
import ExportHomePageArticle from '../../../app/service/homePage/article';
import ExportHomePageTreeDataList from '../../../app/service/homePage/treeDataList';

declare module 'egg' {
  interface IService {
    login: AutoInstanceType<typeof ExportLogin>;
    homePage: {
      article: AutoInstanceType<typeof ExportHomePageArticle>;
      treeDataList: AutoInstanceType<typeof ExportHomePageTreeDataList>;
    }
  }
}
