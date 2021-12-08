$(document).ready(() => {
  // oculto la barra para el mensaje que provenga
  // document.getElementById("mensaje").style.display="none";
  $('#mensaje').prop('style', 'display:none;');
  $('#modalactualizar').prop('style', 'display:none;');

  $('#cancelar').click(() => {
    // alert("limpiar");
    document.getElementById('formAltaArticulo').reset();
  });

  $('#tcosto2').change(() => {
    // Obtiene el valor del campo
    const val = $('#tcosto2').val();
    // divide el valor del campo para validar que venga con decimales
    const vl = val.split('.');
    // console.log(vl.length);
    // divide por el punto para hacerlo flotante
    const cvl = vl.length;

    if (cvl > 1) {
      const res = (val * 0.16).toFixed(2);
      // console.log(res);
      $('#tiva2').val(res);
      const resuma = parseFloat(val) + parseFloat(res);
      $('#tprecio2').val(parseFloat(resuma).toFixed(2));
    } else {
      swal('Advertencia', 'Falta ponerle decimales al costo', 'warning');
    }
  });

  $('#tprecio2').change(() => {
    // Obtiene el valor del campo
    const val = $('#tprecio2').val();
    // divide el valor del campo para validar que venga con decimales
    const vl = val.split('.');
    // divide por el punto para hacerlo flotante
    const cvl = vl.length;

    if (cvl > 1) {
      const res = (val * 1.16).toFixed(2);

      const resuma = parseFloat(res) - parseFloat(val);
      $('#tiva2').val(parseFloat(resuma).toFixed(2));

      $('#tcosto2').val((parseFloat(val) - parseFloat(resuma)).toFixed(2));
    } else {
      swal('Advertencia', 'Falta ponerle decimales al precio', 'warning');
    }
  });
});
