import React,{useState} from 'react'
import { Card, CardActions, CardContent, Typography, CardMedia  } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import { Icon } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


const Carman = (props) => {
    const {classes} = props
    
    const [modal, setModal] = useState(false);

    const handleOpen = () => {
        setModal(!modal);
    }
 
    const [subir, setSubir] = useState(false);

    const abrirSubir=()=>{
        setSubir(!subir);
    }

    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenList = () => {
        setOpen(true);
    };

    const [nota, setNota] = React.useState({
        nota: '',
    });

    const handleChangeNota = (event) => {
        setNota(event.target.value);
    };

    const [grupal, setGrupal] = React.useState('female');

    const handleChangeGrupal = (event) => {
        setGrupal(event.target.value);
    };
    const body = (
        <div align='center' className={classes.ventana}>
            <label className={classes.tile}>MATERIAL NOMBRE</label>
            <hr></hr>
            <p align='left'>Proin facilisis dignissim lacus, sit amet vestibulum quam varius vitae. Praesent sit amet nibh nisl. Duis augue magna, consequat et ultricies id, euismod quis nulla. 
                Vestibulum pulvinar elit eu velit hendrerit, non aliquam elit sodales. Quisque vel condimentum mi, in sagittis tellus. Nulla at nunc ut est sagittis euismod. 
                Nunc hendrerit tristique eros in aliquet.
            </p>
            
            <Card display ='flex'>
                <div className={classes.conten}>
                    <CardMedia width='151px'>
                        <Icon className={classes.iconCon}>
                            assignment
                        </Icon>
                    </CardMedia>
                    <div>
                        <CardContent flex='1 0 auto'>
                            <Typography className={classes.tile} component="h5" variant="h5">
                                BASE DE DATOS 2
                            </Typography>
                        </CardContent>
                    </div>
                </div>    
            </Card>
                    
            <div className={classes.conten}>
                <Button className={classes.btn} size="large" variant="contained" color="secondary" onClick={()=>handleOpen()}>SALIR</Button>
            </div>
        </div>
    );
    const subirBody = (
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
    );
    return ( 
        <>
        <Card className={classes.prin}>
            <div className={classes.conten}>
                <Icon className={classes.iconCon}>
                    assignment
                </Icon>
                <CardContent >
                    <Typography className={classes.tile}>MATERIAL</Typography>
                </CardContent>
                <CardActions>
                        <Button className={classes.btn} size="large" variant="contained" color="primary" onClick={()=>handleOpen()}>VER</Button>
                </CardActions>
            </div>
        </Card>
        <CardActions>
            <Button className={classes.btn} fullWidth={true} variant="contained" color="primary" onClick={()=>abrirSubir()}>SUBIR</Button>
        </CardActions>
        <Modal open={modal} onClose={handleOpen}>
            {body}
        </Modal>
        <Modal open={subir} onClose={abrirSubir}>
            {subirBody}
        </Modal>
        </>
     );
}
 
export default withStyles({
    prin:{
        display:'flex',
        margin: '40px',
        border:'2px solid',
        borderRadius: '10px',
    },
    tile:{
        fontSize: 40,
        margin:'10px',
    },
    item:{
        margin:'1em',
        borde: '1px solid',
        boxSizing:'border-box',
    },
    btn:{
        margin:'5px',
    },
    conten:{
        display:'flex',
        flexDirection:'row',
    },
    ventana:{
        position: 'absolute',
        width: 800,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: '10px 5px 5px black',
        padding: '16px 32px 24px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        FlexDirection:'column',
    },
    ventanaSubir:{
        position: 'absolute',
        width: 1000,
        backgroundColor: 'white',
        padding: '16px 32px 24px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        FlexDirection:'column',
    },
    iconCon:{
        fontSize: 80,
        margin: '10px'
    },
    formNota:{
        marginTop: '10px',
        minWidth: 50,
    },
    horaEntrega:{
        marginTop: '10px',
        marginLeft: '10px'
    },
    formTipo:{
        minWidth: 120,
    },
    guardarButton: {
        marginTop: '10px'
    },
    titleSubir:{
        fontSize: 40,
        margin:'0px',
    },
    container: {
        marginTop: '30px',
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 200,
    },
    grupal: {
        marginTop: '20px',
    }
}) (Carman);