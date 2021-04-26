import React, {Component} from 'react';

class Formulario extends Component {
    constructor(){
        super();
        this.state = {
            title : '',
            responsable : '',
            description : '',
            priority : 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('sendig data...')
    }
    render(){
        return(
            <div className="card mt-4">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group m-1">
                        <input
                        type="text"
                        name="title"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="title"
                        />
                    </div>
                    <div className="form-group m-1">
                        <input
                        type="text"
                        name="responsable"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Responsable"
                        />
                    </div>
                    <div className="form-group m-1">
                        <input
                        type="text"
                        name="description"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="description"
                        />
                    </div>
                    <div className="form-group m-2">
                        <select
                        name="priority"
                        className="form-control"
                        onChange={this.handleInput}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                      <button type="submit" className="btn btn-primary">Save</button>
                    </form>
            </div>
        );
    }
}

export default Formulario;