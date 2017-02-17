
let express= require('express')
let parser = require('body-parser').urlencoded({extended: false});
let app=express();
app.set('view engine','ejs');
app.set('views','./views');
let {insertUser,checkUser}=require('./db.js');
app.listen(3000,()=>console.log('Server Started'));

app.get('/',(req,res)=>{
  res.send('HomePage')
})

app.get('/dangnhap',(req,res)=>{
  res.render('dangnhap');
})

app.get('/dangky',(req,res)=>{
  res.render('dangky');
});

app.post('/xulydangnhap',parser,(req,res)=>{
 let {username,password}=req.body;
 checkUser(username,password,(err,rs)=>{
   if(err) return res.send(err +'');
   res.send('Dang Nhap Thanh Cong');
 })
});

app.post('/xulydangky',parser,(req,res)=>{
 let {username,password,phone}=req.body;
 insertUser(username,password,phone,(err,rs)=>{
   if(err) return res.send(err+"");
   res.send('Dang Ky thanh cong roi nha');
 });
});
