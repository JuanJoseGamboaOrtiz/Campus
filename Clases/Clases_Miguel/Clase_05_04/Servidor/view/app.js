let guardar = function(){
    fetch("http://localhost:3000/profesor/3.",{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },body: JSON.stringify({
            "tecnologias":{
                "tecnologia1":'La peste',
                "tecnologia2":"El extranjero"
            }
        })
    });
};

document.querySelector('button').addEventListener('click',(e)=>{
    e.preventDefault();
    guardar();
});