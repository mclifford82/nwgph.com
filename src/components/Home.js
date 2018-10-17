import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Container, Dropdown, Grid, Header, Icon, List, Menu, Segment } from 'semantic-ui-react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class AddNewPost extends Component {
  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              Martin Clifford Photography
            </Menu.Item>
            <Dropdown item simple text='Products/Services'>
              <Dropdown.Menu>
                <Dropdown.Header>Products</Dropdown.Header>
                <Dropdown.Item>Digital Licensing</Dropdown.Item>
                <Dropdown.Item>Canvas Prints</Dropdown.Item>
                <Dropdown.Item>Posters</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Services</Dropdown.Header>
                <Dropdown.Item>Product Photography</Dropdown.Item>
                <Dropdown.Item>On-site Farm Photography</Dropdown.Item>
                <Dropdown.Item>Dispensary / Staff Photography</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item as='a'>
              <Icon name='instagram' />
              follow me on Instagram
            </Menu.Item>
          </Container>
        </Menu>

        {/*<Segment
          vertical
          style={{ margin: '0em 0em 0em', padding: '3em 0em' }}
        >
          <Container textAlign='center'>
            <Grid divided stackable>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Header as='h4' content='Product Photography' />
                  <List>
                    <List.Item>Cured Flowers</List.Item>
                    <List.Item>Live Flower Branches</List.Item>
                    <List.Item>Cannabis Extracts</List.Item>
                    <List.Item>Edibles / Topicals</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Header as='h4' content='On Site Photography' />
                  <List>
                    <List.Item>Cured Flowers</List.Item>
                    <List.Item>Live Flower Branches</List.Item>
                    <List.Item>Dispensary / Staff Photos</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Header as='h4' content='Art Products' />
                  <List>
                    <List.Item>Canvas Prints</List.Item>
                    <List.Item>High Quality Stickers</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
      </Segment>*/}

        <Container style={{ marginTop: '4em' }}>
          <Carousel
            infiniteLoop
            autoPlay
            stopOnHover
            emulateTouch
            interval={5000}>
          <div>
            <img src="assets/headband.jpg" alt="Headband" />
            <div className="legend">
              <p>Headband - OG Kush x Sour Diesel</p>
              <p>On-site Farm Shoot for Heroes of the Farm</p>
            </div>
          </div>
          <div>
            <img src="assets/gorillasnacks.jpg" alt="Gorilla Snacks" />
            <div className="legend">
              <p>Gorilla Snacks - GG4 x (Scooby Snacks x Mystery Machine)</p>
              <p>On-site Farm Shoot for Heroes of the Farm</p>
            </div>
          </div>
          <div>
            <img src="assets/orangecookies.jpg" alt="Orange Cookies" />
            <div className="legend">
              <p>Orange Cookies - Orange Juice x Girl Scout Cookies</p>
              <p>On-site Farm Shoot for Heroes of the Farm</p>
            </div>
          </div>
          <div>
            <img src="assets/scoobysnacks.jpg" alt="Scooby Snacks" />
            <div className="legend">
              <p>Scooby Snacks - get the genetics</p>
              <p>On-site Farm Shoot for Pigfarm Botanicals</p>
            </div>
          </div>
          <div>
            <img src="assets/quantumkush.jpg" alt="Quantum Kush" />
            <div className="legend">
              <p>Quantum Kush - get the genetics</p>
              <p>Product photo for DubbleBFarmz, Washington</p>
            </div>
          </div>
          <div>
            <img src="assets/locktite_seeds.jpg" alt="Locktite F1 Seeds" />
            <div className="legend">
            <p>Locktite F1 Seeds</p>
            <p>Product photo</p>
            </div>
          </div>
          <div>
            <img src="assets/diamondsinjar.jpg" alt="Dogwalker Diamonds - Live Resin" />
            <div className="legend">
            <p>Dogwalker Live Resin Jar - Willamette Valley Alchemy x Doghouse</p>
            <p>Product photo for Natural Wonders Dispensary, Portland</p>
            </div>
          </div>

          </Carousel>
        </Container>

      </div>
    );
  }
}
