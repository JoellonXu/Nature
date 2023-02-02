// This file is created by egg-ts-helper@1.34.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLogin from '../../../app/controller/login';

declare module 'egg' {
  interface IController {
    login: ExportLogin;
  }
}
