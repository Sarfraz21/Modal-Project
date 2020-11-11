import React, { Component } from 'react';
import Modal from './Modal';

class List extends Component {
    constructor(props) {
        super(props);

        this.replaceModalItem = this.replaceModalItem.bind(this);
        this.saveModalDetails = this.saveModalDetails.bind(this);
        this.state = {
            requiredItem: 0,
            brochure: [
                { EmployeeName: "Sarfraz", EmployeeAge: "21", Gender: 'Male' },
                { EmployeeName: "ABCDEBV", EmployeeAge: "22", Gender: 'Male' },
                { EmployeeName: "farazVZ", EmployeeAge: "23", Gender: 'Male' },
                { EmployeeName: "FGHIJKV", EmployeeAge: "24", Gender: 'Male' },
                { EmployeeName: "SarLMNU", EmployeeAge: "25", Gender: 'Male' },
                { EmployeeName: "SaOPQRST",EmployeeAge: "26", Gender: 'Male' },
                { EmployeeName: "SarFDFSF",EmployeeAge: "27", Gender: 'Male' },
                { EmployeeName: "SarDEEJJ", EmployeeAge: "28", Gender: 'Male' },
                { EmployeeName: "Sar",     EmployeeAge: "29", Gender: 'Male' },
            ]
        }
    }
    replaceModalItem(index) {
        this.setState({
            requiredItem: index
        });
    }
    saveModalDetails(item) {
        const requiredItem = this.state.requiredItem;
        let tempbrochure = this.state.brochure;
        tempbrochure[requiredItem] = item;
        this.setState({ brochure: tempbrochure });
    }
    deleteItem(index) {
        let tempBrochure = this.state.brochure;
        tempBrochure.splice(index, 1);
        this.setState({ brochure: tempBrochure });
    }
    render() {
        const brochure = this.state.brochure.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.EmployeeName}</td>
                    <td>{" "} - {" "}</td>
                    <td>{item.EmployeeAge}</td>
                    <td>{" "} - {" "}</td>
                    <td>{item.Gender}</td>
                    <td>
                        <button className="btn btn-success" data-toggle="modal" data-target="#exampleModal"
                            onClick={() => this.replaceModalItem(index)}>edit</button> {" "}
                        <button className="btn btn-primary" onClick={() => this.deleteItem(index)}>remove</button>
                    </td>
                </tr>
            )
        });
        const requiredItem = this.state.requiredItem;
        let modalData = this.state.brochure[requiredItem];
        return (
            <div>
                <h3>Employee Form</h3>
                <div style={{ textAlign: "center" }}>
                </div>
                <table className="table table-striped">
                    <tbody>
                        {brochure}
                    </tbody>
                </table>
                <Modal
                    EmployeeName={modalData.EmployeeName}
                    EmployeeAge={modalData.EmployeeAge}
                    Gender={modalData.Gender}
                    saveModalDetails={this.saveModalDetails}
                />
            </div>
        );
    }
}
export default List;