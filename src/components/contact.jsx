export const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row" style={{height:'200px'}}>
          <div className="col-xs-12 col-md-4" style={{paddingBottom:'30px'}}>
            <p>info@roguerabbitsrabble.com</p>
            <form>
              <input type="text" placeholder="Signup for Newsletter" />
              <div id="brief-btn">
                <button type='submit' className='btn btn-custom btn-lg' > SUBMIT </button>
              </div>
            </form>
          </div>
          <div className="col-xs-12 col-md-4 text-center contact-part" style={{padding:'10px'}}>
            <img src="img/logo.png" className="logo" />
          </div>
          <div className="col-xs-12 col-md-4 contact-part">
            <div className='social'>
              <a href="https://www.instagram.com/roguerabbitsrabble/" target="_blank"> <img src="img/instagram.png" /> </a> 
              <a href="https://mobile.twitter.com/Rogue_Rabbits" target="_blank"> <img src="img/twitter.png" /> </a> 
              <a href="https://discord.gg/aQ9Evsfk" target="_blank"> <img src="img/discord.png" /> </a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
