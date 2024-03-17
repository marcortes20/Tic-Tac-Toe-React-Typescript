

type SquareProps = {
  children: any;
  index: number;
  updateBoard(index: number): void;
}

export default function Square({ children, index, updateBoard }: SquareProps) {

  return (
    <>
      <div onClick={() => { updateBoard(index); }} className="cell">

        {children}
      </div>
    </>
  )



}