import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useUserContext } from "../UserContext";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import EditModal from "./EditModal";

const UserCard = ({ user, index }) => {

    const { deleteUser } = useUserContext();

    const [isLiked, setIsLiked] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const url = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleDelete = () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this profile?');
        if (confirmDelete) {
            deleteUser(index)
        }
    }
    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const handleEdit = () => {
        setEditModalOpen(true);
    }
    const handleEditModalClose = () => {
        setEditModalOpen(false);
    };

    const typeStyle = {
        display: "flex",
        alignItems: "center"
    }
    return (
        <div>
            <Card sx={{ minWidth: 200 }}>
                <CardMedia
                    component="img"
                    alt={user.username}
                    image={url}
                    sx={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                        backgroundColor:"#e0e0e0"
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" >
                        {user.name}
                    </Typography>
                    <Typography variant="subtitle2" sx={typeStyle}>
                        <EmailOutlinedIcon sx={{ alignContent: "center" }} /> {user.email}
                    </Typography>
                    <Typography variant="subtitle2" sx={typeStyle} >
                        <PhoneEnabledOutlinedIcon />{user.phone}
                    </Typography>
                    <Typography variant="subtitle2" sx={typeStyle}>
                        <LanguageOutlinedIcon />{user.website}
                    </Typography>
                    <Typography variant="subtitle2" sx={typeStyle}>
                        <LocationOnOutlinedIcon />{user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}
                    </Typography>
                    <Typography variant="subtitle2" sx={typeStyle}>
                        <BusinessOutlinedIcon />{user.company.name}
                    </Typography>
                </CardContent>
                <CardActions sx={{ backgroundColor: "#e0e0e0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Checkbox
                        {...label}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        checked={isLiked} onClick={handleLike}
                        sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                        }}
                    />

                    <BorderColorOutlinedIcon onClick={handleEdit} sx={{ cursor: "pointer" }} />

                    <DeleteOutlineOutlinedIcon onClick={handleDelete} sx={{ cursor: "pointer" }} />
                </CardActions>
                <EditModal isOpen={isEditModalOpen} onClose={handleEditModalClose} user={user} index={index} />
            </Card>
        </div>
    )
}

export default UserCard;