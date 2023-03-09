import React from 'react'
import { KeyboardContent, Letters, LettersButtons, LettersContent, NumbersContent } from './styled'
import { ArrowsDownUp } from 'phosphor-react'

interface PropsKeyboard {
  setLettersKeyBoard : (letter:string) => void
  SetLettersRemove : () => void
  keyBoardLogin: boolean
}


export const KeyBoard = ({ setLettersKeyBoard, SetLettersRemove, keyBoardLogin }: PropsKeyboard) => {
  const [letterMarkup, setLetterMarkup] = React.useState<'min'|'max'>('min')
  const LetterKeyBoard = (letter:string) => setLettersKeyBoard(letter)
  let alf: number[] = []
  let numbers: number[] = []

    let letterDate = {
      min: [97, 122],
      max: [65, 90],
    }

    for(let a= letterDate[letterMarkup][0]; a<=letterDate[letterMarkup][1];a++) {
        alf.push(a)
    }
    for(let a= 48; a<=57;a++) {
        numbers.push(a)
    }

  const setLetterInd = () => {
    setLetterMarkup(
      letterMarkup === 'min'? 'max' : 'min'
    )
  }

  const handleSetLetterRemove = () => {
    SetLettersRemove()
  }

  return (
    <KeyboardContent keyBoardLogin= {keyBoardLogin} >
      <NumbersContent>
        {numbers.map((item) => (
          <Letters 
          key={item}
          onClick={() => LetterKeyBoard(String.fromCodePoint(item))}
          >
              {String.fromCodePoint(item)}
          </Letters>
        ))}
      </NumbersContent>
      <LettersContent>
        {alf.map((item) => 
            <Letters 
            key={item}
              onClick={() => LetterKeyBoard(String.fromCodePoint(item))}
              >
                {String.fromCodePoint(item)}
            </Letters>
        )}
      </LettersContent>
        
      <LettersButtons>
        <button onClick={setLetterInd}>
         <ArrowsDownUp size={18} weight='bold'/>
        </button>
        <button onClick={handleSetLetterRemove}> Apagar </button>
      </LettersButtons>


    </KeyboardContent>
  )
}
