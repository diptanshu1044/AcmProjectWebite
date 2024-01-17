import CardElement from "../CardElement/CardElement";

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
      <div className="flex flex-grow justify-evenly">
        {cardInfo.map((item) => {
          
          return <CardElement title={item.title} content={item.content} key={i++} />
        })}
      </div>
    </div>
  )
}

export default SixthComponent;