import React from 'react'

class TabelKNN extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <table border="1">
                <thead>
                    <tr>
                        <th>{this.props.identifier}</th>
                        {this.generateHeaders()}
                        <th>{this.props.classifier}</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {this.generateRows()}
                </tbody>
            </table>
        );
    }

    generateHeaders() {
        let i = 0;
        return this.props.columns.map(column => {
            i++
            return <th key={"th"+i}> {column} </th>
        })
    }

    generateRows() {
        let rows = this.props.data
        let allColumns = []
        let i = 0;
        allColumns.push({key: i, val: this.props.identifier})
        this.props.columns.map(column => {
            i++;
            allColumns.push({key: i, val: column})
        })
        allColumns.push({key: i, val: this.props.classifier})

        return rows.map(row => {          
            let cells = allColumns.map(column => <td> {row[column.val]} </td>)

            return (
                <tr key={row.identifier}>{cells}</tr>
            )
        })
    }
}

export default TabelKNN