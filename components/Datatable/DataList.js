
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

    useEffect(() => {
        setData(props.data)
        setMultipleDelete(props.multipleDeleteManage)
    }, [props?.data])

    useEffect(() => {
        const searchResult = data.filter((item) => {
            // console.log(item.first_name);
            props.columns?.map((column) => {
                if (column.search == true) {
                    return item[column.column_name].match(search)
                }
            })
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


    return <>
        {
            multipleDelete == true && multipleDeleteItems.length > 1 ?
                <button className="btn btn-danger" data-toggle="modal" data-target="#my-modal">Selected Items Delete</button>
                : ''
        }

        <DeleteModal clickHandel={itemDelete} />
        <DataTable
            columns={props.columns}
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
                <input
                    type={'text'}
                    placeholder="Search here"
                    onChange={(e) => setSearch(e.target.value)}
                    className='form-control w-50'
                />}
        />
    </>
}