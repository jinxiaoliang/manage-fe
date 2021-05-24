/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
    development: {
        baseApi: '',
        mockApi: 'https://www.fastmock.site/mock/3b4813b1511ac902f4e28124a51cb6ce/api'
    },
    test: {
        baseApi: '',
        mockApi: 'https://www.fastmock.site/mock/3b4813b1511ac902f4e28124a51cb6ce/api'
    },
    prod: {
        baseApi: '',
        mockApi: 'https://www.fastmock.site/mock/3b4813b1511ac902f4e28124a51cb6ce/api'
    }
}
export default {
    env,
    mock: true,
    ...EnvConfig[env]
}