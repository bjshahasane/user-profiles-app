import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useUserContext } from '../UserContext';
import { useState } from 'react';
import { TextField } from '@mui/material';

const EditModal = ({ isOpen, onClose, user, index }) => {
    const { updateUser } = useUserContext();
    const [editedUser, seteditedUser] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const tempUser = { ...editedUser };
        tempUser[name] = value;
        seteditedUser(tempUser);
    }

    const handleSubmit = () => {
        updateUser(index, editedUser);
        onClose();
    }

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={onclose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DialogTitle>Update User</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        name="name"
                        label="Name"
                        value={editedUser.name}
                        variant="outlined"
                        onChange={(e) => { handleChange(e) }}
                        sx={{ m: 2 }}
                    />
                    <TextField
                        fullWidth
                        name="email"
                        label="Email"
                        variant="outlined"
                        value={editedUser.email}
                        onChange={(e) => { handleChange(e) }}
                        sx={{ m: 2 }}
                    />

                    <TextField
                        fullWidth
                        name="phone"
                        label="Phone"
                        variant="outlined"
                        value={editedUser.phone}
                        onChange={(e) => { handleChange(e) }}
                        sx={{ m: 2 }}
                    />

                    <TextField
                        fullWidth
                        name="website"
                        label="Website"
                        variant="outlined"
                        value={editedUser.website}
                        onChange={(e) => { handleChange(e) }}
                        sx={{ m: 2 }}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} variant='contained'>OK</Button>
                    <Button onClick={onClose} variant='contained'>Cancel</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditModal;