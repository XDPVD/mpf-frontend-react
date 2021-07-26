export function isValid(str){
    return /^[a-zA-Z0-9- ,_]*$/.test(str)
}