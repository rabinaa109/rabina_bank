function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <div>
      <status>
      {status}
      </status>
      <body class="body">
      {show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
      </body>
    </div>
    // <Card
    //   bgcolor="info"
    //   header="Balance"
    //   status={status}
    //   body={show ?
    //     <BalanceForm setShow={setShow} setStatus={setStatus}/> :
    //     <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    // />
  )

}

function BalanceMsg(props){
  return(<>

    <h5>Success</h5>
    <button type="submit" 
      className="btn2" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
        
      }}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  

  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(text);
            props.setShow(false);
            setBalance(user.balance);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }

  return (<>
  <div className="box">
  <p class="Par">Check Your Account Balance</p>
  Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter your email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn2" 
      onClick={handle}>
        Check Balance
    </button>


  </div>

   
  </>);
}