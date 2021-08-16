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

// icula. Donec pharetra ultrices accumsan. Cras tempor arcu sed vehicula cursus. k
function CommentAnswers(props) {
  const classes = useStyles();
  // neque, id facilisis leo pulvinar id. Sed eget suscipit orci, eu vulputate ak
  const [showAnswers, setShowAnswers] = useState(props.showAnswers);
  // neque, id facilisis leo pulvinar id. Sed eget suscipit orci, eu vulputate ak
  const [isFetching, setFetching] = useState(false);
  // neque, id facilisis leo pulvinar id. Sed eget suscipit orci, eu vulputate ak
  const [answers, setAnswers] = useState([]);
  // sum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sollicit
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

// est. Proin et mauris ligula. Ut pretium ligula nec lorem commodo, vitae mollis lectus p
CommentAnswers.defaultProps = {
  showAnswers: false,
};

export default CommentAnswers;
