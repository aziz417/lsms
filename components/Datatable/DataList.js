import DataTable from 'react-data-table-component';
import {useState, useMemo, useCallback, useEffect, use} from 'react';
import DeleteModal from '../Modals/DeleteModal';
import {differenceBy} from '../../halpers/helper';

export default function DataList(props) {
    const [selectedRows, setSelectedRows] = useState([]);
    const [multipleDeleteItems, setMultipleDeleteItems] = useState([]);
    const [multipleDelete, setMultipleDelete] = useState(false);
    const [toggleCleared, setToggleCleared] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [columns, setColumns] = useState([]);
    const [columnsHideShow, setColumnsHideShow] = useState(true);
    const [search_and_hide_columns, setSearch_and_hide_columns] = useState([]);

    useEffect(() => {
        setData(props.data)
        setMultipleDelete(props.multipleDeleteManage)
        setColumns(props.columns)
        setSearch_and_hide_columns(props.search_and_hide_columns)

    }, [props?.data])

    useEffect(() => {
        const searchResult = props.data.filter((item) => {
            const hide_columns = Object.keys(search_and_hide_columns)
            for (let i = 0; i < hide_columns.length; i++) {
                if (search_and_hide_columns[hide_columns[i]]['search'] === true){
                    if (item[hide_columns[i]].match(search)) {
                        return item;
                        break
                    }
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
                    return Object.assign(clm, {omit: columnsHideShow})
                }
            }
            return clm

        })

        setColumns(new_columns)
        setColumnsHideShow(!columnsHideShow)
    }


    const setting = (type, clm) => {
        let search_hide_new_obj = {};

        const objectKeys = Object.keys(search_and_hide_columns);
        for (let i = 0; i < objectKeys.length; i++) {
            if (clm === objectKeys[i]) {
                if (type === 'search') {
                    Object.assign(search_hide_new_obj, {
                        [`${objectKeys[i]}`]: {
                            label: search_and_hide_columns[objectKeys[i]]['label'],
                            search: !search_and_hide_columns[objectKeys[i]]['search'],
                            column_hide: search_and_hide_columns[objectKeys[i]]['column_hide'],
                        }
                    })
                } else {
                    Object.assign(search_hide_new_obj, {
                        [`${objectKeys[i]}`]: {
                            label: search_and_hide_columns[objectKeys[i]]['label'],
                            search: search_and_hide_columns[objectKeys[i]]['search'],
                            column_hide: !search_and_hide_columns[objectKeys[i]]['column_hide'],
                        }
                    })
                }
            } else {
                Object.assign(search_hide_new_obj, {
                    [`${objectKeys[i]}`]: {
                        label: search_and_hide_columns[objectKeys[i]]['label'],
                        search: search_and_hide_columns[objectKeys[i]]['search'],
                        column_hide: search_and_hide_columns[objectKeys[i]]['column_hide'],
                    }
                })
            }
        }

        setSearch_and_hide_columns((pre) => search_hide_new_obj)
        const new_columns = columns.map((clmN) => {
            for (var key in search_and_hide_columns) {
                if (key === clm && clmN.column_name === clm && type === 'column_hide') {
                    return Object.assign(clmN, {omit: search_and_hide_columns[clm][type]})
                }
            }
            return clmN
        })
        setColumns(new_columns)
    }


    return <>
        <button onClick={hloBtn}>Test</button>
        {
            multipleDelete == true && multipleDeleteItems.length > 1 ?
                <button className="btn btn-danger" data-toggle="modal" data-target="#my-modal">Selected Items
                    Delete</button>
                : ''
        }

        <DeleteModal clickHandel={itemDelete}/>
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
                                <div className='text-center p-2'><strong>Table Setting</strong></div>
                                <div className="dropdown-divider"/>

                                <div className='d-flex justify-content-center p-2 text-xs'>
                                    <div className='w-50'><label>Field Name:</label></div>
                                    <div className='d-flex justify-content-between'>
                                        <label className='px-2'>Search:</label>
                                        <label className='px-2'>Hide/Show:</label>
                                    </div>
                                </div>
                                <div className="dropdown-divider"/>

                                {Object.keys(search_and_hide_columns)?.map((clm) => {

                                    return (
                                        <div key={search_and_hide_columns[clm].label}
                                             className='d-flex justify-content-center p-2 text-xs'>
                                            <div className='w-50 d-flex justify-content-start'>
                                                <label>{search_and_hide_columns[clm].label}</label>
                                            </div>
                                            <div className='d-flex justify-content-between w-50'>
                                                <input
                                                    checked={search_and_hide_columns[clm].search}
                                                    className='from-control'
                                                    type="checkbox"
                                                    onChange={() => setting('search', clm)}
                                                />
                                                <input
                                                    checked={search_and_hide_columns[clm].column_hide}
                                                    className='from-control mr-5'
                                                    type="checkbox"
                                                    onChange={() => setting('column_hide', clm)}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}

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
