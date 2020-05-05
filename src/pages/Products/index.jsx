import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { MDBDataTable, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const myData = {
    columns: [
        {
            label: '#',
            field: 'id',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 10
          },
          {
            label: 'Price',
            field: 'price',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Stock',
            field: 'stock',
            sort: 'asc',
            width: 100
          }
    ],
    rows: [
        { id: 1, name: 'Final Fantasy VII Remake', price: <NumberFormat value={1199000} displayType={'text'} thousandSeparator/>, stock: 20 },
        { id: 2, name: 'Dead By Deadlight', price: <NumberFormat value={499000} displayType={'text'} thousandSeparator/>, stock: 4 },
        { id: 3, name: 'Monster Hunter World', price: <NumberFormat value={699000} displayType={'text'} thousandSeparator/>, stock: 12 },
        { id: 4, name: 'Warriors Orochi 4', price: <NumberFormat value={375000} displayType={'text'} thousandSeparator/>, stock: 10 },
    ]
}

class Products extends Component {
    state = {
        columns: ['#', 'Name', 'Price', 'Stock'],
        data: [
            { id: 1, name: 'Final Fantasy VII Remake', price: 1200000, stock: 20 },
            { id: 2, name: 'Dead By Deadlight', price: 499000, stock: 4 },
            { id: 3, name: 'Monster Hunter World', price: 750000, stock: 12 },
            { id: 4, name: 'Warriors Orochi 4', price: 499000, stock: 10 },
        ]
    }

    // LIFECYCLE
    componentDidMount() {
        document.title = "ALVIN SHOP | Products"
    }
    
    // MAIN RENDER
    render() {
        return (
            <div className="container-fluid">

                <div className="page-title">
                    <h2>Products</h2>
                </div>

                <div className="card">
                    <div className="card-body">
                        <MDBTable hover responsive>
                            <MDBTableHead>
                                <tr>
                                    {this.state.columns.map((column,idx) => (
                                        <td key={idx} className={`font-weight-bold opacity-70 ${column === '#' ? 'text-left' : 'text-center'}`}>
                                            {column}
                                        </td>
                                    ))}
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {this.state.data.map((item,idx) => (
                                    <tr key={idx}>
                                        <td className="text-left">
                                            {item.id}
                                        </td>
                                        <td className="text-left" style={{ minWidth:'7rem' }}>
                                            {item.name}
                                        </td>
                                        <td className="text-center">
                                            <NumberFormat
                                                prefix={'Rp '}
                                                value={item.price}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                            />
                                        </td>
                                        <td className='text-center'>
                                            {item.stock}
                                        </td>
                                    </tr>
                                ))}
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                </div>

                <div className="card mt-5">
                    <div className="card-body">
                        <MDBDataTable
                            small
                            bordered
                            data={myData}
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default Products;