import React from 'react'
import {storiesOf} from '@storybook/react'
import LocalStorage from './index'

storiesOf('localStorage', module).add('useLocalStorage', () => <LocalStorage />)
