import { Code } from './code'
import { render, screen } from '@testing-library/react'

const props = {
  count: 0,
  setCount: () => 0,
}

describe('<Code />', () => {
  it('should by render a Code', () => {
    render(<Code {...props} />)
    const code = screen.getByLabelText(/code/i)
    expect(code).toBeInTheDocument()
  })
})
