import React from 'react';
import Container from '@material-ui/core/Container';
import './index.css';
import AlertDialogSlide from './slideInAlert';
import TextField from '@material-ui/core/TextField';
import Center from 'react-center';
import { withRouter } from 'react-router-dom';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


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
            this.props.history.push('/level2');
        }
        else {
            console.log("Nope wrong")
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

        console.log('this state open', this.state.open)

        return(
            <div class="level-body">
                <h3 style={{ textAlign : 'center', marginBottom : '20px', marginLeft : '50px'}}> Level 1 </h3> 

                <div className="center">

                    <Container className="contain" maxWidth="xl">
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

export default withRouter(Level1);
