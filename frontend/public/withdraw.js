function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  
  return (
    <div>
      <status>
        {status}
      </status>
      <body class="body">
      {show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
      </body>
    </div>
    // <Card
    //   bgcolor="success"
    //   header="Withdraw"
    //   status={status}
    //   body={show ? 
    //     <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
    //     <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
    // />
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn2" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');  
  const [balance, setBalance] = React.useState('');
  
          

  function handle(){
    fetch(`/account/update/${email}/-${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Withdraw failed Create account or Login To Withdraw')
            console.log('err:', text);
        }
    });
    
  }
  return(<>
  <div className="box">
  <p class="Par">Withdraw Your Money</p>


Email address<br/>
<input type="email" 
  className="form-control" 
  placeholder="Enter your email" 
  value={email} 
  
  onChange={e => setEmail(e.currentTarget.value)}/><br/> 

Amount<br/>
<input type="number" 
  className="form-control" 
  placeholder="Enter the amount" 
  value={amount} 
  onChange={e => setAmount(e.currentTarget.value)}/><br/>

<button type="submit" 
  className="btn2" 
  onClick={handle}>
    Withdraw
</button>

  </div>
  
  


        

  </>);
}
