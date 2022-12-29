import Link from 'next/link'
import { useEffect, useState } from 'react';
import CustomLink from '../../components/Buttons/CustomLink'
import DataList from '../../components/Datatable/DataList';
import Admin from "../../layouts/Admin.js";
import api from "../../apis/v1"
import { toast } from 'react-toastify';
import CustomButton from '../../components/Buttons/CustomButton';



export default function Index() {
    const [allData, setAllData] = useState([]);
	const [hideDirector, setHideDirector] = useState(false);


    const allDataGet = async () => {
        try {
            const { data } = await api.admins()
            setAllData(data?.data)

        } catch (e) {
            dfg
            toast.warning(e)
        }
    }

    useEffect(() => {
        allDataGet()
    }, [])

    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true,
            column_name: 'id'
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            column_name: 'name'

        },
       
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
            column_name: 'phone'

        },
        {
            name: 'Action',
            cell: row => <>
                <CustomButton
                    type="button"
                    classes="btn-sm btn-success btn m-1"
                    icon="fa fa-eye"
                />
                <CustomButton
                    type="button"
                    classes="btn-sm btn-primary btn m-2"
                    icon="fa fa-pen mr-1"
                />
                <CustomButton
                    type="button"
                    classes="btn-sm btn-danger btn m-1"
                    icon="fa fa-trash"
                />
            </>,
        },

    ];

    const search_columns_name = ['name', 'phone']

    const search_and_hide_columns = {
        'name'  : { label: 'Name', search: true, column_hide: false },
        'phone' : { label: 'Phone', search: true, column_hide: true },
    }

    return <>
        <div>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className=" d-flex justify-content-between align-items-center">
                            <h3 className='fs-md fs-sm fs-xs'>Admin Index</h3>

                            <CustomLink icon="fa fa-plus mr-1" classes="float-right btn-sm btn-success" title="Add New" url="/admins/add" />
                        </div>
                    </div>
                </section>

                <button onClick={() => setHideDirector(!hideDirector)}>Hide Directory Column</button>
                <DataList columns={columns} data={allData} multipleDeleteManage={true} search_columns_name={search_columns_name} search_and_hide_columns={search_and_hide_columns} />
            </div>
        </div>
    </>

}

Index.layout = Admin;