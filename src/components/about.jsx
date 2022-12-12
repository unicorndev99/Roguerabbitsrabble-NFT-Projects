export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row" style={{height:'550px'}}>
          <div className="col-xs-12 col-md-6">
            <img src="img/ABOUT.gif" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6" style={{height:'100%', display:'flex', alignItems:'center'}}>
            <div className="about-text">
              <h2>About</h2>
              <p>
                Rogue Rabbits Rabble is a 9999 NFT's Collection of Leporidae's family with the most eccentric rabbits living under Ethereum Blockchain. No one is alike in the Colony. All of them are Vindictive and unusual Rogue rabbits each with unique traits of skills and abilities from the different warrens have joined together to perform the biggest heist under ERC - 721 Warren.
              </p>
              <div style={{textAlign:"center"}}>
                <button className='btn btn-custom btn-lg' onClick={()=> window.open("read-full-story", "_blank")}> READ FULL STORY </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
