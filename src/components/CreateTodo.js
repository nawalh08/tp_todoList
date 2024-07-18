import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { todoService } from '../services/todoService';

const CreateTodo = () => {
    const [todo, setTodo] = useState({
            title: '',
            description: '',
            completed: false,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await todoService.createTodo(todo);
            console.log('Todo created successfully');
            // Réinitialiser le formulaire ou rediriger l'utilisateur
            setTodo({ title: '', Description: '', completed: true });
            navigate('/todos'); // Optionnel : redirigez l'utilisateur après succès
        } catch (error) {
            console.error('Error creating todo:', error);
            // Gérer les erreurs ici, par exemple en informant l'utilisateur
        }
    };

    const [checked, setChecked] = useState(false); 

    const handleChangeChek = () => {
      setChecked(!checked); 
    }

    // Le code JSX reste le même que dans l'exemple précédent
    return (
        <div className="container mt-5">
        <h2>Créer une nouvelle tâche </h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="todoTitle" className="form-label">title</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="todoTitle" 
                    name="title" 
                    value={todo.title} 
                    onChange={handleChange} 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="todoDescription" className="form-label">description</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="todoDescription" 
                    name="Description" 
                    value={todo.description} 
                    onChange={handleChange} 
                />
            </div>

            <div className="mb-3">
                <label htmlFor="todoCompleted" className="form-label">completed</label>
                <input 
                    type="checkbox" 
                    className="form-control" 
                    id="todocompleted" 
                    name="completed" 
                    value={todo.completed} 
                    onChange={handleChangeChek} 
                    checked = {checked}
                />
            </div>
            <button type="submit" className="btn btn-primary">Add todo</button>
        </form>
    </div>
    );
};

export default CreateTodo;
