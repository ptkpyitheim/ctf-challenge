import React from 'react';
import Container from '@material-ui/core/Container';
import './index.css';
import AlertDialogSlide from './slideInAlert';
import TextField from '@material-ui/core/TextField';
import Center from 'react-center';
import { withRouter } from 'react-router-dom';

class Level1 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            answer: "",
        };
    }

    handleChange = event => {
        this.setState({
            answer: event.target.value,
        })
    }

    validate = event => {
        //flag{this_one_is_quite_easy}
        event.preventDefault();        
        if(this.state.answer === "hi") {
            //Reroute to next page
            this.props.history.push('/level2');
        }
        else {
            alert("Not quite the answer");
            this.setState({
                answer: ""
            })
        }

        
    }

    render() {

        return(
            <div>
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
            </div>

        );
        
    }
}

export default withRouter(Level1);
