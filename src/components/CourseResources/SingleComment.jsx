import CommentCard from "./CommentCard";
import CommentAnswers from "./CommentAnswers";
import ReplyForm from "./ReplyForm";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";


function SingleComment(props) {
    const [isReplyMode, setReplyMode] = useState(false);
    
    return (<div key={props.comment.id} id={props.comment.id}>
        <CommentCard
          onReplyMode={() => setReplyMode(true)}
          isReplyMode={isReplyMode}
          comment={props.comment}
        />
        {isReplyMode ? (
          <ReplyForm offReplyMode={() => setReplyMode(false)} isReplyMode={true} comment_id={props.comment.id} />
        ) : (
          <></>
        )}
        <CommentAnswers comment_id={props.comment.id}/>
    </div>);
}

export default SingleComment
