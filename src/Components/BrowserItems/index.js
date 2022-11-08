import {Component} from 'react'

import './index.css'

class BrowserItems extends Component {
  render() {
    const {eachItem, onDeleteUser} = this.props
    const {id, timeAccessed, logoUrl, domainUrl, title} = eachItem

    const onDelete = () => {
      onDeleteUser(id)
    }

    return (
      <li className="comp-cont">
        <p className="time">{timeAccessed}</p>
        <div className="comp-cont-img-domain">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="name">
            <p>{title}</p>
            <p> {domainUrl}</p>
          </div>
        </div>
        <div className="delete">
          <button
            type="button"
            onClick={onDelete}
            value={id}
            className="button"
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete"
              onClick={onDelete}
            />
          </button>
        </div>
      </li>
    )
  }
}

export default BrowserItems
