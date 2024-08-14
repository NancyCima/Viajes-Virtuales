import React, { useEffect, useState } from 'react';

const CommentList = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
        setComments(storedComments);
    }, []);

    return (
        <div className="mt-8 p-4 bg-[#F5F5F5FA] rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#071952] mb-4">Reseñas</h3>
            <ul className="space-y-4">
                {comments.map((comment, index) => (
                    <li key={index} className="border-b pb-2">
                        <h4 className="text-lg font-semibold">{comment.name}</h4>
                        <p className="text-sm text-[#088395]">{comment.city}</p>
                        <p className="text-md mt-2">{comment.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentList;
