import React from "react";
import { getComments as getCommentsApi } from "./api";
import { createComment as createCommentApi } from "./api";
import { deleteComment as deleteCommentApi } from "./api";
import { updateComment as updateCommentApi } from "./api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments=({currentUserId})=>{
const [backendComments, setBackendComments]=React.useState([]);
const [activeComment, setActiveComment]=React.useState(null);
const rootComments=backendComments.filter(backendComment=>backendComment.parentId===null);
const getReplies=(commendId)=>{
    return backendComments.filter(backendComment=>backendComment.parentId===commendId)
    .sort((a,b)=>new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime());
};

const addComment=(text, parentId)=> {
    console.log("addComment", text, parentId);
    createCommentApi(text, parentId).then(comment=>{
        setBackendComments([comment, ...backendComments]);
        setActiveComment(null);
    })
};
const updateComment=(text, commendId)=>{
    updateCommentApi(text, commendId).then(()=>{
        const updatedBackendComments=backendComments.map(backendComment=>{
            if (backendComment.id===commendId) {
                return {...backendComment, body:text}
            }
            return backendComment;
        });
        setBackendComments(updatedBackendComments);
        setActiveComment(null);
    })
}
const deleteComment=(commentId)=>{
if(window.confirm('Are you sure?')) {
    deleteCommentApi(commentId).then(()=>{
       const updatedBackendComments=backendComments.filter(backendComment=>backendComment.id!==commentId);
       setBackendComments(updatedBackendComments);
    });
}
}
console.log(backendComments)
React.useEffect(()=>{
getCommentsApi().then((data)=> setBackendComments(data));
}, []);
    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" handleSubmit={addComment}/>
            <div className="comments-container">
            {rootComments.map((rootComment)=>(
                <Comment
                index
                key={rootComment.id}
                comment={rootComment} 
                replies={getReplies(rootComment.id)} 
                currentUserId={currentUserId}
                deleteComment={deleteComment}
                activeComment={activeComment}
                updateComment={updateComment}
                setActiveComment={setActiveComment}
                addComment={addComment}/>
            ))}
            </div>
        </div>
    )
}
export default Comments;