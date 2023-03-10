import 'styled-components'

import { defaultTheme } from '../styled/defaultTheme'

type TypeTheme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends TypeTheme {}
}