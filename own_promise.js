let fs=require("fs")
//our own call back

function read_file(file_name){
    return new Promise(function(resolve,reject){
        fs.readFile(file_name,function cb(err,data){
            if(err){
                console.log(file_name)
                console.log("cant read the file")
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}
let qubais_promise=read_file("f1.txt")
qubais_promise.then(function(data){
    console.log(data+"")
})
.catch(function(err){
    console.log("error")
})