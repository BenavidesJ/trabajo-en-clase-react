import React from 'react';
import {User} from './Table';
interface FormProps {
    handleSubmit: (user:User) => void;
}


export class Form extends React.Component<FormProps> {
    initialState:User = {
        name: ' ',
        job: ' ',
    }

    state = this.initialState


    handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,//El valor del nombre de ese input va a ser el value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    render() {
        const {name, job} = this.state;
        return(
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name' value={name} onChange={this.handelChange}/>

                <label htmlFor="job">Job</label>
                <input type="text" name='job' id='job' value={job} onChange={this.handelChange}/>

                <input type="button" value="submit" onClick= {this.submitForm} />
            </form>   

        )
    }
}

//export default Form;