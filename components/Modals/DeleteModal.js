export default function DeleteModal(props) {
    return <>
        <div className="container d-flex justify-content-center">
            <div id="my-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content border-0">
                        <div className="modal-body p-0">
                            <div className="card border-0 p-sm-3 mb-0 p-2 justify-content-center">
                                <div className="card-header pb-0 bg-white border-0 ">
                                    <div className="row">
                                        <div className="col ml-auto">
                                            <button onClick={() => {
                                                props.clickHandel('cancel')
                                            }}  type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="font-weight-bold mb-2"> Are you sure you wanna delete this ?</p>
                                </div>
                                <div className="card-body px-sm-4 mb-2 pt-1 pb-0">
                                    <div className="row justify-content-end no-gutters">
                                        <div className="col-auto">
                                            <button type="button" onClick={() => {
                                                props.clickHandel('cancel')
                                            }} className="btn-xs btn-success" data-dismiss="modal">Cancel</button>
                                        </div>
                                        <div className="col-auto">
                                            <button type="button" onClick={() => {
                                                props.clickHandel('delete')
                                            }} className="btn-xs btn-danger px-2 ml-1" data-dismiss="modal">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}