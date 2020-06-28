import React from 'react'
import {storiesOf} from '@storybook/react'
import DebounceImmediateDemo from './immediate'
import DebounceDemo from './index'

storiesOf('debounce', module)
  .add('立即执行', () => <DebounceImmediateDemo />)
  .add('延迟执行', () => <DebounceDemo />)
