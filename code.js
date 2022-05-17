import React from 'react'
import { Prism } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { getLanguage } from '@mdx-deck/themes/syntax-highlighter'

export const pre = props => props.children

export const code = props => {
  const language = getLanguage(props.className)
  return <Prism language={language} {...props} style={darcula} />
}

export default {
  components: {
    pre,
    code,
  },
}
