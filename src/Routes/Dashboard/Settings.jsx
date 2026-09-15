import { Component } from '../../../libs/react-auto-import'

const Page = ({ style }) => {
  return (
    <div>
      <h1 className={ style?.color }>Page /dashboard/settings</h1>
      <Component name="card" title="Configurações">
        <p>Conteúdo do card</p>
      </Component>
    </div>
  )
}

export default Page;