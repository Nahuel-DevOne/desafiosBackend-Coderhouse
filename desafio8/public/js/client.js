const socket = io();

socket.on("products", listProds => {
    loadProds(listProds);
})

socket.on("messages", data => {
    loadMessages(data)
})

function loadProds(data) {
    const html = data.map((elem, index) => {
        return (`<tr class="table-light text-center">
        <td class="fs-3 lead">
          ${elem.id}
        </td>
        <td class="fs-3 lead">
          ${elem.title}
        </td>
        <td class="fs-3 lead">$ ${elem.price}</td>
        </td>
        <td><img src="${elem.url}" alt="${elem.title}" class="mt-1" width="40"></td>
      </tr>
                     `)
    }).join(" ");
    document.getElementById('products').innerHTML = html;
}

function loadMessages(data) {
    const html = data.map((elem, index) => {
        return (`<div class="direct-chat-info">
                        <span id="chatName" class="box__messages__chat--name me-2">${elem.author}</span>
                        <span id= "chatDate" class="box__messages__chat--timestamp">${elem.date}</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <textarea name="messages-chat" id="chatText" class="box__messages__chat--text" cols="95vw" rows="2">${elem.msg}</textarea>
                    </div>
                     `)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}
document.getElementById('box__form').addEventListener('submit', (e) => {
    e.preventDefault()
    agregarMensaje()
})

function agregarMensaje() {
    const newMessage = {
        email: document.getElementById('email').value,
        text: document.getElementById('text').value,
    }
    socket.emit("newMessage", newMessage)
    document.getElementById('text').value = '';
}


document.getElementById('formProd').addEventListener('submit', (e) => {
    e.preventDefault();
    const producto = {
        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        url: document.getElementById('url').value,
    }
    console.log(producto)
    socket.emit('newProduct', producto);
    document.getElementById('formProd').reset();
})
