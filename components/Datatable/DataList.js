
import DataTable from 'react-data-table-component';
import { useState, useMemo, useCallback, useEffect } from 'react';
import CustomButton from '../Buttons/CustomButton';
import DeleteModal from '../Modals/DeleteModal';
import { differenceBy } from '../../halpers/helper';

export default function DataList(props) {
    const [selectedRows, setSelectedRows] = useState([]);
    const [multipleDeleteItems, setMultipleDeleteItems] = useState([]);
    const [multipleDelete, setMultipleDelete] = useState(false);
    const [toggleCleared, setToggleCleared] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [columns, setColumns] = useState([]);
    const [columnsHideShow, setColumnsHideShow] = useState(true);

    useEffect(() => {
        setData(props.data)
        setMultipleDelete(props.multipleDeleteManage)
        setColumns(props.columns)

    }, [props?.data])

    useEffect(() => {
        const searchResult = props.data.filter((item) => {

            for (let i = 0; i < props.search_columns_name.length; i++) {
                if (item[props.search_columns_name[i]].match(search)) {
                    return item;
                    break
                }
            }

        })

        if (search) {
            setData(searchResult)
        } else {
            setData(props.data)
        }

    }, [search])


    const handleRowSelected = useCallback(state => {

        setSelectedRows(state.selectedRows);
        state.selectedRows.length > 0 ? setMultipleDeleteItems(() => state.selectedRows.map(item => item.id)) : setMultipleDeleteItems([])

    }, []);


    const itemDelete = (type) => {
        if (type == 'delete') {
            setToggleCleared(!toggleCleared);
            setData(differenceBy(data, selectedRows, 'id'));

            // api call multipleDeleteItems 
        } else {
            setToggleCleared(!toggleCleared);
        }
    }

    const hide_clmns = ['Email', 'Phone']

    const hloBtn = () => {

        const new_columns = columns.map((clm) => {
            for (let i = 0; i < hide_clmns.length; i++) {

                if (clm.name === hide_clmns[i]) {
                    return Object.assign(clm, { omit: columnsHideShow })
                }
            }
            return clm

        })

        setColumns(new_columns)
        setColumnsHideShow(!columnsHideShow)
    }


    return <>

        <button onClick={hloBtn}>Test</button>
        {
            multipleDelete == true && multipleDeleteItems.length > 1 ?
                <button className="btn btn-danger" data-toggle="modal" data-target="#my-modal">Selected Items Delete</button>
                : ''
        }

        <DeleteModal clickHandel={itemDelete} />
        <DataTable
            columns={columns}
            data={data}
            pagination
            fixedHeader
            fixedHeaderScrollHeight='450px'
            selectableRows
            selectableRowsHighlight
            responsive={true}
            highlightOnHover="on"
            pointerOnHover="on"
            onColumnOrderChange="on"
            keyField="id"
            defaultSortFieldId="on"
            // actions={<button className='btn btn-sm btn-info'>Export</button>}
            onSelectedRowsChange={handleRowSelected}
            clearSelectedRows={toggleCleared}

            subHeader
            subHeaderComponent={
                <>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link mr-4"
                                data-toggle="dropdown" href="#">
                                <i className="fa fa-cog" aria-hidden="true"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <div className="dropdown-divider" />
                                <table className='table'>
                                    <thead>
                                        <tr><th>F.N: </th>
                                            <th>Search: </th>
                                            <th>Hide/Show: </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='text-xs'>First Name: </td>
                                            <td><input className='from-control' type="checkbox" /></td>
                                            <td><input className='from-control' type="checkbox" /></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="dropdown-divider" />
                            </div>
                        </li>
                    </ul>
                    <input
                        type={'text'}
                        placeholder="Search here"
                        onChange={(e) => setSearch(e.target.value)}
                        className='form-control w-25'
                    />
                </>
            }
        />
    </>
}