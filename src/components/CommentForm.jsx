import React, { useState } from 'react';

const CommentForm = ({ onNewComment }) => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = { name, city, comment };

        const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
        storedComments.push(newComment);
        localStorage.setItem('comments', JSON.stringify(storedComments));

        onNewComment(newComment);

        window.location.reload();

        setName('');
        setCity('');
        setComment('');
    };

    return (
        <div className="mt-8 p-4 bg-[#FFFFFF] rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#071952] mb-4">Deja tu Reseña</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Nombre y Apellido"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#088395] flex-1"
                    />
                    <input
                        type="text"
                        placeholder="Ciudad"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#088395] flex-1"
                    />
                </div>
                <textarea
                    placeholder="Descripción del comentario"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#088395] h-32 resize-none"
                />
                <button
                    type="submit"
                    className="self-start bg-[#071952] text-[#EBF4F6] border-2 border-[#37B7C3] py-2 px-4 rounded-md hover:bg-[#088395] hover:border-[#37B7C3] hover:text-[#EBF4F6] transition duration-300"
                >
                    Enviar Comentario
                </button>
            </form>
        </div>
    );
};

export default CommentForm;
