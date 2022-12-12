export const Membership = () => {
  return (
    <div id="member-ship">
      <div className="container">
        <div className="row logo-title">
          <div className="col-xs-12 col-md-6 logo-detail">
            <h3> DISTRIBUTION OF 9999 ROGUE RABBITS </h3>
            <p> <img src="img/ezgif.com-gif-maker.png"></img> 3000 - Are available for 0.05 ETH </p>
            <p> <img src="img/ezgif.com-gif-maker.png"></img> 333 - Hidden undercover Rogues/ 1st Troop </p>
            <p> <img src="img/ezgif.com-gif-maker.png"></img> 333 - Highly Skilled Undercover Rogues / 2nd Troop </p>
            <p> <img src="img/ezgif.com-gif-maker.png"></img> 333 - The toughest Rogues Ever / 3rd Troop </p>
            <p style={{color:'#FF3030'}}> <img src="img/ezgif.com-gif-maker.png"></img> Join on Discord to know more </p>
          </div>
          <div className="col-xs-12 col-md-6" style={{textAlign:'center'}}>
            <img src="img/Rogue_rabbit_chest_with_carrots-removebg-preview.png" className="membership-logo" alt="" />
          </div>
        </div>
        <div className="row">
          <p style={{textAlign:'center', marginBottom:'30px'}}>
            999 Undercover Rogue's from the 3 Troops will be airdropped to the Luckiest members of The Rabble's    Foundation.</p>
          <p style={{textAlign:'center', color:'#FF3030'}}>READ ROADMAP TO KNOW MORE</p>
          <div id="brief-btn">
            <button className='btn btn-custom btn-lg' onClick={()=> window.open("rogue-membership-brief", "_blank")}  > ROGUE MEMBERSHIP BRIEF </button>
          </div>

        </div>

      </div>
    </div>
  );
};
