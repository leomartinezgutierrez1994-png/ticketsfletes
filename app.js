const usuarios=[
{correo:"admin@fletes.com",password:"1234",rol:"admin"},
{correo:"empleado@fletes.com",password:"1234",rol:"empleado"}
];
function login(){
let correo=document.getElementById("correo").value;
let password=document.getElementById("password").value;
let usuario=usuarios.find(u=>u.correo===correo&&u.password===password);
if(usuario){
localStorage.setItem("usuario",JSON.stringify(usuario));
window.location.href="dashboard.html";
}else{
document.getElementById("error").innerText="Credenciales incorrectas";
}}
function verificarSesion(){
let usuario=JSON.parse(localStorage.getItem("usuario"));
if(!usuario){window.location.href="login.html";return;}
if(usuario.rol==="admin"){
document.getElementById("reportesCard").style.display="block";}
mostrarTickets();}
function logout(){localStorage.removeItem("usuario");window.location.href="login.html";}
function crearTicket(){
let descripcion=document.getElementById("descripcion").value;
let prioridad=document.getElementById("prioridad").value;
let tickets=JSON.parse(localStorage.getItem("tickets"))||[];
tickets.push({descripcion:descripcion,prioridad:prioridad,estado:"Abierto"});
localStorage.setItem("tickets",JSON.stringify(tickets));
mostrarTickets();}
function mostrarTickets(){
let lista=document.getElementById("listaTickets");
let tickets=JSON.parse(localStorage.getItem("tickets"))||[];
lista.innerHTML="";
tickets.forEach(t=>{
lista.innerHTML+=`<li>${t.descripcion} - ${t.prioridad} - ${t.estado}</li>`;});
document.getElementById("contador").innerText=tickets.length;
let total=document.getElementById("totalTickets");
if(total) total.innerText=tickets.length;}