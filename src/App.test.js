import React from "react";
import App from "./App";
import renderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("rendering App component correctly", () => {
  it("render App component without crashing", () => {
    shallow(<App />);
  });

  it("App matches the snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
