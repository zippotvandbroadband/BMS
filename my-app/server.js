const express = require('express');
const path  = require('path');
const app = express();
const RosApi = require('node-routeros').RouterOSAPI;

app.use(express.static(path.join(__dirname,"dist/my-app")));

app.get('/pppUser',(req,res)=>{
    var secret ;
    getUser().then((data)=>{
        secret = data;
        getActiveUser().then((data)=>{
            for (let x = 0; x < secret.length; x++) {
                for(let y=0 ; y<data.length ; y++){
                    if(secret[x]['userName'] == data[y]['userName']){
                        secret[x]['ip'] = data[y]['ip'];
                        secret[x]['mac'] = data[y]['mac'];
                        secret[x]['nas'] = data[y]['uptime'];
                    }
                }
            }
        }).then(()=>{
            res.status(200).send(secret)});
        })
        
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/my-app/index.html'));
    console.log(req);
});

app.listen(8200,(req,res)=>{
    console.log('running..');
});

function connection(){
    const conn = new RosApi({   
        host: '10.10.5.1',
        user: 'admin',
        password: 'Admin@123',
    });
    
    return conn.connect()
}

function getUser(){
    return connection()
    .then((conn) => {
		return conn.write('/ppp/secret/print')
        .then(data => {
            var arrSecret = [];
            data.forEach(function(item) {
                var obj = {
                    position : item['.id'],
                    userName : item.name,
                    status : item.disabled,
                    plan : item.profile,
                    nas : '',
                    ip:'',
                    mac:''
                }
                arrSecret.push(obj);
            });

            conn.close(); 
            return arrSecret;  
        })
    })
    .catch(err => {
        console.log(err);
    });
}

function getActiveUser(){
   return connection().then((conn)=>{
    return conn.write('/ppp/active/print')
    .then(data => {
        var active = [];
        data.forEach(function(item) {
           var obj = {
               userName:item['name'],
               mac : item['caller-id'],
               ip : item['address'],
               uptime : item['uptime']
           }
           active.push(obj);
        });
        conn.close(); 
        return active;  
    })
    });
}