import React, {useState, useMemo} from 'react';

const UsuarioContext = React.createContext();




export function UsuarioProvider(props){
    
    // TODO: Guardar el usuario y (JWT)

    const [usuario,setUsuario] = useState(null);
    
    const [cargandoUsuario, setCargandoUsuario] = useState(true);

    async function login(usuarioGoogle) {
        setUsuario(usuarioGoogle);
    } 

    async function logout() {
        // todo: logout()
    } 

    const value = useMemo(() => {
        return ({
            usuario,
            cargandoUsuario,
            login,
            logout,
        })
    }, [usuario, cargandoUsuario])

    return <UsuarioContext.Provider value={value} {...props} />
}

export function useUsuario(){
    const context = React.useContext(UsuarioContext)

    if(!context) {
        throw new Error('useUsuario debe estar dentro del contenedor UsuarioContext');
    }

    return context;
}