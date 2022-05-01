window.onload = ()=> {
    const socket = io();
    socket.on("productos", listProds => {
        loadProds(listProds)
    })
    socket.on("messages", data =>{
       loadMessages(data)
    })

    function loadMessages(data) {
        const html = data.map((elem, index) => {
            return(`<div class="direct-chat-info">
                        <span id="chatName" class="box__messages__chat--name me-2">${elem.email}</span>
                        <span id= "chatDate" class="box__messages__chat--timestamp">${elem.date}</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <textarea name="messages-chat" id="chatText" class="box__messages__chat--text" cols="95vw" rows="2">${elem.text}</textarea>
                    </div>
                     `)
        }).join(" ");
        document.getElementById('messages').innerHTML = html;
    }
    document.getElementById('box__form').addEventListener('submit', (e)=> {
        e.preventDefault()
        agregarMensaje()
    })

    function agregarMensaje() {
        const newMessage = {
            email: document.getElementById('email').value,
            text: document.getElementById('text').value,
        }
        socket.emit("messageNew",newMessage)
        document.getElementById('text').value = '';
    }

    async function loadProds(listProd) {
        let htmlProd = {}
        const tableList = await fetch('views/partials/table.ejs').then(res => res.text())
 
        if (listProd.length === 0){
            htmlProd = `No se encontraron Productos`
        }else{
            htmlProd = ejs.render(tableList, {listProd})
             
        }
        //console.log(htmlProd)
        document.getElementById('NuevaTabla').innerHTML = htmlProd;
         
    }

    document.getElementById('btn').addEventListener('click', ()=> {
        const producto = {
            title: document.getElementById('title').value,
            price: document.getElementById('price').value,
            url:document.getElementById('url').value,
        }
    socket.emit('guardarProducto', producto)
    })
}