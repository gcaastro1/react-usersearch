// styles
import { CardContainer } from './styles'

export const Card = ({ title, status, event }) => {

  return (
    <CardContainer onClick={event}>
      <h3>{title}</h3>
      <p>{status}</p>
    </CardContainer>
  )
}
