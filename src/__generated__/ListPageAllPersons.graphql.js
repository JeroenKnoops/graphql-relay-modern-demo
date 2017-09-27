/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type ListPageAllPersons = $ReadOnlyArray<{| |}>;
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ListPageAllPersons",
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Person_person",
      "args": null
    }
  ],
  "type": "Person"
};

module.exports = fragment;
