import React from 'react'

class EmpleadoAvatar extends React.Component {
  render() {
      return (
      <figure className="media-left">
        <img className="media-object" width="64px" src={`http://joeldeval.xyz/inicio/wp-content/uploads/2016/02/${this.props.picture}`} />
      </figure>
    )
  }
}

export default EmpleadoAvatar
