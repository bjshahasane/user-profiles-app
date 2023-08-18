import React from "react";
import UserCard from "../components/UserCard";
import { useUserContext } from "../UserContext";
import { Container, Grid } from "@mui/material";

const MainPage = () => {
    const { users } = useUserContext();
    return (
        <Container sx={{alignContent:"center"}}>
            <Grid container spacing={6} sx={{ m: "auto" }}>
                {
                    users.map((user, index) => (
                        <Grid item key={user.id}>
                            <UserCard user={user} index={index} />
                        </Grid>
                    ))
                }

            </Grid>
        </Container>


    )
}

export default MainPage;