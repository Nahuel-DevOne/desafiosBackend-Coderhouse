const socket = io();

socket.on("mensajes",(data)=>{ 
    console.log(data);
    render(data);
    socket.emit("mensajes", data);

});

const render = (data) => {
    let html = data.map((x) => {
        return `
            <p>${x.nombre} : ${x.msj}</p>
        `;
        
    }).join("");

    document.querySelector("#caja").innerHTML = html;
};

const addInfo = ()=> {
    let nombre = document.querySelector("#nombre").value;
    let msj = document.querySelector("#msj").value;
    // socket.emit("addInfo", {nombre, msj});
    socket.emit("dataMsj", {nombre, msj});
    console.log({nombre, msj});
    // document.querySelector("#nombre").value = "";
    document.querySelector("#msj").value = "";

    return false;


}