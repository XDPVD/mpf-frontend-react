import React,{useState} from 'react'

import { Button } from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


function FormularioCrear(props) {

    const {classes} = props

    const [grupal, setGrupal] = useState('female');
    const [age, setAge] = useState('');
    const [open, setOpen] = useState(false);


    const [nota, setNota] = useState({
        nota: '',
    });

    const handleChangeNota = (event) => {
        setNota(event.target.value);
    };

    const handleChangeGrupal = (event) => {
        setGrupal(event.target.value);
    };
    
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenList = () => {
        setOpen(true);
    };

    const [subir, setSubir] = useState(false);

    const abrirSubir=()=>{
        setSubir(!subir);
    }

    return (
        <div align='left' className={classes.ventanaSubir}>
            <label className={classes.titleSubir}>NUEVO RECURSO</label>            
            <div>
            <FormControl className={classes.formTipo}>
                <InputLabel>Tipo</InputLabel>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpenList}
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Tarea</MenuItem>
                    <MenuItem value={20}>Examen</MenuItem>
                    <MenuItem value={30}>Material</MenuItem>
                    <MenuItem value={40}>Anuncio</MenuItem>
                </Select>
            </FormControl>
            </div>
            <br />
            <div>
                <form noValidate autoComplete="off">
                    <TextField className={classes.tituloForm} fullWidth={true} id="standard-basic" label="Título" />
                    <TextField className={classes.tituloForm} fullWidth={true} multiline rows={4} id="standard-basic" label="Instruciones (Opcional)" />
                </form>
            </div>
            <div>
                <FormControl className={classes.formNota}>
                    <InputLabel >Nota</InputLabel>
                    <Select
                    native
                    value={nota.nota}
                    onChange={handleChangeNota}
                    >
                    <option value={1}>1</option> <option value={2}>2</option> <option value={3}>3</option> <option value={4}>4</option>
                    <option value={5}>5</option> <option value={6}>6</option> <option value={7}>7</option> <option value={8}>8</option>             
                    <option value={9}>9</option> <option value={10}>10</option>                    
                    </Select>
                </FormControl>
                <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="datetime-local"
                    defaultValue="2021-06-18T11:59"
                    className={classes.horaEntrega}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </div>
                <div className={classes.grupal}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Grupal/Individual</FormLabel>
                    <RadioGroup value={grupal} onChange={handleChangeGrupal}>
                        <FormControlLabel value="Grupal" control={<Radio />} label="Grupal" />
                        <FormControlLabel value="Individual" control={<Radio />} label="Individual" />
                    </RadioGroup>
                </FormControl>
                </div>
            
            <div className={classes.guardarButton}>
                <Button className={classes.btn} size="large" variant="contained" color="primary" onClick={()=>abrirSubir()}>Añadir archivo</Button>
            </div>
                    
            <div className={classes.guardarButton} align="right">
                <Button className={classes.btn} size="large" variant="contained" color="secondary" onClick={()=>abrirSubir()}>GUARDAR</Button>
            </div>
        </div>
    )
}

export default FormularioCrear
