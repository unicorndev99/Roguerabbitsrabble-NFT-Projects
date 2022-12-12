import { Contact } from "../components/contact";

const Brief = () => {
    return (
      <>
      <div id="brief">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div className="roadmap-text">
                <h2 style={{ color: '#FF3030'}}>ROGUE MEMBERSHIP BRIEF </h2>
              </div>
            </div>
          </div>
          <div className="row" style={{marginBottom:'10px'}}>
            <div className="col-xs-2 col-md-1">
                <img src="img/one.png" style={{width:'50px', height:'80px'}}></img>
            </div>
            <div className="col-xs-10 col-md-11">
                <p> The Rogue membership Costs are the same for all. </p>
            </div>
          </div>
          <div className="row" style={{marginBottom:'10px'}}>
            <div className="col-xs-2 col-md-1">
                <img src="img/one.png" style={{width:'50px', height:'80px'}}></img>
            </div>
            <div className="col-xs-10 col-md-11">
                <p> There are no inequities and bonding Curves here. </p>
            </div>
          </div>
          <div className="row" style={{marginBottom:'10px'}}>
            <div className="col-xs-2 col-md-1">
                <img src="img/one.png" style={{width:'50px', height:'80px'}}></img>
            </div>
            <div className="col-xs-10 col-md-11">
                <p> Buying a Rogue Costs 0.05 ETH. </p>
            </div>
          </div>
          <div className="row" style={{marginBottom:'10px'}}>
            <div className="col-xs-2 col-md-1">
                <img src="img/one.png" style={{width:'50px', height:'80px'}}></img>
            </div>
            <div className="col-xs-10 col-md-11">
                <p> There are no Price tiers in Rabble. </p>
            </div>
          </div>
          <div className="row" style={{marginBottom:'10px'}}>
            <div className="col-xs-2 col-md-1">
                <img src="img/one.png" style={{width:'50px', height:'80px'}}></img>
            </div>
            <div className="col-xs-10 col-md-11">
                <p> The Rogues will be releasing in 3 Troops periodically to attempt the biggest heists mastered by the Elderly Troop, each release has 3333 with 333 hidden undercover operating, and 3000 will be executing the heist each time. </p>
            </div>
          </div>
          <div className="row" style={{marginBottom:'10px'}}>
            <div className="col-xs-2 col-md-1">
                <img src="img/one.png" style={{width:'50px', height:'80px'}}></img>
            </div>
            <div className="col-xs-10 col-md-11">
                <p> The members get access to being part of The Rabble’s Foundation. </p>
            </div>
          </div>
          <div className="row" style={{marginBottom:'10px'}}>
            <div className="col-xs-2 col-md-1"> </div>
            <div className="col-xs-10 col-md-11">
                <p style={{color:'#FF3030'}}> BE PART OF THE RABBLE’S JOURNEY TO KNOW MORE </p>
            </div>
          </div>
        
          <div className="row">
            <div className="col-xs-12 col-md-6"> </div>
            <div className="col-xs-12 col-md-6">
              <img src="img/low-space-1024x1024.png" style={{width:'100%'}} />
            </div>
          </div>
        </div>
      </div>
      <Contact />
      </>
    );
};

export default Brief;