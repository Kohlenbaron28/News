import CommentForm from "./CommentForm";
import React from "react";
import logo from './img/ava.png';

const Comment=({index, comment, replies, currentUserId, deleteComment, activeComment, updateComment, setActiveComment, addComment, parentId=null})=>{
    const fiveMinutes=300000;
    const timePassed=new Date()-new Date(comment.createdAt)>fiveMinutes;
    const canReply=Boolean(currentUserId);
    const canEdit=currentUserId===comment.userId && !timePassed;
    const canDelete=currentUserId===comment.userId && !timePassed;
    const createdAt=new Date(comment.createdAt).toLocaleDateString();
    const isReplying=activeComment&&activeComment.type==="replying"&&activeComment.id===comment.id;
    const isEditing=activeComment&&activeComment.type==="editing"&&activeComment.id===comment.id;
    const replyId=parentId?parentId:comment.id;
    const [showReply, setShowReply] = React.useState(false);
    
   
    return( 
    <div className="comment">
       <div className="comment-image-container">
        <img src={logo} width={50} height={50} alt="ava" />
       </div>
       <div className="comment-right-part">
        <div className="comment-content">
         <div className="comment-autor">{comment.username}</div>
         <div className="comment-data">{createdAt}</div>
        </div>
        {!isEditing&&<div className="comment-text" onClick={() => setShowReply(s => !s)}>{comment.body}</div>}
          {isEditing && <CommentForm submitLabel="Update" hasCancelButton initialText={comment.body} handleSubmit={(text)=>updateComment(text, comment.id)} handleCancel={()=>setActiveComment(null)}/>}
         <div className="comment-actions">
            {canReply&&<div className="comment-action" onClick={()=>setActiveComment({id:comment.id, type:"replying"})}>Reply</div>}
           {canEdit&&<div className="comment-action" onClick={()=>setActiveComment({id:comment.id, type:"editing"})}>Edit</div>}
           {canDelete&&<div className="comment-action" onClick={()=>deleteComment(comment.id)}>Delete</div>}
        </div>
        {isReplying&&(<CommentForm submitLabel="Reply" handleSubmit={(text)=>addComment(text, replyId)}/>)}
        {showReply && replies.length>0 && (
            <div className="replies">
               {replies.map(reply=>(
                    <Comment 
                    comment={reply} 
                    key={reply.id} 
                    replies={[]} 
                    currentUserId={currentUserId}
                    deleteComment={deleteComment}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}
                    parentId={comment.id}
                    updateComment={updateComment}
                    addComment={addComment}/>
                    
                ))}
            </div>
        )}
       </div>
    </div>
    )
};
export default Comment;