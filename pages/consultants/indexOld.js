import Link from 'next/link'
import CustomLink from '../../components/Buttons/CustomLink'
import DataList from '../../components/Datatable/DataList';
import Admin from "../../layouts/Admin.js";

export default function Index() {

  return <>
    <div>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className=" d-flex justify-content-between align-items-center">
              <h3 className='fs-md fs-sm fs-xs'>Consultant Index</h3>

              <CustomLink icon="fa fa-plus mr-1" classes="float-right btn-sm btn-success" title="Add New" url="/consultants/add" />
            </div>
          </div>
        </section>

        <div className="container-fluid">
          <div className="row mt-1">
            <div className="col-md-12">
              <div className="card card-primary">
                <div className="card-header">
                  <div className='row d-flex justify-content-between align-items-center'>

                    <div className='col-md-6 col-12'>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div>
                          <button type="button"
                            className="btn-sm btn-warning dropdown-toggle"
                            data-toggle="dropdown" aria-expanded="false">
                            Per Page: <span>10</span>
                          </button>
                          <ul className="dropdown-menu">
                            <li className="dropdown-item">10</li>
                            <li className="dropdown-item">20</li>
                            <li className="dropdown-item">40</li>
                            <li className="dropdown-item">100</li>
                          </ul>
                        </div>

                        <button type="button"
                          className="btn-sm btn-warning" >
                          Reset
                        </button>
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className='d-flex justify-content-center align-items-center'>
                        <label className='mr-2'>Search:  </label>
                        <input type="search" className="form-control form-control-sm" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body p-0">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        {/* <th>Image</th> */}
                        <th>Phone</th>
                        {/* <th>Email</th> */}
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>Json Holder</td>
                        {/* <td>Image</td> */}
                        <td>01797435436</td>
                        {/* <td>example@gmail.com</td> */}
                        <td>
                          <button className='btn btn-success'><i className='fa fa-eye'></i></button>
                          {/* <button type='button' title='Edit This Item' className='btn btn-xs btn-success mr-2'>Edit</button> */}
                          {/* <button type='button' title='Delete This Item' className='btn btn-xs btn-danger'><i className='fa fa-trash'></i></button> */}
                        </td>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Json Holder</td>
                        {/* <td>Image</td> */}
                        <td>01797435436</td>
                        {/* <td>example@gmail.com</td> */}
                        <td>
                          <button className='btn btn-success'><i className='fa fa-eye'></i></button>
                          {/* <button type='button' title='Edit This Item' className='btn btn-xs btn-success mr-2'>Edit</button> */}
                          {/* <button type='button' title='Delete This Item' className='btn btn-xs btn-danger'><i className='fa fa-trash'></i></button> */}
                        </td>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Json Holder</td>
                        {/* <td>Image</td> */}
                        <td>01797435436</td>
                        {/* <td>example@gmail.com</td> */}
                        <td>
                          <button className='btn btn-success'><i className='fa fa-eye'></i></button>
                          {/* <button type='button' title='Edit This Item' className='btn btn-xs btn-success mr-2'>Edit</button> */}
                          {/* <button type='button' title='Delete This Item' className='btn btn-xs btn-danger'><i className='fa fa-trash'></i></button> */}
                        </td>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Json Holder</td>
                        {/* <td>Image</td> */}
                        <td>01797435436</td>
                        {/* <td>example@gmail.com</td> */}
                        <td>
                          <button className='btn btn-success'><i className='fa fa-eye'></i></button>
                          {/* <button type='button' title='Edit This Item' className='btn btn-xs btn-success mr-2'>Edit</button> */}
                          {/* <button type='button' title='Delete This Item' className='btn btn-xs btn-danger'><i className='fa fa-trash'></i></button> */}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h2>second design</h2>

                  <div className='table-custom'>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Image</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>Json Holder</td>
                          <td>Image</td>
                          <td>01797435436</td>
                          <td>example@gmail.com</td>
                          <td>
                            <button type='button' title='Edit This Item' className='btn btn-xs btn-success mr-2'>Edit</button>
                            <button type='button' title='Delete This Item' className='btn btn-xs btn-danger'><i className='fa fa-trash'></i></button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Json Holder</td>
                          <td>Image</td>
                          <td>01797435436</td>
                          <td>example@gmail.com</td>
                          <td>
                            <button type='button' title='Edit This Item' className='btn btn-xs btn-success mr-2'>Edit</button>
                            <button type='button' title='Delete This Item' className='btn btn-xs btn-danger'><i className='fa fa-trash'></i></button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Json Holder</td>
                          <td>Image</td>
                          <td>01797435436</td>
                          <td>example@gmail.com</td>
                          <td>
                            <button type='button' title='Edit This Item' className='btn btn-xs btn-success mr-2'>Edit</button>
                            <button type='button' title='Delete This Item' className='btn btn-xs btn-danger'><i className='fa fa-trash'></i></button>
                          </td>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Json Holder</td>
                          <td>Image</td>
                          <td>01797435436</td>
                          <td>example@gmail.com</td>
                          <td>
                            <button type='button' title='Edit This Item' className='btn btn-xs btn-success mr-2'>Edit</button>
                            <button type='button' title='Delete This Item' className='btn btn-xs btn-danger'><i className='fa fa-trash'></i></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right">
                      <li className="page-item"><a className="page-link" href="#">«</a></li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">»</a></li>
                    </ul>
                  </div>
                </div>
                {/* /.card-body */}
              </div>
            </div>
          </div>
        </div>

        <DataList />
      </div>

      
    </div>
  </>

}

Index.layout = Admin;