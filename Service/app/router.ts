import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/api/login', controller.login.userLogin)
  router.get('/login/find', controller.login.getParam)
  router.post('/api/articleList', controller.homePage.article.articleList)
};
