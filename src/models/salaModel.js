function listarSalas(){
    return[
        {
            "_id":{
                "$oid":""
            },
            "nome":"guerreiros da InfoCimol",
            "tipo":"publica"
        },{
            "_id":{
                "$oid":""
            },
            "nome":"Só os confirmados da info",
            "tipo":"privada",
            "chave": ""
        },{
            "_id":{
                "$oid":""
            },
            "nome":"Guerreiros da info",
            "tipo":"publica"

        }
    ]
}

module.exports={listarSalas}