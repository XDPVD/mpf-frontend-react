//Función para verificar si la data pasada por parámetro es nula o indefinida

export function checkNull(data) {
  let isNull = true;
  if (data instanceof Array) {
    if (data.length === 0) {
      return true;
    }
    data.map((a) => {
      a === null || a === undefined ? (isNull = true) : (isNull = false);
      return isNull;
    });
    return isNull;
  } else if (data === null || data === undefined) {
    return true;
  }
  return false; //Not null
}
