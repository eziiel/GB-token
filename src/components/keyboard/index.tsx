import React from 'react'
import { KeyboardContent } from './styled'

let alf:number[] = []

for (let a= 97; a <= 122; a++) {
  alf.push(a)
}

export const KeyBoard = () => {
  return (
    <KeyboardContent>
      {alf.map((item) => 
        <span 
          key={item}
          onClick={() => console.log(String.fromCodePoint(item))}
        >
            {String.fromCodePoint(item)}
        </span>
      )}
    </KeyboardContent>
  )
}
