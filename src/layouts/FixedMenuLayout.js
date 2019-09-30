import React from 'react'
import TableExamplePositiveNegative from '../components/TableExamplePositiveNegative'
import ButtonExampleAnimated from '../components/ButtonExampleAnimated'
import PaginationExampleCompact from '../components/PaginationExampleCompact'

import {
  Container,
  Dropdown,
  Header,
  Image,
  Menu,
  Grid,
  Icon
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Icon name='mail outline' size='big' />
          Hello
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container ui style={{ marginTop: '7em' }}>
      <Header as='h1'>Semantic UI React Fixed Template</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>
        A text container is used for the main container, which is useful for single column layouts.
      </p>
      
      <TableExamplePositiveNegative />

      <ButtonExampleAnimated />
 
      <Grid centered>
        <Grid.Row />
        <PaginationExampleCompact />
        <Grid.Row />
      </Grid>
      
    </Container>
  </div>
)

export default FixedMenuLayout