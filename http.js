const http = require('http');
const fs = require('fs');
const path = require('path');
 
const hostname = '127.0.0.1';
const port = 3000;
 
// 创建服务器
const server = http.createServer((req, res) => {
    // 设置HTTP头部，状态码为200，内容类型为text/html
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    // 读取静态页面文件内容并发送响应
    fs.readFile(path.join(__dirname, 'sample/index.html'), (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Server Error');
        } else {
            res.end(data);
        }
    });
});
 
// 监听3000端口
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});