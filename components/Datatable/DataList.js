
import DataTable from 'react-data-table-component';

export default function DataList(props) {
  
    return <>

        <DataTable
            columns={props.columns}
            data={props.data}
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
          

        />
    </>
}