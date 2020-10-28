import React from 'react';

export default function Box(props) {
    return (
      <div className="form-container bg-dark p-5">
        <form className="card bg-dark text-light p-5">
        <div className="row">
        <div className="form-group col-md-6">
          <label for="text">Username</label> 
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-user"></i>
              </div>
            </div>  
            <input id="text" name="text" placeholder="Enter Username" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group col-md-6">
          <label for="email">Email</label> 
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-envelope"></i>
              </div>
            </div> 
            <input id="email" name="email" placeholder="Enter Email" type="text" className="form-control" />
          </div>
        </div>
        {/* user and email end */}
        </div>
​

​
        <div className="row">
        <div className="form-group col-md-6">
          <label for="address">Address</label> 
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-home"></i>
              </div>
            </div> 
            <input id="address" name="address" placeholder="Street, Number, City, Zip" type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group col-md-6">
          <label for="select">Course</label> 
          <div>
            <select id="select" name="select" className="custom-select">
              <option value="">Select Course</option>
              <option value="physics">Physics</option>
              <option value="biology">Biology</option>
              <option value="nath">Math</option>
            </select>
          </div>
        </div>
​
        <div className="form-group col-md-12 text-center">
          <label>Gender</label> 
          <div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="gender" id="gender_0" type="radio" className="custom-control-input" value="female" /> 
              <label for="gender_0" className="custom-control-label">Female</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="gender" id="gender_1" type="radio" className="custom-control-input" value="male" /> 
              <label for="gender_1" className="custom-control-label">Male</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input name="gender" id="gender_2" type="radio" className="custom-control-input" value="other" /> 
              <label for="gender_2" className="custom-control-label">Other</label>
            </div>
          </div>
        </div> 
​
        </div>
        
        <div className="form-group pb-5 pt-2">
          <button name="submit" type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
        </div>
      </form>
      </div>
    );
}