import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? "top" : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image
                  size="mini"
                  src="https://react.semantic-ui.com/logo.png"
                />
              </Menu.Item>
              <Menu.Item header>Movies App</Menu.Item>
              <Menu.Item as={Link} to="movies">
                Movies
              </Menu.Item>
              <Menu.Item>Add New</Menu.Item>
            </Container>
          </Menu>
        </Visibility>
            </div>
        )
    }
}

export default Header
