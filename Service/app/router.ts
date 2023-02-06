import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/login', controller.login.userLogin)
  router.get('/login/find', controller.login.getParam)
};
