import Childrens from "./Children";
import { screen, render } from "@testing-library/react";

describe("Check in Element", () => {
  test('tbd', () => {
    render(<Childrens />);
    const testElement = screen.getByText('Hello Children');
    expect(testElement).toBeInTheDocument();
  })
})

describe('Check in ElementId', () => {
  test('tdb', () => {
    render(<Childrens />);
    const testElementId = screen.getByTestId('divOne');
    expect(testElementId).toBeInTheDocument()
  })
})
describe('Check in ElementProps', () => {
  test('tdb', () => {
    render(<Childrens />);
    const testElementProps = screen.getByTestId('spanS');
    expect(testElementProps).toBeInTheDocument()
  })
})