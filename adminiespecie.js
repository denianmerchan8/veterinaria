const { PrismaClient } = require('@prisma/client')
class AdminEspecie{

    constructor(){
        this.prisma = new PrismaClient() //Conectarnos a la base de datos
    }

    async crearEspecie(req, res){
        const datos=req.body;

        const especie= await this.prisma.especie.create(
        {
            data:datos
             // data:{
            //     nombre:"perro",
            //     clasificacion:"Mamifero",
            //     esperanza_vida:15,
            //     peso_promedio:20
            // }
        }
    );
    res.json(especie)
}

    async listarEspecie(req, res){
        const especies= await this.prisma.especie.findMany();
        res.json(especies);
    }

}

module.exports= AdminEspecie