import React from "react";
import { IconButton } from '@material-ui/core';
import { Forum, PersonPinCircleRounded } from '@material-ui/icons';

// import { IconButton } from '@mui/material';
import CloseIcon from '@material-ui/icons/Close'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ReplayIcon from '@material-ui/icons/Replay'
import RefreshIcon from '@material-ui/icons/Refresh';
//import React, { useState } from 'react'
import "./FetchRandomUser.css"

function reload() {
    window.location.reload(false);
};

export default class FetchRandomUser extends React.Component {
    
    state = {
        loading: true,
        person: null
    };

   

    async componentDidMount() {
            const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
        
    }
        

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.person) {
            return <div>didn't get a person</div>;
        }

        return (
            <div className="">
            


                <div className="header">
                    <IconButton>
                        <PersonPinCircleRounded fontSize="large" className="header__icon" />
                    </IconButton>
                    <img className="header__logo" src='logo.png' alt="header" />

                    <IconButton>

                        <Forum fontSize="large" className="header__icon" />

                    </IconButton>
                </div>

              
      <div className="datingCards__container">
            <div className="card">
            <img  className="header__logo" src={this.state.person.picture.large} alt=''/>
            <h3>{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</h3>
            </div>
            
        </div>

    
     <div className='randomButtons'>
            <IconButton className='randomButtons_refresh' onClick={reload}>
                <ReplayIcon fontSize='large' />
            </IconButton>
            <IconButton className='randomButtons_close'>
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="randomButtons_love">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className='randomButtons_refresh' onClick={reload}>
                <RefreshIcon fontSize='large' />
            </IconButton>
          
        </div>
            </div>
        );
    }
}