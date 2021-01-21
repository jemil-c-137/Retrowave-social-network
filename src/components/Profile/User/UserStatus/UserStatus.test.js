import React from "react";
import UserStatus from "./UserStatusHooks";
import {create} from "react-test-renderer";

describe("Profile status component", () => {
  test("should status from props in state", () => {
    const component = create(<UserStatus status='treeelo'/>);
    const instance = component.getInstance()
    expect(instance.state.status).toBe('treeelo');
  });
  test("should not contain span", () => {
    const component = create(<UserStatus status='treeelo'/>);
    const root = component.root
    let span = root.findByType("span")
    expect(span.length).toBe(1);
  });
  test("should span contain correct status", () => {
    const component = create(<UserStatus status='treeelo'/>);
    const root = component.root
    let span = root.findByType("span")
    expect(span.children[0]).toBe('treeelo');
  });
  test("should not contain dispaly", () => {
    const component = create(<UserStatus status='treeelo'/>);
    const root = component.root
    let span = root.findByType("span")
    expect(span).not.toBeNull();
  });
  test("should change status on click", () => {
    const component = create(<UserStatus status='treeelo'/>);
    const root = component.root
    let span = root.findByType("span")
    span.props.onClick()
    let input = root.findByType('input')
    expect(input.props.value).toBe('treeelo');
  });
  test("should call callback", () => {
    const mockCall = jest.fn()
    const component = create(<UserStatus status='treeelo' updateStatus={mockCall}/>);
    const instance = component.getInstance()
    instance.deactiveEdit()
    expect(mockCall.mock.calls.length).toBe(1);
  })
  test("should not contain input", () => {
    const component = create(<UserStatus status='treeelo'/>);
    const root = component.root
    expect(() => {let input = root.findByType('input')  }).toThrow()
  })
})