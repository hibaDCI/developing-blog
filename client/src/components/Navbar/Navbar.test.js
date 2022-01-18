import renderer from "react-test-renderer";
import Navbar from "./index";
import {MemoryRouter} from "react-router-dom";

describe("Navbar component", () => {
  const mockFunction = jest.fn();
  test("should render correctly", () => {
    const testRenderer = renderer.create(
      <MemoryRouter>
        <Navbar onLogin={() => {}} onSignUp={() => {}} />
      </MemoryRouter>
    );
    const navbarComponent = testRenderer.root;
    console.log(navbarComponent.props);
  });

  test("should call a function", () => {
    const testRenderer = renderer.create(
      <MemoryRouter>
        <Navbar onLogin={mockFunction} onSignUp={mockFunction} />
      </MemoryRouter>
    );
    const navbarComponent = testRenderer.root;
    navbarComponent.findByProps({className: "navbar-login"}).props.onClick();
    navbarComponent.findByProps({className: "navbar-signup"}).props.onClick();

    console.log(navbarComponent.props);
  });
});
