import renderer from "react-test-renderer";
import Login from "./index";
describe("login component", () => {
  const mockFunction = jest.fn();

  test("should render correctly", () => {
    const testRenderer = renderer.create(<Login onSubmit={() => {}} />);
    const loginComponent = testRenderer.root;

    console.log(loginComponent.props, "hello");
  });

  test("should call a function correctly", () => {
    const testRenderer = renderer.create(<Login onSubmit={mockFunction} />);
    const loginComponent = testRenderer.root;

    loginComponent.findByProps({className: "login"}).props.onSubmit();
    // loginComponent.findByProps({className: "login-input"}).props.onChange();
    expect(mockFunction).toHaveBeenCalledWith(1);
  });
});
