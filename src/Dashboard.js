import React from 'react'

class Dashboard extends React.Component {
  render(props) {
    return (
      <div>
        <h1>Welcome to your dashboard</h1>
        <button onClick={this.props.onClick}>Log Out</button>
      </div>
    )
  }
}

export default Dashboard;
