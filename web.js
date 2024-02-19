const express = require('express');
const app = express();
 
// 设置CSP
app.use((req, res, next) => {
    console.log(req.path);
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    if(req.path == '/build/ckeditor.js') {
      res.setHeader('Content-Type', 'application/javascript');
        // res.header('Content-Security-Policy', "default-src 'none'; connect-src 'self'; script-src 'self' 'unsafe-inline'; img-src * data:; style-src 'self' 'unsafe-inline'; frame-src *");
    }else {
        // res.header('Content-Security-Policy', "default-src 'none'; connect-src 'self'; script-src 'self' 'unsafe-inline'; img-src * data:; style-src 'self' 'unsafe-inline'; frame-src *");
        // res.header('Content-Security-Policy', "default-src 'self' 'nonce-123121212'; script-src 'self' 'nonce-123121212';style-src 'self' 'nonce-123121212' ;img-src 'self' 'nonce-123121212' 'https://c.cksource.com'");
    }
  
  next();
});
 
// 其他中间件或路由
app.use(express.static('sample')); // 假设有一个public目录
 
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});