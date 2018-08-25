import * as React from "react";
import { shallow, mount } from "enzyme";
import { Button } from "./Button";


describe("Component: Button", () => {
    const props = {
        label: "submit",
        onClick: jest.fn(),
        className: "my-button",
        disabled: false
    };

    it("should render and be defined ", () => {
        const wrapper = shallow(<Button {...props} />);
        expect(wrapper).toBeDefined();
    });
    test("should render and have one my-button css class ", () => {
        const wrapper = mount(<Button {...props} />);
        expect(wrapper.props().className).toEqual(`${props.className}`);
    });
    it("1 + 2 equals 3", () => {
        expect(1 + 2).toEqual(3);
    });
});