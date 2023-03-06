import React from 'react'
import { KeyboardContent, Letters, LettersContent } from './styled'

interface PropsKeyboard {
  setLoginKeyBoard : (letter:string) => void
}

interface PropsLetter {
  letter : 'min' | 'mas' | 'car1' | 'car2'
}

export const KeyBoard = ({ setLoginKeyBoard }: PropsKeyboard) => {
  const [letterMarkup, setLetterMarkup] = React.useState(1)
  const LetterKeyBoard = (letter:string) => setLoginKeyBoard(letter)
  let alf: number[] = []
  
    let letterDate = [
        [97, 122],
        [65, 90],
        [33, 64],
        [91,95],
    ]
    for(let a= letterDate[letterMarkup][0]; a<=letterDate[letterMarkup][1];a++) {
        alf.push(a)
    }

  const setLetterInd = () => {
    setLetterMarkup((letterMarkup) => {
      if(letterMarkup === 3) {
        return 0
      } else return letterMarkup + 1
    })
  }

  return (
    <KeyboardContent>
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

      <button onClick={setLetterInd}> ↑ </button>

    </KeyboardContent>
  )
}
