


export default function Footer({xWinCounter, tiesCounter, yWinCounter }:{xWinCounter:number, tiesCounter:number , yWinCounter:number }) {

  
  return (
    <>
    <footer>

      <div className="XwinnerCounter">
      ⭐  <br/>
        {xWinCounter}
      </div>
      <div className="tiesCounter">
      TIES <br/>
      {tiesCounter}
      </div>
      <div className="YwinnerCounter">
      ❄<br/>
      {yWinCounter}
      </div>
    </footer>
    </>

  )
}