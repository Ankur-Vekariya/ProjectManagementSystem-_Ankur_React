import React from 'react'

export const Logout = () => {
  return (
    <div>Logout
        <div className="content-body">
                <div className="container-fluid">
                <form onSubmit={login1}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        onChange={(e) => { setemail(e.target.value) }}
                    />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                        onChange={(e) => { setpassword(e.target.value) }}
                    />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
                {/* <ToastContainer
                    position="top-right"
                    autoClose={1800}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                /> */}
            </form>
                </div>
            </div>    
    </div>
  )
}
