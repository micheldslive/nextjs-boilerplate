import { CodeContent } from './styles'

export type CodeProps = {
  count: number
  setCount(): void
}

export const Code = ({ count, setCount }: CodeProps) => {
  return (
    <CodeContent className='code' onClick={setCount} aria-label='code'>
      count is {count}
    </CodeContent>
  )
}
