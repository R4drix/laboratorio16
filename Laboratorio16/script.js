// script.js - Soluciones a los ejercicios
// Colaboración: IA (asistente) y alumno
// Cada bloque está comentado con el número de ejercicio correspondiente

/* Ejercicio 3: Cambiar contenido dinámicamente */
const btn3 = document.getElementById('btn3');
const texto3 = document.getElementById('texto3');
btn3.addEventListener('click', () => {
  // Ejercicio 3: cambiar texto a "Texto cambiado"
  texto3.textContent = 'Texto cambiado';
});

/* Ejercicio 4: Alternar texto al volver a hacer click */
const btn4 = document.getElementById('btn4');
const texto4 = document.getElementById('texto4');
let estado4 = false; // false => original
btn4.addEventListener('click', () => {
  // Ejercicio 4: alternar entre "Texto original" y "Texto cambiado"
  if (!estado4) {
    texto4.textContent = 'Texto cambiado';
  } else {
    texto4.textContent = 'Texto original';
  }
  estado4 = !estado4;
});

/* Ejercicio 5: Manipular clases CSS para modo oscuro */
const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {
  // Ejercicio 5: togglear clase "oscuro" en body
  document.body.classList.toggle('oscuro');
});

/* Ejercicio 6: Contador interactivo evitando caer por debajo de cero */
const inc = document.getElementById('inc');
const dec = document.getElementById('dec');
const valor = document.getElementById('valor');
const msg6 = document.getElementById('msg6');
let contador = 0;
function actualizar6() { valor.textContent = contador; }
inc.addEventListener('click', () => {
  // Ejercicio 6: incrementar
  contador++;
  actualizar6();
  msg6.textContent = '';
});
dec.addEventListener('click', () => {
  // Ejercicio 6: decrementar, evitando < 0
  if (contador === 0) {
    msg6.textContent = 'El contador no puede ser menor que 0';
    return;
  }
  contador--;
  actualizar6();
});

/* Ejercicio 7: Agregar y eliminar elementos de una lista */
const input7 = document.getElementById('input7');
const add7 = document.getElementById('add7');
const del7 = document.getElementById('del7');
const lista7 = document.getElementById('lista7');
add7.addEventListener('click', () => {
  // Ejercicio 7: añadir li con el texto del input
  const txt = input7.value.trim();
  if (!txt) return;
  const li = document.createElement('li');
  li.textContent = txt;
  lista7.appendChild(li);
  input7.value = '';
});
del7.addEventListener('click', () => {
  // Ejercicio 7: borrar último li
  const last = lista7.lastElementChild;
  if (last) lista7.removeChild(last);
});

/* Ejercicio 8: Validar formulario con DOM */
const form8 = document.getElementById('form8');
const errores8 = document.getElementById('errores8');
form8.addEventListener('submit', (e) => {
  // Ejercicio 8: validar nombre y correo no vacíos
  e.preventDefault();
  errores8.innerHTML = '';
  const nombre = document.getElementById('nombre8').value.trim();
  const correo = document.getElementById('correo8').value.trim();
  let ok = true;
  if (!nombre) {
    const sp = document.createElement('span');
    sp.textContent = 'El nombre no puede estar vacío.';
    sp.style.color = 'red';
    errores8.appendChild(sp);
    ok = false;
  }
  if (!correo) {
    const sp = document.createElement('span');
    sp.textContent = 'El correo no puede estar vacío.';
    sp.style.color = 'red';
    errores8.appendChild(sp);
    ok = false;
  }
  if (ok) {
    alert('Formulario válido. (ejercicio 8)');
    form8.reset();
  }
});

/* Ejercicio 9: Galería con miniaturas */
const grande = document.getElementById('grande');
document.querySelectorAll('.miniaturas img').forEach(img => {
  img.addEventListener('click', (e) => {
    // Ejercicio 9: al click, mostrar la imagen grande usando data-src
    const src = e.target.dataset.src;
    grande.style.backgroundImage = `url(${src})`;
    grande.textContent = '';
    grande.style.backgroundSize = 'cover';
    grande.style.backgroundPosition = 'center';
  });
});

