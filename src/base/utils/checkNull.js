export function checkNull(data) {
  let isNull = true;
  if (data instanceof Array) {
    data.map((a) => {
      a === null ? (isNull = true) : (isNull = false);
      return isNull;
    });
    return isNull;
  } else if (data === null) {
    return true;
  } else if (data instanceof Array) {
    if (data.length === 0) {
      return true;
    }
  }
  return false; //Not null
}
