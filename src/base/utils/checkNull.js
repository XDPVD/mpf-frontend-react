export function checkNull(data) {
  let isNull;
  if (data instanceof Array) {
    data.map((a) => {
      a === null ? (isNull = true) : (isNull = false);
      return isNull;
    });
    return isNull;
  } else if (data === null) {
    return true;
  }
  return false; //Not null
}
