const db=require("./db");
function listarSalas(){
    returndb.findAll("salas");
}

module.exports={listarSalas}