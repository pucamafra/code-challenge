import 'react-native';
import React from 'react';
import PeriodChange from '../../app/components/PeriodChange/PeriodChange.js';
import Data from '../../app/api/match_sample.json';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Event renders correctly', () => {
    const tree = renderer.create(
      <PeriodChange event={Data.events[0]}/>
    );
});
