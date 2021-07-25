import React,{useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { endP } from "@settings/config";
import { fetchData } from "@utils/fetchData";
import { putData } from "@utils/putData";
import { useForm } from 'react-hook-form';

export default function EditCourseDialog(props) {
  const {courseId,courseUpdated,headers,onClose,openEditCourse,editCourse } = props;
  const [obj,setObj]=useState([]);
  const {register,handleSubmit,reset,formState: { errors },} = useForm();
  
  const onSubmit = (data,e) => {
    e.preventDefault();
    putData(endP({courseId:courseId}).editCourse,{name:data.name,description:data.description}/*,headers*/);
    console.log(data)
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    if(data.name){
      e.target[0].value='';
      e.target[0].placeholder=data.name;
    }
    if(data.description){
      e.target[1].value='';
      e.target[1].placeholder=data.description;
    }
    editCourse()
    reset()
    onClose()
  };
  
  useEffect(() => {
    fetchData(endP({courseId:courseId}).getCourse, setObj);
  },[courseUpdated]);

  return (
    <div>
      <Dialog open={openEditCourse} onClose={onClose} aria-labelledby="form-dialog-title">
        <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle id="form-dialog-title">Editar Curso</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ya que usted es creador, tiene la opción de editar el nombre de la clase  y asunto del curso.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            {...register('name')}
            label="Nombre de la clase"
            type="text"
            fullWidth
            placeholder={obj.name}           
          />
          <TextField
            autoFocus
            margin="dense"
            {...register('description')}
            label="Asunto"
            type="text"
            fullWidth
            placeholder={obj.description}            
          />
        </DialogContent>       
    
        <DialogActions>  
          <Button onClick={onClose} color="primary">
            Cancelar
          </Button>
          <Button type="submit" color="primary">
            Editar
          </Button>
        </DialogActions>
        </form> 
      </Dialog>
    </div>
  );
}