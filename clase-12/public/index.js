const socket = io();


socket.on("mensaje-back", (data) => {
    console.log(data);
    render(data);
    // socket.emit("mensaje", data);
});

const render = (data) => {
    let html = data.map(x => {
        return `
        <div class="mensaje">
            <p>${x.nombre}:</p>
            <p>${x.mensaje}</p>
        </div>
        `
    }).join(" ");

    document.querySelector("#caja").innerHTML = html;
}

const addInfo = () => {
    let dataObj = {
        nombre: document.querySelector("#nb").value,
        mensaje: document.querySelector("#mensaje").value 
    }
    console.log(dataObj);

    socket.emit("dataMsj", dataObj);
    document.querySelector("#mensaje").value = "";
    return false;
}
