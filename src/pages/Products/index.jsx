import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Pagination from '@material-ui/lab/Pagination';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Tooltip from '@material-ui/core/Tooltip';
import { Search, Description } from '@material-ui/icons';

// OTHER IMPORTS
import APIRequest from '../../api/APIRequest';
import Loader from '../../components/Loader';
import { useStyles } from '../../assets/styles/GlobalStyle';
import { productColumns } from '../../helper/StaticData';


const ProductPage = () => {
    // VARIABLES
    const limit = 10
    const classes = useStyles()

    // STATE
    const [total, setTotal] = useState(0)
    const [pagination, setPagination] = useState(1)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    // LIFECYCLE
    useEffect(() => {
        const getProdukData = () => {
            setLoading(true)
            const body = { limit, offset: pagination }
            APIRequest.post('admin/showProduk', body)
            .then(({data}) => {
                console.log("Products", data)
                // setProducts(data.data.data)
                // if (data.data.total) setTotal(data.data.total)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }

        getProdukData()
    }, [pagination])

    // RENDER
    return (
        <div>
            
            <div className={classes.titleBar}>
                <h2 className={classes.opacity70}>
                    Products
                </h2>
                <div className={classes.flexRow}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </div>
            </div>

            <TableContainer className={classes.tableContainer}>
                {
                    loading
                    ? <Loader />
                    : <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {productColumns.map(column => (
                                    <TableCell
                                        size="small"
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontWeight: 'bold', color: '#4c4c4c' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products ? products.map((row,idx) => (
                                <TableRow hover tabIndex={-1} key={idx}>
                                    <TableCell>
                                        {(pagination-1) * limit + (idx+1)}
                                    </TableCell>
                                    <TableCell>
                                        {row.title}
                                    </TableCell>
                                    <TableCell>
                                        {row.stock}
                                    </TableCell>
                                    <TableCell>
                                        {row.price}
                                    </TableCell>
                                    <TableCell>
                                        {row.discount}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Tooltip className={classes.mx1} title="Detail">
                                            <Link to={`/product/${row.id}`}>
                                                <IconButton size="small">
                                                    <Description fontSize="small" color="primary" />
                                                </IconButton>
                                            </Link>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            )) : null}
                        </TableBody>
                    </Table>
                }
            </TableContainer>

            <Pagination
                size="small"
                color="primary"
                showLastButton
                showFirstButton
                page={pagination}
                count={Math.ceil(total/limit)}
                onChange={(event, page) => setPagination(page)}
            />
            
        </div>
    );
};

export default ProductPage;