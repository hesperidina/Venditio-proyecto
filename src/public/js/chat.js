const socket = io()
let message = document.getElementById("message");
let name = document.getElementById("name");
let btn = document.getElementById("send");
let output = document.getElementById("menem");

btn.addEventListener("click", function() {
  var numero = Math.floor(Math.random() * 4) + 1

  if (numero == 1) {
    numero = "avatarColoryellow"
  }
  else if (numero == 2) {
        numero = "avatarColorred"
  }
  else if (numero == 3) {
        numero = "avatarColorgreen"
  }
  else if (numero == 4) {
        numero = "avatarColorblue"
  }
  console.log(numero);
  socket.emit("chat:message", {
    name: name.value,
    message: message.value,
    numero: numero
  });
});

socket.on("chat:message", function (data) {
  console.log(data);
  output.innerHTML += "<div class=commentList id=commentList> <div class=comment>"  +  "<div class=commentAvatar> <div class=" + data.numero + ">  </div>  </div><div class=commentBody>" + "<div class=commentMetadata><div class=commentsTag unselect><span class=author>"+ data.name +"</span></div></div>  <div class=commentContent>" + data.message + "</div></div></div></div>"
});
