import { Button } from './button'
import { render, screen } from '@testing-library/react'

describe('<Button />', () => {
  it('should render with the text "Button"', () => {
    render(<Button />)

    const button = screen.getByText('Button')
    expect(button).toBeInTheDocument()
  })
})
