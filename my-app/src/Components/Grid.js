import React from 'react'
import VerticalNav from './VerticalNav'
import DonationTextContainer from './DonationTextContainer'
import FluidImage from './FluidImage'
import StripeCheckOut form './Stripe'
import { Grid, Image, Menu } from 'semantic-ui-react'

const DoubleGrid = () => (
  <Grid columns={5} stretched={true} divided>
    <Grid.Row>
      <Grid.Column>
        <FluidImage src="../images/houselogo.png"/>
        <VerticalNav/>
      </Grid.Column>
      <Grid.Column>
        <DonationTextContainer/>
        <StripeCheckOut/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default DoubleGrid
