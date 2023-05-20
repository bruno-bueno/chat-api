const db=require("./db");
function listarSalas(){
    return db.findAll("sala");
}

module.exports={listarSalas}