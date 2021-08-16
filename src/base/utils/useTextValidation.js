// rpis enim, eu cursus elit condimentum in. Maecenas facilisis massa risus, ut vehicula dui ornare eu. Curabitur neque o
function useTextValidation(props) {
    const errors = () => {
        let errorMessages = []
        
        let value = props.value;
        // rpis enim, eu cursus elit condimentum in. Maecenas facilisis massa risus, ut vehicula dui ornare eu. Curabitur neque o
        if(!props.validation.empty && value === ''){
            errorMessages.push('No se permite valores vacios')
            return errorMessages;
        }
        
        if(props.validation.regexs){
            for ( let {regex, reason} of props.validation.regexs){
                if(!regex.test(value)) errorMessages.push(`No se permite ${reason}`);
            }
        }
        
        if( value.length > props.validation.maxLength ) {
            errorMessages.push(`Maximo numero de caracteres: ${props.validation.maxLength}`)
        }

        return errorMessages.length? errorMessages : null;
    };

    return [errors()];
}

export default useTextValidation
