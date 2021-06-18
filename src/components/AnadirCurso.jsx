import React,{useState} from 'react'
import { Card, CardActions, CardContent, Typography, CardMedia  } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import { Icon } from '@material-ui/core';

const Carman = (props) => {
    const {classes} = props
    
    const [modal, setModal] = useState(false);

    const handleOpen = () => {
        setModal(!modal);
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
        <Modal open={modal} onClose={handleOpen}>
            {body}
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
    iconCon:{
        fontSize: 80,
        margin: '10px'
    }
}) (Carman);