const express=require('express');
const path=require('path');
const app=express();
const PORT=process.env.PORT||3000;
let latest=null;
const clients=new Set();
app.use(express.json({limit:'20kb'}));
app.use(express.static(path.join(__dirname,'public')));
app.get('/health',(req,res)=>res.status(200).json({ok:true}));
app.get('/api/location',(req,res)=>res.json({location:latest}));
app.post('/api/location',(req,res)=>{
 const {lat,lon,accuracy,speed,heading,timestamp}=req.body||{};
 if(!Number.isFinite(lat)||!Number.isFinite(lon)) return res.status(400).json({error:'Invalid coordinates'});
 latest={lat,lon,accuracy:Number.isFinite(accuracy)?accuracy:null,speed:Number.isFinite(speed)?speed:null,heading:Number.isFinite(heading)?heading:null,timestamp:timestamp||Date.now()};
 const msg=`data: ${JSON.stringify(latest)}\n\n`;
 for(const r of clients){r.write(msg);}
 res.json({ok:true,location:latest});
});
app.get('/api/stream',(req,res)=>{
 res.setHeader('Content-Type','text/event-stream'); res.setHeader('Cache-Control','no-cache'); res.setHeader('Connection','keep-alive'); res.flushHeaders();
 if(latest) res.write(`data: ${JSON.stringify(latest)}\n\n`);
 clients.add(res); req.on('close',()=>clients.delete(res));
});
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'public','oslo-maraton.html')));
app.listen(PORT,'0.0.0.0',()=>console.log(`Maraton Live Tracker running on port ${PORT}`));
