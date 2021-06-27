import instance from '@settings/axios';

export async function postPublicacion(obj){
    let result = await instance({
      'method':'POST',
      'url': '/query',
      'params':{
        'titulo':obj.titulo,
        'tipo': obj.tipo,
        'descripcion': obj.descripcion,
        'id_curso':obj.id_curso,
      }
    });

    return result;
  }

export  async function postAsignacion(obj){
    let result = await instance({
      'method':'POST',
      'url': '/',
      'params':{
        'titulo':obj.titulo,
        'tipo': obj.tipo,
        'descripcion': obj.descripcion,
        'id_curso':obj.id_curso,
        'nota_max':obj.notaMax,
        'fecha_max': obj.fechaEntrega,
      }
    });
    return result;
}


export async function enviarDatos(recurso) {
    //const request = await axios.post("", recurso);
    let res;
    try{
      switch(recurso.tipo){
        case 'A': res= await postPublicacion(recurso) ;break;
        case 'M': res= await postPublicacion(recurso) ;break;
        case 'E': res= await postAsignacion(recurso); break;
        case 'T': res= await postAsignacion(recurso); break;
        default: break;
      }
    }
    catch(e){
      console.error(e);
    }

    
    //TODO: Connect with back (this is a fake request result)
    res = {'id_publicacion':"1w1w2w2"};
    return res.id_publicacion;
  }