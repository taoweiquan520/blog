import Mock from 'mockjs';
import { article } from './public/article';
Mock.mock('/api/article/getArticles.json', article);