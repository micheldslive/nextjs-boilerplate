export type CodeProps = {
  count: number
  setCount(): void
}

export const Code = ({ count, setCount }: CodeProps) => {
  return (
    <code className='code' onClick={setCount} aria-label='code'>
      count is {count}
    </code>
  )
}
