export const Navigation = ({ onClickConnectWallet, onClickDisconnectWallet, walletAddress }) => {
  return (
    <nav id='menu' className='navbar navbar-default'>
      <div className='container'>
      <div className='nav-container'>
        {/* <div className='navbar-header' style={{backgroundImage:'url(img/logo.png)', width:'80px', height:'80px' }}>
        </div> */}
                <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top' style={{width:'80px', height:'80px', padding:'0', marginLeft:'0'}}>
            <img src="img/logo.png" style={{width:'100%'}}  />
          </a>{' '}
        </div>


        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1' style={{marginRight:'10px'}}>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'> ABOUT US </a>
            </li>
            <li>
              <a href='#mint' className='page-scroll'> MINT A ROGUE </a>
            </li>
            <li>
              <a href='#roadmap' className='page-scroll'> ROADMAP </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'> TEAM </a>
            </li>
            <li>
              <a href='#rabble' className='page-scroll'> RABBLE </a>
            </li>
            <li>
              <a href='#foundation' className='page-scroll'> THE FOUNDATION </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'> CONTRACT </a>
            </li>
            <li>
              <a href='#faq' className='page-scroll'> FAQ's </a>
            </li>
          </ul>
        </div>
        {
          walletAddress ? 
          <div className="connect">
            <button type='submit' className='btn btn-custom btn-lg' onClick={onClickDisconnectWallet}> { walletAddress.slice(0, 11) }... </button>
          </div>
          :
          <div className="connect">
            <button type='submit' className='btn btn-custom btn-lg' onClick={onClickConnectWallet}> CONNECT </button>
          </div>
        }
  
        <div className='social'>
          <a href="https://www.instagram.com/roguerabbitsrabble/" target="_blank"> <img src="img/instagram.png" /> </a> 
          <a href="https://mobile.twitter.com/Rogue_Rabbits" target="_blank"> <img src="img/twitter.png" /> </a> 
          <a href="https://discord.gg/aQ9Evsfk" target="_blank"> <img src="img/discord.png" /> </a> 
        </div>

      </div>
      </div>
    </nav>
  )
}
