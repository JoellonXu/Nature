// This file is created by egg-ts-helper@1.34.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLogin from '../../../app/controller/login';
import ExportHomePageArticle from '../../../app/controller/homePage/article';
import ExportHomePageTreeDataList from '../../../app/controller/homePage/treeDataList';

declare module 'egg' {
  interface IController {
    login: ExportLogin;
    homePage: {
      article: ExportHomePageArticle;
      treeDataList: ExportHomePageTreeDataList;
    }
  }
}
