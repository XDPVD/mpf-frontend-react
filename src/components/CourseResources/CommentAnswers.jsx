import React, { useEffect, useState } from 'react';
import { useStyles } from './_styles';

import { Button, CircularProgress } from '@material-ui/core';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@material-ui/icons';

import CommentCard from './CommentCard';

import { endP } from '@settings/config';
import { fetchingData } from '@utils/fetchData';

function CommentAnswers(props) {
  const classes = useStyles();

  const [showAnswers, setShowAnswers] = useState(props.showAnswers);

  const [isFetching, setFetching] = useState(false);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (showAnswers) {
      setFetching(true);
      fetchingData(
        endP({ commentId: props.comment_id }).getAnswers,
        setAnswers,
        setFetching
      );
    }
  }, [showAnswers, props.comment_id]);

  return (
    <div className={classes.answerList}>
      <Button
        onClick={() => {
          setShowAnswers(!showAnswers);
        }}
      >
        {!showAnswers ? (
          <>
            Mostrar respuestas <ExpandMoreIcon />
          </>
        ) : (
          <>
            {!isFetching ? (
              <>
                Ocultar respuestas <ExpandLessIcon />
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </Button>
      <div>
        {isFetching ? <CircularProgress /> : <></>}
        {showAnswers && !isFetching ? (
          answers.length > 0 ? (
            <>
              {answers.map((ans) => (
                <CommentCard comment={ans} isAnswer={true} />
              ))}
            </>
          ) : (
            <>No hay respuestas</>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

CommentAnswers.defaultProps = {
  showAnswers: false,
};

export default CommentAnswers;
