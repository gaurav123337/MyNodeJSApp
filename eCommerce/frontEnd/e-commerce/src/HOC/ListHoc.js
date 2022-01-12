import React from "react";


const HigherOrderComponent = WrappedComponent => {
  class HOC extends React.Component {

    editUser = (e) => {
      console.log(e)
    }
    deleteUser = (e) => {
      console.log(e)
    }

    render() {
      return (
        <>
          <WrappedComponent />
          <button type="button" className="btn btn-primary" onClick={(e) => this.editUser(e)}>Primary</button>
          <button type="button" className="btn btn-danger" onClick={(e) => this.deleteUser(e)}>Danger</button>
        </>
      )
    }
  }
  return HOC
}

export default HigherOrderComponent;
