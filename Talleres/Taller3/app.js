const campus={
    campus:{
        datosContacto:{
            bucaramanga:'1111',
            bogota:'1111',
            medellin:'1111',
            mexico:'1111'
        }
    },
    trainers:[
        {nombre:'miguel',
        telefono:'333333',
        teams:{
            team1:{
                dia:'',
                hora:'',
                salones:''
            }
        },
        email:'miguel@miguel.com'
    }],
    campers:[{
        nombre:'Andres',
        telefono:'5555',
        teams:'',
        email:'andres@andres.com',
        nivelActual: this.teams,
        barrio:'Florida',
        medioTransporte:'Moto',
    }],
    niveles:{
        bajo:{
            preRequisito:'Ninguno',
            tecnologia:'',
        },
        medio:'',
        avanzado:'',
    },
    tecnologias:'',
    teams:'',
    roadMap:'',

}

console.log(campus.campers[0].nivelActual);