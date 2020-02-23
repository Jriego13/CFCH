import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class VerticalNav extends Component {
  state = { activeItem: 'donations' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{height:'100vh'}} pointing secondary vertical>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='staff'
          active={activeItem === 'staff'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='donations'
          active={activeItem === 'donations'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
