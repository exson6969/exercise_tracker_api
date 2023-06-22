const db = require('../config/dbConfig.ts');

exports.checkUsernameExists = (username, callback)=>{
    db.query('SELECT * FROM exerciseDB WHERE username = ?', [username], (err, results)=>{
        if (err){
            callback(err, null);
        }else{
            callback(null, results.length > 0);
        }
    });
}

exports.create = (username, password, callback)=>{
    db.query('INSERT INTO exerciseDB (username, password) VALUES (?,?)',[username,password],(err)=>{
        if(err){
            callback(err);
        }else{
            callback(null);
        }
    })
}