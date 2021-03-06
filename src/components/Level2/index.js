import React from 'react';
import './index.css';
import TextField from '@material-ui/core/TextField';
import Center from 'react-center';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


class Level2 extends React.Component {

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
            toolTipOpen: false,
        })
    }

    validate = event => {
        event.preventDefault();        
        if(this.state.answer === "flag{only_if_you_look_at_css_file_too}") {
            alert("Success!");
            //Reroute to next page
            this.props.progressCallBack(14);
            this.props.history.push('/level3');
        }
        else {
            this.setState({
                answer: "",
                open: true,
            })
        } 
    }

    handleToolTipOpen = () => {
        this.setState({
            toolTipOpen: true,
        })
    }

    handleToolTipClose = () => {
        this.setState({
            toolTipOpen: false,
        })
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
        this.props.history.push('/level1');
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

                            <h3 className="level-header"> Level 2 </h3> 

                            <Center>
                            <Tooltip disableFocusListener disableTouchListener title="I wonder where else I can find more...">
                                <Button>HINT</Button>
                            </Tooltip>                        
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

export default withRouter(Level2);
