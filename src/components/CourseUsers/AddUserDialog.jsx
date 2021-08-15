import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './_styles';
import { useState } from 'react';
import { endP } from '@settings/config';
import { postData } from '@utils/postData';
import { fetchData } from '@utils/fetchData';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormDialog from '@common/FormDialog';
import { useUser } from '@utils/useUser';

export default function AddUserDialog({ open, setOpen, course, reloadFunc }) {
    const [code, setCode] = useState('');
    const [mail, setMail] = useState({ email: '' });
    const [isFetching, setIsFetching] = useState(false);

    const actions = useUser()[1];

    useEffect(() => {
        setCode(course.code);
    }, [open]);

    useEffect(() => {
        setIsFetching(false);
    }, [code]);

    async function handleClick() {
        setIsFetching(true);
        await fetchData(`/course/${course.id}/new_code`, setCode);
    }

    const handleMailChange = (event) => {
        setMail({ ...mail, [event.target.name]: event.target.value });
    };

    async function addMail(event) {
        event.preventDefault();

        let flag = course.creator.email === mail.email;
        console.log(course);
        if (mail.email === '') {
            alert('Por favor, ingrese un email');
            return;
        }

        if (flag) {
            alert(
                'No puede agregarse asi mismo, ingrese un correo de algun alumno que no pertenezca a su curso'
            );
            return;
        }

        course.inscriptions.forEach((elem) => {
            flag = elem.user.email === mail.email;
        });

        if (flag) {
            alert(
                'No puede agregar a un alumno ya inscrito, vuelva a poner otro correo'
            );
            return;
        }

        await fetchData(`/user/byemail/${mail.email}`, (res) => {
            flag = res.status === 404;
        });

        if (flag) {
            alert(
                'El usuario no tiene un email registrado en nuestro sistema, ingrese otro o solicite al usuario registrarse en el sistema'
            );
            return;
        }

        await postData(
            endP({ courseId: course.id, email: mail.email }).enrollCourseByMail,
            {},
            actions.getHeader()
        );

        setOpen(false);
        reloadFunc();
    }

    const classes = useStyles();
    return (
        <>
            <FormDialog
                title="Añadir nuevo alumno"
                size="md"
                open={open}
                setOpen={setOpen}
            >
                <Grid container>
                    <Grid
                        style={{
                            padding: '0 10px',
                        }}
                        item
                        xs={12}
                        sm={6}
                    >
                        <Typography variant="subtitle1">
                            Añadir por correo
                        </Typography>
                        <form onSubmit={addMail}>
                            <TextField
                                name="email"
                                margin="dense"
                                type="email"
                                label="Correo electrónico"
                                placeholder="example@example.com"
                                fullWidth
                                onChange={handleMailChange}
                                autoFocus
                            />

                            <Typography variant="body2">
                                Ingrese el correo electrónico para añadir al
                                usuario.
                            </Typography>
                            <Button
                                type="submit"
                                className={classes.send}
                                variant="contained"
                                color="secondary"
                            >
                                Añadir
                            </Button>
                        </form>
                    </Grid>
                    <Grid
                        style={{
                            padding: '0 10px',
                        }}
                        item
                        xs={12}
                        sm={6}
                    >
                        <Typography variant="subtitle1">
                            Código de acceso
                        </Typography>
                        <div className={classes.codeWrapper}>
                            <Button
                                disabled={isFetching ? true : false}
                                className={classes.codeButton}
                                variant="contained"
                                color="secondary"
                                onClick={handleClick}
                            >
                                {isFetching ? (
                                    <CircularProgress size={25} />
                                ) : (
                                    <span>Generar</span>
                                )}
                            </Button>
                            <input
                                value={code}
                                type="text"
                                disabled
                                className={classes.codeText}
                            />
                        </div>
                        <Typography variant="body2">
                            Comparte el código con otros usuarios para que
                            puedan unirse a tu clase. Si generas un nuevo
                            código, el anterior dejará de tener validez.
                        </Typography>
                    </Grid>
                </Grid>
            </FormDialog>
        </>
    );
}
