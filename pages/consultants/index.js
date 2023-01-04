import { useEffect, useState } from 'react';
import CustomLink from '../../components/Buttons/CustomLink'
import DataList from '../../components/Datatable/DataList';
import Admin from "../../layouts/Admin.js";
import api from "../../apis/v1"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import CustomButton from '../../components/Buttons/CustomButton';
import DeleteModal from '../../components/Modals/DeleteModal';


export default function Index() {
    const router = useRouter()

    const [allData, setAllData] = useState([]);
    const [itemDeleteId, setItemDeleteId] = useState();


    const allDataGet = async () => {
        try {
            const { data } = await api.adminConsultants()
            setAllData(data?.data)

        } catch (e) {
            dfg
            toast.warning(e)
        }
    }

    useEffect(() => {
        allDataGet()
    }, [])

    const itemDelete = async (type) => {
        if (type == 'delete') {
            try {

                const { data } = await api.deleteItems('/admins/delete', [itemDeleteId])
                if (data?.status_code === 200) {
                    toast.success(data.message)
                    const filterData = allData?.filter((item) => {
                        return item.id !== itemDeleteId
                    })
                    setAllData(filterData);
                }
            } catch (e) {
                console.log(e);
                toast.warning(e)
            }
        }

    }

    const goToEdit = (id) => {
        router.push(`admins/edit-${id}`)
    }

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
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            column_name: 'email'
        },
        {
            name: 'Address',
            selector: row => row.address,
            sortable: true,
            column_name: 'address'
        },
        {
            name: 'Action',
            column_name: 'action',
            cell: row => <>
                <CustomButton
                    type="button"
                    classes="btn-sm btn-success btn m-1"
                    icon="fa fa-eye"
                />

                {/* <Link
                    className='btn-sm btn-primary btn m-2'
                    href={`/admins/${row.id}-edit`}>
                    <i className='fa fa-pen mr-1'></i>

                </Link> */}
                <button
                    type='button'
                    onClick={() => goToEdit(row.id)}
                    className='btn-sm btn-primary btn m-2'
                >
                    <i className='fa fa-pen mr-1'></i>
                </button>

                <button
                    type='button'
                    onClick={() => setItemDeleteId(pre => row.id)}
                    data-toggle="modal"
                    data-target="#my-modal-single"
                    className='btn-sm btn-danger btn m-1'
                >
                    <i className='fa fa-trash'></i>
                </button>
                {/* <CustomButton
                    type="button"
                    classes="btn-sm btn-danger btn m-1"
                    onClick={itemDelete}
                    icon="fa fa-trash"
                /> */}
            </>,
        },

    ];


    const search_and_hide_columns = {
        'id': { label: 'Id', search: true, column_hide: true, disable: false },
        'name': { label: 'Name', search: true, column_hide: true, disable: false },
        'phone': { label: 'Phone', search: true, column_hide: true, disable: false },
        'email': { label: 'Email', search: true, column_hide: true, disable: false },
        'address': { label: 'Address', search: true, column_hide: true, disable: false },
        'action': { label: 'Action', search: false, column_hide: true, disable: true },
    }

    return <>
        <DeleteModal clickHandel={itemDelete} />

        <div>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className=" d-flex justify-content-between align-items-center">
                            <h3 className='fs-md fs-sm fs-xs'>Admin Index</h3>

                            {/* <CustomLink icon="fa fa-plus mr-1" classes="float-right btn-sm btn-success" title="Add New" url="/admins/add" /> */}
                        </div>
                    </div>
                </section>

                <DataList columns={columns} data={allData} multipleDeleteManage={true} search_and_hide_columns={search_and_hide_columns} />
            </div>
        </div>
    </>

}

Index.layout = Admin;