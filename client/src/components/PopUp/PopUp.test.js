import renderer from "react-test-renderer";
import PopUp from "./index.js";
describe("popup component", () => {
  const mockFunction = jest.fn();

  test("should render correctly", () => {
    const testRenderer = renderer.create(
      <PopUp onClose={() => {}} type={"SIGNUP"} />
    );
    const popupComponent = testRenderer.root;

    console.log(popupComponent.props, "hello pop up");
  });

  test("should call a function", () => {
    const testRenderer = renderer.create(
      <PopUp onClose={mockFunction} type={"SIGNUP"} />
    );
    const popupComponent = testRenderer.root;

    popupComponent.findByProps({className: "popup-close"}).props.onClick();
    popupComponent.findByProps({className: "popup-backdrop"}).props.onClick();

    expect(mockFunction).toHaveBeenCalledTimes(2);
  });

  test("should call function with false", () => {
    const testRenderer = renderer.create(
      <PopUp onClose={mockFunction} type={"SIGNUP"} />
    );
    const popupComponent = testRenderer.root;

    popupComponent.findByProps({className: "popup-close"}).props.onClick();

    expect(mockFunction).toHaveBeenCalledWith(false);
  });
});
