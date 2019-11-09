import React from 'react';
import './index.css';
import AlertDialogSlide from './slideInAlert';
import TextField from '@material-ui/core/TextField';
import Center from 'react-center';
import { withRouter } from 'react-router-dom';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



class Level1 extends React.Component {

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
        if(this.state.answer === "flag{this_one_is_quite_easy}") {
            //Reroute to next page
            alert("Nice you got it!");
            this.props.progressCallBack(14);
            this.props.history.push('/level2');
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

    backToPrevLevel = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }


    render() {
        return(
            <div>
                <IconButton
                    key="back"
                    aria-label="back"
                    color="inherit"
                    onClick={this.backToPrevLevel}
                    className="ml-3 mt-3"
                    >
                    <ArrowBackIcon fontSize="large" />
                </IconButton>

                <div className="level-body">

                    <div className="contain">

                        <h3 className="level-header"> Level 1 </h3> 

                        <Center>
                            < AlertDialogSlide />
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
            </div>

        );
        
    }
}

export default withRouter(Level1);
