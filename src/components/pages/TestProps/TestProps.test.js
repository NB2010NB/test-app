import TestProps from "./TestProps";
import { screen, render } from "@testing-library/react";
describe('Check the Props', () => {
  test('tbd', () => {
    render(<TestProps firstName='natan' />);
    const testProps = screen.getByTestId('firstName');
    expect(testProps).toHaveTextContent('natan')
  })
  test('ff',()=>{
    render(<TestProps firstName='nati'/>);
    const testingProps=screen.getByTestId('firstName');
    expect(testingProps).toHaveTextContent('nati')
  })
})