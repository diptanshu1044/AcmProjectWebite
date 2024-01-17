import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';


const CardElement = ({ title, content, style }) => {
  return (
    <Card sx={{ width: '330px', backgroundColor: '#6f41f6', padding: '70px 35px 46px 50px', margin: '2rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
      <h2 style={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold', marginBottom: '1rem', marginLeft: '10px', marginRight: '10px' }}>
        {title}
      </h2>
      <CardContent sx={{ color: 'white' }}>
        {content}
      </CardContent>
    </Card>
  )
}

export default CardElement;