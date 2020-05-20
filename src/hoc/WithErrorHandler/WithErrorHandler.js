import React, {Component} from 'react';
import Aux from '../Aux';
import Modal from '../../Components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
   return class extends Component {
    state = {
        error : null
    }
    
    componentWillMount(){
        axios.interceptors.request.use( req => {
            this.setState({error : null});
            return req;
        })

        axios.interceptors.response.use(res => res, error => {
            this.setState({error : error});
        })

    }

    errorConfirmHandler = () => {
        this.setState({error : null});
    }

    render(){
        return(
            <Aux>
                <Modal show={this.state.error}
                        closeModal={this.errorConfirmHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props}/>
            </Aux>
        )
    }
   }
}


export default withErrorHandler