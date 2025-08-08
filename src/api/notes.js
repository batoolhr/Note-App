const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const getNotes = async () => {
    const response = await fetch(`${API_BASE}/api/notes/list`);
    return await response.json();
};


export const deleteNote = async (id) => {
    try {
        const response = await fetch(`${API_BASE}/api/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // Add authorization header if needed:
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete note');
        }

        return await response.json();

    } catch (error) {
        console.error('Delete error:', error);
        throw error;
    }
};

export const updateNote = async (id) => {
    try {
        const response = await fetch(`${API_BASE}/api/notes/${id}`, {
            method: 'PUt',
            headers: {
                'Content-Type': 'application/json',
                // Add authorization header if needed:
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to update note');
        }

        return await response.json();

    } catch (error) {
        console.error('Update error:', error);
        throw error;
    }
};




export const addNewNote = async (payload) => {
    try {
        const response = await fetch(`${API_BASE}/api/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add authorization header if needed:
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error('Failed to add note');
        }

        return await response.json();

    } catch (error) {
        console.error('ADD error:', error);
        throw error;
    }
};
