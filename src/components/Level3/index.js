import React from 'react';
import Container from '@material-ui/core/Container';
import './index.css';
import TextField from '@material-ui/core/TextField';
import Center from 'react-center';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Level3 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            answer: "",
            open: false,
        };
    }

    componentDidMount() {
        console.log("flag{console_can_help_you_debug_a_lot}");       
    }

    handleChange = event => {
        this.setState({
            answer: event.target.value,
            toolTipOpen: false,
        })
    }

    validate = event => {
        event.preventDefault();        
        if(this.state.answer === "flag{console_can_help_you_debug_a_lot}") {
            alert("Success!");
            //Reroute to next page
            this.props.history.push('/level4');
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

    render() {
        return(
            <div>
                <h3 style={{ textAlign : 'center', marginBottom : '20px', marginLeft : '50px'}}> Level 3 </h3> 

                <div className="center">

                    <Container className="contain" maxWidth="xl">
                        <Center>
                        <Tooltip disableFocusListener disableTouchListener title="ENOUGH HINTS">
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
                    </Container>

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

export default withRouter(Level3);
