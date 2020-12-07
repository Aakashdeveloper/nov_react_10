import React from 'react';
import {create} from 'react-test-renderer';
import BaseButton from '../component/Basebutton';
import Footer from '../component/Footer';

describe('Functional test',() => {
    test('Button test',() => {
        const component = create(<BaseButton/>)
        const instance = component.root;
        const button = instance.findByType("button");
        button.props.onClick();
        expect(button.props.children).toBe("Some Thing")
    })
    test('Snapshot testing',() => {
        let tree = create(<Footer/>);
        expect(tree.toJSON()).toMatchSnapshot()
    })
})