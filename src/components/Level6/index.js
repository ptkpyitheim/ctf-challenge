import React from 'react';
import './index.css'
import TextField from '@material-ui/core/TextField';
import Center from 'react-center';
import './index.css';
import { withRouter } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';


import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';



class Level6 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            answer: "",
            sum: 0,
            numbers:[],
        }
    }

    componentDidMount() {
        const ranRange = Math.floor(Math.random() * 310) + 300;
        let arr = [];
        let min = -250;
        let max = 250;
        let generatedSum = 0;

        for(let i = 0; i < ranRange; i++) {
            const newNum = Math.floor(Math.random() * (max - min)) + min;
            arr.push(newNum);
            generatedSum += newNum;
        }
        this.setState({
            numbers: arr,
            sum: generatedSum,
        });
        
    }

    validate = event => {
        event.preventDefault();        
        if(this.state.answer === ("flag{" + this.state.sum.toString() + "}")) {
            alert("Success! I think you're done. I think.");
            this.setState({
                answer: "",
            })
            this.props.history.push('/');
        }
        else {
            this.setState({
                answer: "",
                open: true,
            })
        } 
    }

    handleChange = event => {
        this.setState({
            answer: event.target.value,
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

        const renderNumbers = this.state.numbers.map(item => (
            <span>
                <span key={item} className="num text-success">{item}</span>
                <span>| </span>
            </span>
        ));

        return(
            <div className="level-body">

                <div className="contain">

                    <h3 className="level-header" style={{marginBottom : 0}}>Level 6 </h3>
                    <div style={{textAlign: "center"}}>
                        <Icon color="primary" style={{ fontSize: 35, textAlign: "center", marginTop: 10 }}> add_circle </Icon>
                    </div>

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

                <div className="numbers" style={{position: "absolute", top: "70%"}}>
                    {renderNumbers}
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

export default withRouter(Level6);
