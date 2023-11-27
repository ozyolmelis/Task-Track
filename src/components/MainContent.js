import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';

const MainContent = () => {
    const [items, setItems] = useState(['Read a book', 'Meeting', '...'])
    const [newItem, setNewItem] = useState('');


    const handleDelete = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }
    const handleAdd = () => {
        if(newItem.trim() !== '') {
            setItems([...items, newItem]);
            setNewItem('');
        }
    }
    const handleEdit = (index, editedItem) => {
        const newItems =  [...items];
        newItems[index] = editedItem;
        setItems(newItems);
    }


    return (
        <div className="container mt-4">
            <Header />
            <br></br>
            <figure class="text-center">
                <blockquote class="blockquote">
                    <p>Plan your task list, don't delay!</p>
                </blockquote>
            <figcaption class="blockquote-footer">
                    by <cite title="Source Title">Melis Ö.</cite>
            </figcaption>
            </figure>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                       <span> {item} </span>
                        <button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button>
                        <button onClick={() => handleEdit(index, prompt('Edit that', item))} className="btn btn-warning">Edit</button>
                    </li>
                ))}
            </ul>
            <div className="mt-3">
                <input 
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder='Add something...'
                className="form-control"
                />
                <button onClick={handleAdd} className="btn btn-primary mt-2">Add</button>
            </div>
            <Footer />
        </div>
    )
}

export default MainContent;