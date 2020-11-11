import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            EmployeeName: '',
            EmployeeAge: '',
            Gender: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            EmployeeName: nextProps.EmployeeName,
            EmployeeAge: nextProps.EmployeeAge,
            Gender: nextProps.Gender,
        });
    }
    NameHandler(e) {
        this.setState({ EmployeeName: e.target.value });
    }
    msgHandler(e) {
        this.setState({ EmployeeAge: e.target.value });
    }
    GenderHandler(e) {
        this.setState({ Gender: e.target.value });
    }
    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">EmployeeName:</span><input value={this.state.EmployeeName} onChange={(e) => this.NameHandler(e)} /></p>
                            <p><span className="modal-lable">EmployeeAge:</span><input value={this.state.EmployeeAge} onChange={(e) => this.msgHandler(e)} /></p>
                            <p><span className="modal-lable">Gender:</span><input value={this.state.Gender} onChange={(e) => this.GenderHandler(e)} /></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Modal;