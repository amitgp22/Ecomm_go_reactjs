import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Ass from './Ass'
import { describe, expect, test } from 'vitest'

describe('first', () => { 
    test('should render the asset name input field', () => { 
  render(<Ass />)
  const nameInput = screen.getByPlaceholderText(/Enter asset name/i)
  expect(nameInput).toBeInTheDocument()

})
test('should render the asset value input field', () => { 
  render(<Ass />)
 const input=screen.getByRole('textbox')
 fireEvent.change(input,{target:{value:'test1'}})
 expect(input.value).toBe('test1')


})
test('should render the button', () => {
  render(<Ass />)
  const button = screen.getByText('buttoN',{exact:false})
  expect(button).toBeInTheDocument()
})
test('should render the User component', () => {
    const amit2 = 'amit1'
  render(<Ass name={amit2}/>)
  const user = screen.getByText(amit2) 
  expect(user).toBeInTheDocument()
})

 })
