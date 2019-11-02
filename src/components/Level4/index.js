import React from 'react';
import './index.css';
import TextField from '@material-ui/core/TextField';
import Center from 'react-center';
import { withRouter } from 'react-router-dom';



import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Level4 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            answer: "",
            open: false,
        };
    }

    handleChange = event => {
        this.setState({
            answer: event.target.value,
        })
    }

    validate = event => {
        event.preventDefault();        
        if(this.state.answer === "flag{haha_it's_just_hidden}") {
            alert("Success!");
            //Reroute to next page
            this.props.history.push('/level5');
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

    render() {
        return(
            <div className="level-body">

                <div className="contain">

                    <h3 className="level-header">Level 4</h3>
                    <Center>

                    <div className="isItHidden"> {"flag{haha_it's_just_hidden}"} </div>       
                    </Center>     
                    <Center>
           
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
                    </Center>

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
            </div>

        );
        
    }
}

export default withRouter(Level4);
