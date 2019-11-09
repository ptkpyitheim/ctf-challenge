import React from 'react'
import { withRouter } from 'react-router-dom'
import Center from 'react-center';



class Level7 extends React.Component {

    componentDidMount() {
        this.props.progressCallBack(14);
    }

    render() {
        return(
            <div className="level-body">
                <div className="contain">
                    <h2 className="level-header"> You've found the secret level!</h2>
                    <Center>
                        <h5> Here's your last flag. You're done. {"flag{congratulations}"}</h5>
                    </Center>
                    <p className="mt-3"> If you are not done with the rest of the levels, please complete so</p>
                </div>  

            </div>
        );
    }
}

export default withRouter(Level7);