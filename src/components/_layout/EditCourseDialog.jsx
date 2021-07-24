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
  const {courseId,cookies,headers,onClose,openEditCourse } = props;
  const [obj,setObj]=useState([]);
  const {register,handleSubmit,formState: { errors },} = useForm();
  const onSubmit = (data,e) => {
    /*e.preventDefault();
    //putData(endP({email:cookies.name.email}).editUser,{phone:data.phone,link:data.facebook},headers);
    if(data){
        console.log("a")
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(data.nombre)
        console.log(data.asunto)
    }*/
    onClose()
  };
  
  useEffect(() => {
    //fetchData(endP({email:cookies.name.email}).getUserByEmail, setObj);
  },[]);

  return (
    <div>
      <Dialog open={openEditCourse} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Editar Curso</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <DialogContentText>
            Usted tiene la opción de editar el nombre de la clase  y asunto del curso.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            {...register('nombre')}
            label="Nombre de la clase"
            type="text"
            fullWidth
            placeholder="casi"           
          />
          <TextField
            autoFocus
            margin="dense"
            {...register('asunto')}
            label="Asunto"
            type="text"
            fullWidth
            placeholder="casi"            
          />
        </DialogContent>       
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Subscribe
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}