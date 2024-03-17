


export default function Footer({xWinCounter, tiesCounter, yWinCounter }:{xWinCounter:number, tiesCounter:number , yWinCounter:number }) {

  
  return (
    <>
    <footer>

      <div className="XwinnerCounter">
        X  <br/>
        {xWinCounter}
      </div>
      <div className="tiesCounter">
      TIES <br/>
      {tiesCounter}
      </div>
      <div className="YwinnerCounter">
      Y<br/>
      {yWinCounter}
      </div>
    </footer>
    </>

  )
}