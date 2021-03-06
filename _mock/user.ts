import { MockStatusError } from '@delon/mock';
import * as Mock from 'mockjs';

export const USERS = {
    // 支持值为 Object 和 Array
    'GET /users': { users: [1, 2] },
    // GET POST 可省略
    '/users/1': Mock.mock({ id: 1, 'rank|3': '★★★' }),
    // 发送 Status 错误
    '/500': () => { throw new MockStatusError(500); },
    '/404': () => { throw new MockStatusError(404); }
};
