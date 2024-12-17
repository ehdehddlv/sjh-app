import React from "react";
import Comment from "./Comment";

const Comments = [
    {
        name : "신재혁",
        comment : "리액트 넘 재밋덩"
    },
    {
        name : "카리나",
        comment : "나도 리액트 배울랭!"
    },
    {
        name : "아이유",
        comment : "나도 리액트 배울랭!!!!!"
    }
]

function CommentList(props){
    return (
        <div>
            {Comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
