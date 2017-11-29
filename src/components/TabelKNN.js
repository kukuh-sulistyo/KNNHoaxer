import React from 'react'

class TabelKNN extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <table>
            <thead>
                <tr>
                    <th>{this.props.identifier}</th>
                    {this.generateHeaders()}
                </tr>
            </thead>
        </table>
      );
    }

    generateHeaders() {
        let columns = this.props.columns;
        return columns.map(column => <th> {column} </th>)
    }
}

export default TabelKNN