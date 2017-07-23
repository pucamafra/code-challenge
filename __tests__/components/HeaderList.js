import 'react-native';
import React from 'react';
import HeaderList from '../../app/components/HeaderList/HeaderList.js';
import Data from '../../app/api/match_sample.json';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Event renders correctly', () => {
    const tree = renderer.create(
        <HeaderList data={Data} />
    );
});