/* Ejercicio 10: Tabla dinámica desde JavaScript */
const btn10 = document.getElementById('btn10');
const tabla10 = document.getElementById('tabla10');
btn10.addEventListener('click', () => {
  // Ejercicio 10: generar tabla desde arreglo de objetos
  const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 },
  ];
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>Nombre</th><th>Precio</th></tr>';
  table.appendChild(thead);
  const tbody = document.createElement('tbody');
  productos.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${p.nombre}</td><td>${p.precio}</td>`;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  tabla10.innerHTML = '';
  tabla10.appendChild(table);
});

/* Ejercicio 11: Delegación de eventos para eliminar li al click */
const ul11 = document.getElementById('ul11');
ul11.addEventListener('click', (e) => {
  // Ejercicio 11: si el target es LI, eliminarlo
  if (e.target && e.target.tagName === 'LI') {
    e.target.remove();
  }
});

/* Ejercicio 12: Animación con DOM y CSS */
const caja12 = document.getElementById('caja12');
const mover12 = document.getElementById('mover12');
const reset12 = document.getElementById('reset12');
mover12.addEventListener('click', () => {
  // Ejercicio 12: añadir clase "mover"
  caja12.classList.add('mover');
});
reset12.addEventListener('click', () => {
  // Ejercicio 12: quitar clase "mover"
  caja12.classList.remove('mover');
});

/* Ejercicio 13: CRUD (Crear, Leer, Actualizar, Eliminar) usuarios */
let usuarios = []; // {id, nombre, edad}
const form13 = document.getElementById('form13');
const tabla13Body = document.querySelector('#tabla13 tbody');
let editId = null;
function render13() {
  tabla13Body.innerHTML = '';
  usuarios.forEach(u => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${u.nombre}</td><td>${u.edad}</td>
      <td>
        <button data-id="${u.id}" class="edit13">Editar</button>
        <button data-id="${u.id}" class="del13">Eliminar</button>
      </td>`;
    tabla13Body.appendChild(tr);
  });
}
form13.addEventListener('submit', (e) => {
  // Ejercicio 13: agregar o guardar edición
  e.preventDefault();
  const nombre = document.getElementById('nombre13').value.trim();
  const edad = document.getElementById('edad13').value;
  if (!nombre || !edad) return;
  if (editId == null) {
    usuarios.push({ id: Date.now(), nombre, edad });
  } else {
    const u = usuarios.find(x => x.id === editId);
    if (u) { u.nombre = nombre; u.edad = edad; }
    editId = null;
  }
  form13.reset();
  render13();
});
tabla13Body.addEventListener('click', (e) => {
  // Ejercicio 13: delegación para editar/eliminar
  if (e.target.classList.contains('del13')) {
    const id = Number(e.target.dataset.id);
    usuarios = usuarios.filter(u => u.id !== id);
    render13();
  }
  if (e.target.classList.contains('edit13')) {
    const id = Number(e.target.dataset.id);
    const u = usuarios.find(x => x.id === id);
    if (!u) return;
    document.getElementById('nombre13').value = u.nombre;
    document.getElementById('edad13').value = u.edad;
    editId = id;
  }
});

/* Ejercicio 14: Declara un objeto persona y JSON.stringify */
document.getElementById('btn14')?.addEventListener('click', () => {
  // Ejercicio 14: objeto persona -> JSON
  const persona = { nombre: "Ana", edad: 25, ciudad: "Arequipa" };
  const texto = JSON.stringify(persona);
  console.log('Ejercicio 14 - JSON:', texto);
  alert('Ejercicio 14: Mira la consola (JSON.stringify).');
});

/* Ejercicio 15: JSON.parse y mostrar un valor en DOM */
const p15 = document.getElementById('p15');
document.getElementById('btn15').addEventListener('click', () => {
  // Ejercicio 15: parsear cadena JSON y mostrar valor
  const cadena = '{"nombre":"Ana","edad":25}';
  const obj = JSON.parse(cadena);
  p15.textContent = `Nombre: ${obj.nombre} - Edad: ${obj.edad}`;
});

/* Ejercicio 16: Array de productos -> JSON -> volver a objeto y listar */
document.getElementById('btn16').addEventListener('click', () => {
  // Ejercicio 16: crear array, stringify y parse, mostrar nombres
  const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 },
    { nombre: "Teclado", precio: 120 }
  ];
  const j = JSON.stringify(productos);
  const arr = JSON.parse(j);
  const ul = document.getElementById('ul16');
  ul.innerHTML = '';
  arr.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p.nombre;
    ul.appendChild(li);
  });
});

