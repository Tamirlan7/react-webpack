import React from 'react'
import { render, screen } from '@testing-library/react'
import TodoForm from '@/components/TodoForm'
import { Provider } from 'react-redux'
import { store } from '@/store'

describe('TodoForm test', () => {
    test('should contain button element', () => {
        render(
            <Provider store={store}>    
                <TodoForm />
            </Provider>
        )
        const button = screen.getByText('Add')
        expect(button).toBeInTheDocument()
    })
})
