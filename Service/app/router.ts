import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/api/login', controller.login.userLogin)
  router.get('/login/find', controller.login.getParam)
  router.post('/api/articleList', controller.homePage.article.articleList)
  router.post('/api/treeDataList', controller.homePage.treeDataList.treeDataList)
  router.post('/api/accessMap', controller.accessMap.access.accessMap)
};
