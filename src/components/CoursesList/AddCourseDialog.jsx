import React, { useState } from 'react';
import { useStyles } from './_styles';

import Button from '@material-ui/core/Button';

// Form
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import usePost from '@utils/usePost';
import FormDialog from '@common/FormDialog';
import { useUser } from '@utils/useUser';

import useTextValidation from '@utils/useTextValidation';
import { Typography } from '@material-ui/core';
import useEndpoints from '../../base/utils/useEndpoints';
import useRouterInfo from '../../base/utils/useRouterInfo';

export default function AddCourseDialog({ open, setOpen, setOpenSB }) {
    const classes = useStyles();
    const history = useRouterInfo()[1];
    const actions = useUser()[1];
    const endpoints = useEndpoints();
    const createCourse = usePost({ url: endpoints.post.createCourse, headers: actions.getHeader() });
    const [curso, setCurso] = useState({ name: '', description: '' });
    const [titleErrors] = useTextValidation({
        value: curso.name,
        validation: {
            regexs: [
                {
                    regex: /^[a-zA-Z0-9- ,_]*$/,
                    reason: 'caracteres especiales',
                },
            ],
            maxLength: 25,
            empty: false,
        },
    });
    const [descErrors] = useTextValidation({
        value: curso.description,
        validation: {
            maxLength: 30,
            empty: true,
        },
    });

    const handleInputChange = (event) => {
        setCurso({ ...curso, [event.target.name]: event.target.value });
    };

    async function submit(event) {
        event.preventDefault();
        await createCourse(curso);        
        setOpen(false);
        setOpenSB(true);
        setCurso({
            name: '',
            description: '',
        });
        history.go(0);
    }

    return (
        <div>
            <div>
                <FormDialog
                    open={open}
                    setOpen={setOpen}
                    size="md"
                    title="Crear curso"
                >
                    <form onSubmit={submit}>
                        <div>
                            <FormGroup>
                                <FormControl>
                                    <InputLabel htmlFor="clase">
                                        Nombre de la clase (obligatorio)
                                    </InputLabel>
                                    <Input
                                        error={!!titleErrors}
                                        className={classes.inputCreate}
                                        name="name"
                                        id="clase"
                                        aria-describedby="my-helper-text"
                                        onChange={handleInputChange}
                                    />
                                    {titleErrors?.map((error) => (
                                        <Typography
                                            style={{ color: 'red' }}
                                            variant="caption"
                                            display="block"
                                            gutterBottom
                                        >
                                            {error}
                                        </Typography>
                                    ))}
                                </FormControl>
                                <FormControl>
                                    <InputLabel htmlFor="asunto">
                                        Asunto
                                    </InputLabel>
                                    <Input
                                        error={!!descErrors}
                                        className={classes.inputCreate}
                                        name="description"
                                        id="asunto"
                                        onChange={handleInputChange}
                                        aria-describedby="my-helper-text"
                                    />
                                    {descErrors?.map((error) => (
                                        <Typography
                                            style={{ color: 'red' }}
                                            variant="caption"
                                            display="block"
                                            gutterBottom
                                        >
                                            {error}
                                        </Typography>
                                    ))}
                                </FormControl>
                            </FormGroup>
                            <Button
                                disabled={descErrors || titleErrors}
                                type="submit"
                                variant="contained"
                                size="small"
                                className={classes.btnCreate}
                                color="primary"
                            >
                                Crear
                            </Button>
                        </div>
                    </form>
                </FormDialog>
            </div>
        </div>
    );
}
