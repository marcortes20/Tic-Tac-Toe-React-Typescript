
export default function Header({ currentPlayer, clearBoard }: { currentPlayer: string, clearBoard: () => void }) {


  return (


    <div className='menu-container'>

      <div className='players-container'>
        ⭐❄
      </div>

      <div>
      Turn: {currentPlayer}
      </div>

        <button onClick={() => clearBoard()} className='refresh-button'>↺</button>


    </div>
  )

}