import * as Select from '@radix-ui/react-select';

import React from 'react'

import * as S from './styled'

export const SelectPlan = () => {
  return (
    <Select.Root>

    <S.Trigger>
      <Select.Value placeholder="Selecionar Plano" />
    </S.Trigger>

    <S.Portal>
      <S.Content
        position='popper'
        sideOffset={0}
        // side= 'left'
        align='center'
        sticky= 'partial'
      >
        <S.Viewport>

          {/* <S.Item value='aaa'>
            <Select.ItemText>aaa</Select.ItemText>
            <Select.ItemIndicator />
          </S.Item>
          
          <S.Item value='bbb'>
            <Select.ItemText>bbb</Select.ItemText>
            <Select.ItemIndicator />
          </S.Item>
          
          <S.Item value='ccc'>
            <Select.ItemText>ccc</Select.ItemText>
            <Select.ItemIndicator />
          </S.Item> */}

        </S.Viewport>
      </S.Content>
    </S.Portal>


    </Select.Root>
  )
}
