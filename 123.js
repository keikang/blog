/**
 * 入口模块
 */

const express = require('express');

// 创建主应用
const app = express();


// 模板引擎
app.set('view engine', 'html');
app.set('views', `${__dirname}/views`);
app.engine('html', require('ejs').renderFile);


app.get('/', (req, res) => {
    res.end('Hello, express!');
})

// 配置静态资源
app.use(express.static('static'));

// 监听服务器
app.listen(3000, () => {
    console.log('Server is running!');
});