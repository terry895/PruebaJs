const list = document.querySelector('tbody');
let db;

window.onload = () => {
  const request = window.indexedDB.open('db_tienda', 1);

  request.onerror = () => {
    swal('Error', 'Hubo problemas para crear el registro en memoria.', 'error');
  };

  request.onupgradeneeded = (e) => {
    db = e.target.result;
    const reg = db.createObjectStore('tb_articulos', { keyPath: 'id', autoIncrement: true });
    reg.createIndex('nombre', 'nombre', {});
    reg.createIndex('costo', 'costo', {});
    reg.createIndex('iva', 'iva');
    reg.createIndex('precio', 'precio', {});
  };

  // funcion para editar el articulo seleccionado
  function editarArticulo(e) {
    const id = Number(e.target.getAttribute('data-id'));
    sessionStorage.setItem('idArticulo', id);
    window.location.href = 'actualizar.php';
  }

  // funcion para eliminar el articulo seleccionado
  function eliminarArticulo(e) {
    const id = Number(e.target.getAttribute('data-id'));
    swal({
      title: 'Advertencia',
      text: 'Esta seguro de querer eliminar el articulo?',
      icon: 'warning',
      buttons: ['Cancelar', 'Eliminar'],
    }).then((isConfirm) => {
      if (isConfirm === true) {
        const trans = db.transaction(['tb_articulos'], 'readwrite');
        const alm = trans.objectStore('tb_articulos');
        const req = alm.delete(id);

        req.onsuccess = () => {
          swal('Realizado', 'Se elimino el articulo seleccionado.', 'success');
        };
        req.onerror = () => {
          swal('Error', 'No see elimino el articulo seleccionado.', 'error');
        };

        trans.oncomplete = () => {
          mostrarDatos();
        };
      }
    });
  }
  // funcion para listar los articulos almacenados
  function mostrarDatos() {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    const alm = db.transaction('tb_articulos').objectStore('tb_articulos');
    alm.openCursor().onsuccess = (e) => {
      const crs = e.target.result;

      if (crs) {
        const listrn = document.createElement('tr');
        listrn.setAttribute('style', 'text-align:center;');
        const listdn = document.createElement('td');
        listdn.textContent = crs.value.nombre;
        listrn.appendChild(listdn);

        const listdc = document.createElement('td');
        listdc.textContent = crs.value.costo;
        listrn.appendChild(listdc);

        const listdi = document.createElement('td');
        listdi.textContent = crs.value.iva;
        listrn.appendChild(listdi);

        const listdp = document.createElement('td');
        listdp.textContent = crs.value.precio;
        listrn.appendChild(listdp);

        const listdac1 = document.createElement('td');

        const edipen = document.createElement('img');
        edipen.setAttribute('src', 'img/edit.png');

        const edbtn = document.createElement('button');
        edbtn.textContent = 'Editar';
        edbtn.setAttribute('data-id', crs.value.id);
        edbtn.setAttribute('id', 'Editar');
        edbtn.setAttribute('class', 'btn btn-primary');
        edbtn.setAttribute('title', 'Editar un articulo.');
        edbtn.onclick = editarArticulo;
        edbtn.appendChild(edipen);
        listdac1.appendChild(edbtn);

        const trash = document.createElement('img');
        trash.setAttribute('src', 'img/trahs.png');

        const elbtn = document.createElement('button');
        elbtn.textContent = 'Eliminar';
        elbtn.setAttribute('data-id', crs.value.id);
        elbtn.setAttribute('class', 'btn btn-warning');
        elbtn.setAttribute('style', 'margin-left:2%;');
        elbtn.setAttribute('title', 'Eliminar un articulo.');
        elbtn.onclick = eliminarArticulo;
        elbtn.appendChild(trash);
        listdac1.appendChild(elbtn);

        listrn.appendChild(listdac1);
        list.appendChild(listrn);

        crs.continue();
      } else if (!list.firstChild) {
        const listItem = document.createElement('tr');
        listItem.textContent = 'No hay datos almacenados.';
        list.appendChild(listItem);
      }
    };
  }

  request.onsuccess = () => {
    db = request.result;
    mostrarDatos();
  };
};
