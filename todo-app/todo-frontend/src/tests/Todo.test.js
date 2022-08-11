import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

import Todo from "../Todos/Todo";

describe('Testing Todo component', () => {
  let component
  const handleCompleteClick = jest.fn()
  const handleDeleteClick = jest.fn()

  beforeEach(() => {
    const exampleTodo = {
      text: "Testing",
      done: false
    }
  
    component = render(
      <Todo todo={exampleTodo} completeT={handleCompleteClick} deleteT={handleDeleteClick} />
    )
  })

  it('Rendering todo correctly', () => {
    expect(component.container).toHaveTextContent('Testing')
    expect(component.container).toHaveTextContent('This todo is not done')
  })

  it('Testing if complete button is working correctly', async () => {
    const completeButton = component.getByText('Set as done')
    await userEvent.click(completeButton)
    expect(handleCompleteClick.mock.calls).toHaveLength(1)
  })

  it('Testing if delete button is working correctly', async() => {
    const deleteButton = component.getByText('Delete')
    await userEvent.click(deleteButton)
    expect(handleDeleteClick.mock.calls).toHaveLength(2)
  })
})