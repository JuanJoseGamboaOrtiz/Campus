let form= document.querySelector('#form');
let contenedor= document.querySelector('.info p');

let config={
    headers: new Headers({
        "Content-Type":"application/json"
    }),
}

const getUserAll= async ()=>{
    config.method="GET";
    delete config.body;
    let data = await ((await fetch("http://localhost:4001/usuarios",config)).json());
    console.log(data);
}

const postUser=async (data)=>{
    config.method="POST";
    config.body=data;
    (await fetch("http://localhost:4001/usuarios",config));
}
    
const putUser= async (data)=>{
    config.method="PUT";
    config.body=data;
    (await fetch(`http://localhost:4001/usuarios/${data.id}`,config));
}

const deleteUser= async(data)=>{
    const {id}=data;
    config.method="DELETE";
    delete config.body;
    (await fetch(`http://localhost:4001/usuarios/${id}`,config))
}

const searchUser=async(data)=>{
    config.method="GET";
    data = await((await fetch(`http://localhost:4001/usuarios?nombre_like=${data.nombre}&apellido_like=${data.apellido}&edad_like=${data.edad}`,config)).json());
    contenedor.textContent=JSON.stringify(data);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let opc=e.submitter.dataset.accion;

    switch (opc){
        case "GET":
            getUserAll();
            break
        case "POST":
            postUser(data);
            break
        case "PUT":
            putUser(data);
            break
        case "DELETE":
            deleteUser(data);
            break
        case "SEARCH":
            searchUser(data);
            break
    }
});

