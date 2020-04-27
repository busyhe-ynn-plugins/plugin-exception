# @busyhe/ynn-plugin-exception

前端服务异常处理通用模块

## 各模块自定义Errors规则

各个模块自定义Errors的code，不可以使用1000之前的数字，格式如下：

```js
{
    CUSTOM_ERROR : {
        code : 1000,
        message : 'custom error message'
    }
}
```

## Installation

```sh
$ npm install --save @busyhe/ynn-plugin-exception
```

## Usage

```js
const Ynn = require( 'ynn' );
const app = new Ynn( {
    root : __dirname,
    debugging : Ynn.DEBUGGING_DANGER,
    logging : false,
    plugins : {
        Exception : {
            path : '@busyhe/ynn-plugin-exception',
            options : {
                // 也可以通过 config/errors.js 进行配置
                errors : {
                    CUSTOM_ERROR : {
                        code : 1000,
                        message : 'custom error message'
                    }
                }
            }
        }
    }
} );

app.use( () => {
    throw new app.Exception( 'CUSTOM_ERROR' );
} );
```

上面代码在接收到请求后，将返回：

```js
{
    status : 1,
    errno : 1000,
    message : 'custom error message'
}
```
