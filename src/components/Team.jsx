export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container milestone'>
        <div className='row section-title'>
          <h2>9999 milestone</h2>
        </div>
        <div className="row">
          <div className="logo col-sm-12 col-md-6">
            <img src="img/reflect-rabbit-chest-with-coins-png-1024x1024.png" style={{width:'100%'}}/>
          </div>
          <div className="logo-detail col-sm-12 col-md-6" style={{height:'550px'}}>
            <div>
              <div className="row" style={{marginBottom:'30px'}}>
                <div className="col-sm-12 col-md-1">
                  <img src="img/ezgif.com-gif-maker.png" style={{width:'30px', height:'30px'}}></img>
                </div>
                <div className="col-sm-12 col-md-11" style={{padding:'0'}}>
                  <p> It's Time to introduce our Elderly Troop behind this greatest heist. </p>
                </div>
              </div>
              <div className="row" style={{marginBottom:'30px'}}>
                <div className="col-sm-12 col-md-1">
                  <img src="img/ezgif.com-gif-maker.png" style={{width:'30px', height:'30px'}}></img>
                </div>
                <div className="col-sm-12 col-md-11" style={{padding:'0'}}>
                  <p> We are beyond thankful to all our Fellow Rogue's who have helped us a long way in achieving the Milestone. </p>
                </div>
              </div>
              <div className="row" style={{marginBottom:'30px'}}>
                <div className="col-sm-12 col-md-1">
                  <img src="img/ezgif.com-gif-maker.png" style={{width:'30px', height:'30px'}}></img>
                </div>
                <div className="col-sm-12 col-md-11" style={{padding:'0'}}>
                  <p> For Every 100 ETH Trade on the Rogue Rabbits Rabble, 5% will be donated to the World's Hunger Organisations under The Rabble's Community. </p>
                </div>
              </div>
              <div className="row" style={{marginBottom:'30px'}}>
                <div className="col-sm-12 col-md-1">
                  <img src="img/ezgif.com-gif-maker.png" style={{width:'30px', height:'30px'}}></img>
                </div>
                <div className="col-sm-12 col-md-11" style={{padding:'0'}}>
                  <p> Get Ready for the Exciting Treasures Fellow Rogue's. Note: Map will be revealed in the Community. </p>
                </div>
              </div>
              <p style={{color:'#FF3030'}}> Note: Map will be revealed in the Community. </p>
            </div>
          </div>

        </div>
      </div>

      <div className="container team-member">
        <div className='row section-title'>
          <div className="col-sm-12 col-md-12">
            <h2>TEAM</h2>
            <p> The Leporidae's family heads, the hidden Rogue's Behind the biggest Heist. </p>
          </div>
        </div>
        <div className="row main-member">
          <div className="col-sm-12 col-md-3">
            <img src="img/CEO-1024x1024.png" />
            <p>RABBLE COMMITTEE HEAD</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <img src="img/Creative-designer-1024x1024.png" />
            <p>HEIST PLANNER</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <img src="img/Developer-1024x1024.png" />
            <p>MASTER MIND</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <img src="img/Manager-1024x1024.png" />
            <p>HEIST EXECUTER AND MARKETER</p>
          </div>
        </div>
        {/* <div className="all-member"> */}
          <div className='row section-title'>
            <div className="col-sm-12 col-md-12">
              <h2 style={{color:'#FF3030'}}>THE RABBLE</h2>
            </div>
          </div>
          <div className="row all-member">
            {[...Array(8)].map((x, i) =>
              <div className="col-sm-12 col-md-1" key={i}> <img src={'img/member/1-'+i+'.jpg'} style={{marginBottom:'20px'}} /></div>
            )}
          </div>
          <div className="row all-member">
            {[...Array(8)].map((x, i) =>
              <div className="col-sm-12 col-md-1" key={i}> <img src={'img/member/2-'+i+'.jpg'} style={{marginBottom:'20px'}} /></div>
            )}
          </div>
          <div className="row all-member" style={{marginBottom:'8px'}}>
            {[...Array(8)].map((x, i) =>
              <div className="col-sm-12 col-md-1" key={i}> <img src={'img/member/3-'+i+'.jpg'} style={{marginBottom:'20px'}} /></div>
            )}
          </div>
          <div className="row all-member" style={{marginBottom:'8px'}}>
            {[...Array(8)].map((x, i) =>
              <div className="col-sm-12 col-md-1" key={i}> <img src={'img/member/4-'+i+'.jpg'} style={{marginBottom:'20px'}}/></div>
            )}
          </div>


        {/* </div> */}





      </div>


    </div>
  )
}
