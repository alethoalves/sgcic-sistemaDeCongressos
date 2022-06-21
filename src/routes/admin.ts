import { Router } from 'express';

import * as adminControllerEditions from '../controllers/adminControllerEditions';
import * as adminControllerArticles from '../controllers/adminControllerArticles';

const router = Router();

router.get('/', adminControllerEditions.editions);
router.get('/edition/:year', adminControllerEditions.formEdition);
router.post('/edition/', adminControllerEditions.edition);
router.get('/edition/delete/:year',adminControllerEditions.del);
router.post('/edition/search', adminControllerEditions.search);

router.get('/articles', adminControllerArticles.articles);
router.get('/article/upload', adminControllerArticles.formUpload);
router.post('/article/upload', adminControllerArticles.upload);
router.get('/article/:id', adminControllerArticles.formArticle);
router.post('/article', adminControllerArticles.submitFormArticle);
router.get('/article/delete/:id', adminControllerArticles.del);
router.post('/article/search', adminControllerArticles.search);


export default router;