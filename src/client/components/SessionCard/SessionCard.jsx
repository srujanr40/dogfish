import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import JoinSession from "../JoinSession/JoinSession";
import {useState} from "react";
import CreateSessionPopup from "../CreateSession/CreateSessionPopup";
import {Link} from "react-router-dom";
import Divider from "@mui/material/Divider";

export default function SessionCard(props) {
    return (
        <Card sx={{maxWidth: '250px', minWidth: '250px', backgroundColor: 'white'}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={{ pathname: '/join', state: { groupId: props.groupId} }} style={{marginRight: '10px'}}>
                    <Button sx={{color: "white", backgroundColor: "lightsalmon", textTransform: "none"}} size="small">Join</Button>
                </Link>
                <Button sx={{color: "white", backgroundColor: "lightsalmon", textTransform: "none"}} size="small">More
                    info</Button>
            </CardActions>
        </Card>
    );
}