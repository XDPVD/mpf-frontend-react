function validate(setError, setHelper, msg) {
  setError(true);
  setHelper(msg);
}

function dateIsValid(date, tipo) {
  if (date === null) {
    if (tipo === "A") return true;
    else {
      return false;
    }
  } else {
    let actualDate = new Date();
    if (actualDate.getTime() > date.getTime()) {
      return false;
    } else {
      return true;
    }
  }
}

// Comprueba si los campos del recurso que se desea crear son validos (titulo, descripcion, )
export function resourceIsValid(recurso, setters) {
  if (
    recurso.titulo &&
    recurso.descripcion &&
    dateIsValid(recurso.fechaEntrega, recurso.tipo)
  )
    return true;
  else {
    const msgText = "Debe rellenar estos campos";
    const msgDate = "La fecha debe ser posterior a la actual";
    recurso.titulo === "" &&
      validate(setters.setErrorTitle, setters.setHelperTitle, msgText);
    recurso.descripcion === "" &&
      validate(setters.setErrorDesc, setters.setHelperDesc, msgText);
    !dateIsValid(recurso.fechaEntrega, recurso.tipo) &&
      validate(
        setters.setErrorDate,
        setters.setHelperDate,
        msgDate,
        recurso.tipo
      );
    return false;
  }
}
