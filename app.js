// THEME
function toggleTheme(){
const t=document.body.getAttribute("data-theme");
document.body.setAttribute("data-theme",t==="dark"?"light":"dark");
localStorage.setItem("theme",document.body.getAttribute("data-theme"));
}
document.body.setAttribute("data-theme",localStorage.getItem("theme")||"light");

// LOADER
window.addEventListener("load",()=>setTimeout(()=>loader.style.display="none",1200));

// TOAST
function showToast(msg){
toast.textContent=msg;
toast.style.opacity=1;
setTimeout(()=>toast.style.opacity=0,3000);
}

// REVEAL
const obs=new IntersectionObserver(entries=>{
entries.forEach(e=>e.isIntersecting&&e.target.classList.add("active"));
},{threshold:.2});
document.querySelectorAll(".reveal").forEach(r=>obs.observe(r));

// FAQ
document.querySelectorAll(".faq-question").forEach(q=>{
q.onclick=()=>q.parentElement.classList.toggle("active");
});

// SCROLL SPY
const links=document.querySelectorAll(".nav a");
window.addEventListener("scroll",()=>{
let current="";
document.querySelectorAll("section").forEach(s=>{
if(scrollY>=s.offsetTop-200) current=s.id;
});
links.forEach(a=>{
a.classList.toggle("active",a.getAttribute("href")==="#"+current);
});
});

// TURNOS
const horarios=["10:00","11:00","12:00","15:00","16:00","17:00"];
turnoForm.innerHTML=`
<input id="nombre" placeholder="Nombre" required>
<select id="servicio"><option>Corte</option><option>Fade</option><option>Corte + barba</option></select>
<select id="barbero"><option>Lucas</option><option>Matías</option><option>Franco</option></select>
<input type="date" id="fecha" required>
<select id="hora">${horarios.map(h=>`<option>${h}</option>`).join("")}</select>
<button>Reservar turno</button>
`;

turnoForm.onsubmit=e=>{
e.preventDefault();
showToast("Turno reservado");
setTimeout(()=>{
const msg=`Hola! Soy ${nombre.value}. Quiero reservar:
Servicio: ${servicio.value}
Barbero: ${barbero.value}
Fecha: ${fecha.value}
Hora: ${hora.value}`;
window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(msg)}`);
},1000);
};
