import { Application } from 'egg';
import { ModuleConfig } from 'midwayjs-cool-core';

/**
 * 模块配置
 */
export default (app: Application) => {
  return {
    // 模块名称
    name: 'news',
    // 模块描述
    description: '简单新闻模块',
    // 中间件
    middlewares: [],
  } as ModuleConfig;
};