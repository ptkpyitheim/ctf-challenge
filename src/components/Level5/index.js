import React from 'react';
import Button from '@material-ui/core/Button';
import './index.css'
import TextField from '@material-ui/core/TextField';


import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


class Level5 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Add-A-Class',
            open: false,
            openAns: false,
            answer: "",
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log("Add me to asdf");
        if(e.target.className === "asdf") {
            this.setState ({
                openAns: true,
            })
        }
    }

    handleChange = event => {
        this.setState({
            answer: event.target.value,
        })
    }

    validate = event => {
        event.preventDefault();        
        if(this.state.answer === "flag{you_clever_clever}") {
            alert("Success!");
            //Reroute to next page
            // this.props.history.push('/level6');
        }
        else {
            this.setState({
                answer: "",
                open: true,
            })
        } 
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({
            open: false,
        })    
    };

    handleCloseAns = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({
            openAns: false,
        })    
    };

    

    render() {
        return(
            <div className="level-body">

                <div className="contain-level5">
                    <div className="h5">Level 5 - JavaScript</div>
                    <button type="button" id={this.state.name} onClick={this.handleClick}> Change Me and Click Me! </button>
                    <form onSubmit={this.validate} className="form-container mt-2" noValidate autoComplete="off">
                        <TextField
                            id="standard-name"
                            label="Answer"
                            className="answer"
                            value={this.state.answer}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                    </form>
                </div>

                <Snackbar
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    ContentProps={{
                    'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Incorrect answer. Please try again.</span>}
                    action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={this.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                    ]}
                />

                <Snackbar
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    open={this.state.openAns}
                    autoHideDuration={5000}
                    onClose={this.handleCloseAns}
                    ContentProps={{
                    'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{"flag{you_clever_clever}"}</span>}
                    action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={this.handleCloseAns}
                    >
                        <CloseIcon />
                    </IconButton>,
                    ]}
                />
            </div>
        );
    }
}

export default Level5;