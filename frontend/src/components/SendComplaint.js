import React from 'react'

const SendComplaint = ({ isDarkTheme }) => {
  return (
    <div>
      
      <div>
            <div className={`container my-3 ${isDarkTheme?'bg-dark':'bg-light'}`}>
                <h2 className={`text-${isDarkTheme?"light":"dark"}`}>Add a complaint</h2>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className={`form-label text-${isDarkTheme?"light":"dark"}`} >Complaint</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp"  />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className={`form-label text-${isDarkTheme?"light":"dark"}`}>Desciption</label>
                        <input type="text" className="form-control" id="description" name="description"  />
                    </div>
                  
                    <button type="submit" className={`btn btn-${isDarkTheme?'light':'dark'} my-2`} >Submit</button>
                </form>

            </div>
        </div>

    </div>
  )
}

export default SendComplaint
