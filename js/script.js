/* ============================== typing animation ============================ */
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Community Advocator","Leader","Student"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})



function sendMessage(message) {
  fetch("https://yourAPIendpoint.com/sendMessage", {
    method: "POST", 
    body: {
      message: message
    }
  }).then(res => res.json())
    .then(data => console.log(data));
}