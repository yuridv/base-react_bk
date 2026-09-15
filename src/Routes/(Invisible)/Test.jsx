import { Component } from '../../../libs/react-auto-import'

const Page = ({ style }) => {
  return (
    <div>
      <h1 className={ style?.color }>Page /Test</h1>
      <Component name="buttons/button">Clique aqui</Component>
    </div>
  )
}

export default Page;