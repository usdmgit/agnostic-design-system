import React from 'react'
import { cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { TextInput } from '../../../src'

afterEach(cleanup)

describe('<TextInput />', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(<TextInput name="batman_name" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('accepts a value', () => {
    const inputValue = 'Bruce Wayne'

    const tree = renderer
      .create(<TextInput name="batman_name" value={inputValue} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
