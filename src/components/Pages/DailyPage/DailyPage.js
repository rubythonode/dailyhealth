import React from 'react';
import { Card, CardText, CardActions, CardTitle, CardMenu } from 'react-mdl/lib/Card';

const DailyPage = () => {
  return (
    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
        </CardActions>
    </Card>
  )
}

export default DailyPage;
