export type CodeProps = {
  count: number
  setCount(): void
}

export const Code = ({ count, setCount }: CodeProps) => {
  return (
    <code className='code p-4 flex flex-col items-center justify-between gap-10 cursor-pointer bg-slate-50 rounded-md' onClick={setCount} aria-label='code'>
      count is {count}
    </code>
  )
}
