function registrarEstudiante() {
  const mat = document.querySelector("#matri");
  const nom = document.querySelector("#nombre");
  const apt = document.querySelector("#apat");
  const amt = document.querySelector("#amat");
  const ed = document.querySelector("#edad");
  const dir = document.querySelector("#direc");
  const tl = document.querySelector("#tel");
  const calif = document.querySelector("#cal");

  let matri = mat.value;
  let nombre = nom.value;
  let apat = apt.value;
  let amat = amt.value;
  let edad = ed.value;
  let direc = dir.value;
  let tel = tl.value;
  let cal = calif.value;

  /*
  let cal1 = cal,
    cal2 = cal,
    cal3 = cal,
    cal4 = cal,
    cal5 = cal,
    cal6 = cal;

  let promedio = cal;

  CODIGO OPCIONAL (EN CASO DE INGRESAR CADA CALIFICACION)
  switch (sel) {
    case 1:
      cal1 = cal;
      break;
    case 2:
      cal2 = cal;
      break;
    case 3:
      cal3 = cal;
      break;
    case 4:
      cal4 = cal;
      break;
    case 5:
      cal5 = cal;
      break;
    case 6:
      cal6 = cal;
      break;

    default:
      console.log("No existe la opcion");
      break;
  }

  function crearFila(matri, nombre, apat, amat, edad, direc, tel, cal) {

  }

  crearFila();
  */

  const fila = document.createElement("TR");
  fila.innerHTML = `
        <td>${matri}</td>
        <td>${nombre} ${apat} ${amat}</td>
        <td>${edad}</td>
        <td>${direc}</td>
        <td>${tel}</td>
        <td>${cal}</td>
        <td>${cal}</td>
        <td>${cal}</td>
        <td>${cal}</td>
        <td>${cal}</td>
        <td>${cal}</td>
        <td>${cal}</td>`;

  const tabla = document.querySelector("#tabla");
  fila.classList.add("fil");
  tabla.appendChild(fila);
}
