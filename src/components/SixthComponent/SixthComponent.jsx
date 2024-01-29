import CardElement from "../CardElement/CardElement";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';

const SixthComponent = () => {
  let i = 1;
  const cardInfo = [
    {
      title: 'Complete Product For Your Business',
      content: 'We build the template that is rich in content and has a good user interface to deliver a premium user experience for your customers.',
      style: { width: '330px', backgroundColor: '#59c98d', padding: '70px 35px 46px 50px', margin: '2rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }
    }, {
      title: 'SEO and SMM Friendly',
      content: 'Our template is SEO and SMM friendly that aligns with your digital marketing strategies to bring more organic traffic to your website.',
      style: { width: '330px', backgroundColor: '#5ac9fa', padding: '70px 35px 46px 50px', margin: '2rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }
    }, {
      title: 'Nicely Organized Code',
      content: 'The coding structure of our items is organized so other developers can easily recognize the pattern and make updates as needed.',
      style: { width: '330px', backgroundColor: '#6f41f6', padding: '70px 35px 46px 50px', margin: '2rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }
    }
  ];

  return (
    <div className=" bg-white h-[80rem]">
      <div className=" pt-20 pl-20">
        <span className=" text-[#00c6cf] text-base px-4 tracking-widest">Our Specilities</span>
        <h2 className=" font-bold text-[5rem] text-black mb-10">
          Why You Should <br /> Choose Us
        </h2>
      </div>
      <div className="flex justify-around">
        <Card sx={{ width: '330px', backgroundColor: '#59c98d', padding: '70px 35px 46px 50px', margin: '', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold', marginBottom: '1rem', marginLeft: '10px', marginRight: '10px' }}>
            Complete Product For Your Business
          </h2>
          <CardContent sx={{ color: 'white' }}>
            We build the template that is rich in content and has a good user interface to deliver a premium user experience for your customers.
          </CardContent>
        </Card>
        <Card sx={{ width: '330px', backgroundColor: '#5ac9fa', padding: '70px 35px 46px 50px', margin: '', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold', marginBottom: '1rem', marginLeft: '10px', marginRight: '10px' }}>
            SEO and SMM Friendly
          </h2>
          <CardContent sx={{ color: 'white' }}>
            Our template is SEO and SMM friendly that aligns with your digital marketing strategies to bring more organic traffic to your website.
          </CardContent>
        </Card>
        <Card sx={{ width: '330px', backgroundColor: '#6f41f6', padding: '70px 35px 46px 50px', margin: '', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold', marginBottom: '1rem', marginLeft: '10px', marginRight: '10px' }}>
            Nicely Organized Code
          </h2>
          <CardContent sx={{ color: 'white' }}>
            The coding structure of our items is organized so other developers can easily recognize the pattern and make updates as needed.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SixthComponent;