function validate(setError, setHelper) {
  setError(true);
  setHelper("Debe rellenar este campo");
}

export function resourceIsValid(
  recurso,
  setErrorTitle,
  setErrorDesc,
  setHelperTitle,
  setHelperDesc
) {
  if (recurso.titulo && recurso.descripcion) return true;
  else {
    !recurso.titulo && validate(setErrorTitle, setHelperTitle);
    !recurso.descripcion && validate(setErrorDesc, setHelperDesc);
    return false;
  }
}
