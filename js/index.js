$(document).ready(() => {
  // se Elimina todas las variables de sessiones
  sessionStorage.clear();

  // oculto la barra para el mensaje que provenga
  // document.getElementById("mensaje").style.display="none";
  $('#mensaje').prop('style', 'display:none;');
  $('#modalactualizar').prop('style', 'display:none;');

  $('#cancelar').click(() => {
    document.getElementById('formAltaArticulo').reset();
  });

  $('#tcosto').change(() => {
    // Obtiene el valor del campo
    const val = $('#tcosto').val();
    // divide el valor del campo para validar que venga con decimales
    const vl = val.split('.');

    // divide por el punto para hacerlo flotante
    const cvl = vl.length;

    if (cvl > 1) {
      const res = (val * 0.16).toFixed(2);

      $('#tiva').val(res);
      const resuma = parseFloat(val) + parseFloat(res);
      $('#tprecio').val(parseFloat(resuma).toFixed(2));
    } else {
      swal('Advertencia', 'Falta ponerle decimales al costo', 'warning');
    }
  });

  $('#tprecio').change(() => {
    // Obtiene el valor del campo
    const val = $('#tprecio').val();
    // divide el valor del campo para validar que venga con decimales
    const vl = val.split('.');

    // divide por el punto para hacerlo flotante
    const cvl = vl.length;

    if (cvl > 1) {
      const res = (val * 1.16).toFixed(2);

      const resuma = parseFloat(res) - parseFloat(val);
      $('#tiva').val(parseFloat(resuma).toFixed(2));

      $('#tcosto').val((parseFloat(val) - parseFloat(resuma)).toFixed(2));
    } else {
      swal('Advertencia', 'Falta ponerle decimales al precio', 'warning');
    }
  });
});
