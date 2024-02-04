"use client"

import { deleteTodo, editTodo } from '@/api';
import { Task } from '@/types'
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faFloppyDisk, faTrash } from '@fortawesome/free-solid-svg-icons';

interface TodoProps {
    todo: Task;
}

const todo = ({ todo }: TodoProps) => {
    const ref = useRef<HTMLInputElement>(null)

    const [isEditing, setIdEditing] = useState(false);
    const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text);

    useEffect(() => {
        if (isEditing) {
            ref.current?.focus();
        }
    }, [isEditing])

    const handleEdit = async () => {
        setIdEditing(true);
    };

    const handleSave = async () => {
        await editTodo(todo.id, editedTaskTitle);
        setIdEditing(false);
    };

    const handleDelete = async () => {
        await deleteTodo(todo.id);
    };

    return (
        <li 
            key={todo.id}
            className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'
        >
            {isEditing ? (
                <input
                    ref={ref}
                    type="text"
                    className='mr-2 py-1 px-2 rounded border-gray-400 border'
                    value={editedTaskTitle}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEditedTaskTitle(e.target.value)
                    }
                />
            ) : (
                <span className='mr-2 py-1 px-2'>{todo.text}</span>
            )
            }
            <div>
                {isEditing ? (
                    <button className='text-blue-500 mr-3' onClick={handleSave}>
                        <FontAwesomeIcon icon={faFloppyDisk} className='ml-2' />
                    </button>
                ) : (
                    <button className='text-green-500 mr-3' onClick={handleEdit}>
                        <FontAwesomeIcon icon={faPenToSquare} className='ml-2' />
                    </button>
                ) }
                <button className='text-red-500' onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} className='ml-2' />
                </button>
            </div>
        </li>
    );
};

export default todo