import React from "react";
import {bindActionCreators} from "redux";


class UserStatus extends React.Component {


  state = {
    editMode: false,
    status: this.props.status
  }

  activeEdit = () => {

    this.setState( {
      editMode: true,

    })

  }

  deactiveEdit = (e) => {

    if (e.key === 'Enter') {
      this.setState( {
        editMode: false,
      })
      this.props.newStatus(this.state.status)
    } else {
      this.setState( {
        editMode: false,
      })
      this.props.newStatus(this.state.status)
    }
  }
  onStatusChange = (e) => {

    this.setState( {
      status: e.currentTarget.value
    })
}

componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status ) {
      this.setState( {
        status: this.props.status
      })
    }
}


  render() {

    return (
      <div>
        <div> { !this.state.editMode && <span onClick={this.activeEdit}>{this.props.status || 'no status'}</span>}

        </div>
        <div> { this.state.editMode && <input
                                              autoFocus={true}
                                              onBlur={this.deactiveEdit}
                                              onChange={this.onStatusChange}
                                              value={this.state.status} type="text"/> }

        </div>
      </div>
    )
  }
}

export default UserStatus