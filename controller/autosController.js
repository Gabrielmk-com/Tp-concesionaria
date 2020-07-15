const fs = require ('fs');
const dbAutos = JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"));

const autos = {
    index: function(req, res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('ACÁ ESTAN DISPONIBLES TODOS NUESTROS AUTOS')
        res.write('\n')
        let autos=[]
        bdAutos.forEach(function(sucursal){
            sucursal.autos.forEach(function(auto){
                    auto.push(auto=> console.log(autos))
                    
                    
                })
                
                res.end()
        })

        

        
        
    },

    id:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        let idMarca = req.params.marca;
        res.write ("Total de unidades disponibles: "  + idMarca +'\n\n');
        dbConcesionarias.forEach(function(sucursal){
            sucursal.autos.forEach(function(autos){
                if(autos.marca == idMarca){
                 res.write("Marcas: " + autos.marca) 
                 res.write("Modelos: " + autos.modelo) 
                 res.write("Años: " + autos.anio )             
                 res.write("Color: " + autos.color )
                 }           
            })
         })
       res.end()
    },
    

        

};


module.exports= autos;