/* Ejercicio 17: Guardar objeto JSON en localStorage y recuperarlo */
document.getElementById('save17').addEventListener('click', () => {
  // Ejercicio 17: guardar usuario en localStorage
  const usuario = { nombre: "Carlos", correo: "carlos@example.com", rol: "estudiante" };
  localStorage.setItem('usuario', JSON.stringify(usuario));
  alert('Ejercicio 17: Guardado en localStorage.');
});
document.getElementById('load17').addEventListener('click', () => {
  // Ejercicio 17: recuperar y mostrar
  const datos = JSON.parse(localStorage.getItem('usuario') || 'null');
  document.getElementById('out17').textContent = JSON.stringify(datos, null, 2);
});

/* Ejercicio 18: JSON que simula lista de libros -> generar tabla */
document.getElementById('btn18').addEventListener('click', () => {
  // Ejercicio 18: parsear JSON y crear tabla con títulos y autores
  const json = '[{"titulo":"El Quijote","autor":"Cervantes"},{"titulo":"Cien Años de Soledad","autor":"García Márquez"}]';
  const libros = JSON.parse(json);
  const div = document.getElementById('tabla18');
  const table = document.createElement('table');
  table.innerHTML = '<thead><tr><th>Título</th><th>Autor</th></tr></thead>';
  const tb = document.createElement('tbody');
  libros.forEach(l => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${l.titulo}</td><td>${l.autor}</td>`;
    tb.appendChild(tr);
  });
  table.appendChild(tb);
  div.innerHTML = '';
  div.appendChild(table);
});

/* Ejercicio 19: Convertir JSON -> objeto, modificar un valor, volver a JSON */
document.getElementById('btn19').addEventListener('click', () => {
  // Ejercicio 19: modificar precio de un producto
  const cadena = '{"nombre":"Camisa","precio":50}';
  const obj = JSON.parse(cadena);
  obj.precio = 45; // modificamos
  const nuevo = JSON.stringify(obj);
  document.getElementById('out19').textContent = `Objeto modificado: ${nuevo}`;
});

/* Ejercicio 20: Guardar input en objeto, convertir a JSON y mostrar en consola */
document.getElementById('btn20').addEventListener('click', () => {
  // Ejercicio 20: tomar nombre, crear objeto, stringify y console.log
  const nombre = document.getElementById('nombre20').value.trim();
  if (!nombre) { alert('Ingrese un nombre'); return; }
  const objeto = { nombre };
  console.log('Ejercicio 20:', JSON.stringify(objeto));
  alert('Ejercicio 20: Revisa la consola para ver el JSON.');
});

/* Ejercicio 21: Lista de tareas desde JSON mostrando estado */
document.getElementById('btn21').addEventListener('click', () => {
  // Ejercicio 21: parsear JSON con tareas y mostrar estado
  const json = '[{"titulo":"Tarea 1","completada":true},{"titulo":"Tarea 2","completada":false}]';
  const tareas = JSON.parse(json);
  const ul = document.getElementById('ul21');
  ul.innerHTML = '';
  tareas.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t.titulo + (t.completada ? ' (completada)' : ' (pendiente)');
    if (t.completada) li.classList.add('completed');
    ul.appendChild(li);
  });
});

/* Ejercicio 22: Simulador de perfil con persistencia en localStorage */
const form22 = document.getElementById('form22');
const perfil22 = document.getElementById('perfil22');
function mostrarPerfil() {
  const cadena = localStorage.getItem('perfil');
  if (!cadena) { perfil22.textContent = 'No hay perfil guardado.'; return; }
  const p = JSON.parse(cadena);
  perfil22.innerHTML = `<strong>Nombre:</strong> ${p.nombre} <br/><strong>Edad:</strong> ${p.edad} <br/><strong>País:</strong> ${p.pais}`;
}
form22.addEventListener('submit', (e) => {
  // Ejercicio 22: guardar perfil como JSON en localStorage
  e.preventDefault();
  const p = {
    nombre: document.getElementById('nombre22').value.trim(),
    edad: document.getElementById('edad22').value,
    pais: document.getElementById('pais22').value.trim()
  };
  localStorage.setItem('perfil', JSON.stringify(p));
  mostrarPerfil();
});
document.addEventListener('DOMContentLoaded', mostrarPerfil);

/* Fin de soluciones */
