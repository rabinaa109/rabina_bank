function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <div>
      <status>
        {status}
      </status>
      <body class="body">
      {show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow} setStatus={setStatus}/>}
      </body>
    </div>
    // <Card
    //   bgcolor="warning"
    //   header="Deposit"
    //   status={status}
    //   body={show ? 
    //     <DepositForm setShow={setShow} setStatus={setStatus}/> :
    //     <DepositMsg setShow={setShow} setStatus={setStatus}/>}
    // />
  )
}

function DepositMsg(props){
  
  return (<>
    <h5>Success</h5>
   
    <button type="submit" 
      className="btn2" 
      onClick={() => {
          props.setShow(true);
          props.setStatus('');
      }}>
        Deposit again
    </button>
  </>);
} 

function DepositForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');
  
  function handle(){
    fetch(`/account/update/${email}/${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Deposit failed Create account or Login To Deposit')
            console.log('err:', text);
        }
    });
  }

  return(<> 
  <div className="box">
  <p class="Par">Deposit Your Money</p>
 

  Deposit<br/>
  <input type="email" 
  className="form-control"
  placeholder="Enter your email" 
  value={email} 
  
  onChange={e => setEmail(e.currentTarget.value)}/><br/>  

  Amount<br/>
  <input type="number" 
  className="form-control" 
  placeholder="Enter the amount" 
  value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

 <button type="submit" 
  className="btn2" 
  onClick={handle}>Deposit</button>


</div>  
  
  
  
        
  </>);
}