import React from 'react'

const SendComplaint = () => {
  return (
    <div>
      
      <div>
            <div className="container my-3">
                <h2>Add a Note</h2>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp"  />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Desciption</label>
                        <input type="text" className="form-control" id="description" name="description"  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" />
                    </div>
                   
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>

            </div>
        </div>

    </div>
  )
}

export default SendComplaint
