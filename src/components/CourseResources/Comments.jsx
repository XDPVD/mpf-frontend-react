import { useEffect, useState } from 'react';
import SingleComment from './SingleComment';
import { Button, CircularProgress } from '@material-ui/core';
import { useStyles } from './_styles';
import { endP } from '@settings/config';
import { fetchingData } from '@utils/fetchData';
import ReplyForm from './ReplyForm';

export default function Comments(props) {
    const classes = useStyles();

    const [comments, setComments] = useState([]);
    const [isFetching, setFetching] = useState(true);
    const [openForm, setOpenForm] = useState(false);
    
    useEffect(() => {
        if (isFetching)
            fetchingData(
                endP({ pubId: props.post.id }).getComments,
                setComments,
                setFetching
            );
    }, [props.post.id, isFetching]);

    return (
        <div>
            <div className={classes.actions}>
                <p>Comentarios</p>
                <Button
                    disabled={openForm}
                    color="primary"
                    onClick={() => setOpenForm(true)}
                >
                    Anadir comentario
                </Button>
            </div>
            {openForm ? (
                <ReplyForm
                    isReplyMode={false}
                    pub_id={props.post.id}
                    offReplyMode={() => {
                        setOpenForm(false);
                        setFetching(true);
                    }}
                />
            ) : (
                <></>
            )}

            {isFetching ? (
                <CircularProgress />
            ) : comments.length > 0 ? (
                comments.map((elem) => {
                    return <SingleComment key={elem.id} comment={elem} />;
                })
            ) : (
                <p>No hay comentarios</p>
            )}
        </div>
    );
}
