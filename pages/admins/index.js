import Link from 'next/link'
import { useEffect, useState } from 'react';
import CustomLink from '../../components/Buttons/CustomLink'
import DataList from '../../components/Datatable/DataList';
import Admin from "../../layouts/Admin.js";
import api from "../../apis/v1"
import { toast } from 'react-toastify';
import CustomButton from '../../components/Buttons/CustomButton';



export default function Index() {
    const [allData, setAllData] = useState('');

    const allDataGet = async () => {
        try {
            const { data } = await api.admins()
            console.log(data);
            setAllData(data?.data)

        } catch (e) {
            toast.success(data?.message)
        }
    }

    useEffect(() => {
        allDataGet()
    }, [])

    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'First Name',
            selector: row => row.first_name,
            sortable: true
        },
        {
            name: 'Last Name',
            selector: row => row.last_name,
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'Phone',
            selector: row => row.phone,
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

                <DataList columns={columns} data={allData} />
            </div>
        </div>
    </>

}

Index.layout = Admin;