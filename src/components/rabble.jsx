export const Rabble = (props) => {
  return (
    <div id='rabble' className='text-center'>
      <div className='container'>
        <div className="row rabble-main" style={{backgroundImage:'url(img/foundation-banner.jpg)', textAlign:'center'}}>
          <div style={{position:'relative', top:'20%'}}>
            <h2 style={{color:'#FFF'}}>THE RABBLE FOUNDATION</h2>
            <div style={{marginTop:'40px'}}>
                <button className='btn btn-custom btn-lg' onClick={()=> window.open("the-rabbles-foundation", "_blank")}> KNOW MORE </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
