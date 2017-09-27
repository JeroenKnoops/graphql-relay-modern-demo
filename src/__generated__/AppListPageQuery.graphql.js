/**
 * @flow
 * @relayHash 0719503925ff10aaa3e256a262fbeb2e
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppListPageQueryResponse = {|
  +persons: ?$ReadOnlyArray<{| |}>;
|};
*/


/*
query AppListPageQuery {
  persons {
    ...ListPageAllPersons
  }
}

fragment ListPageAllPersons on Person {
  ...Person_person
}

fragment Person_person on Person {
  id
  name
  blog
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppListPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Person",
        "name": "persons",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ListPageAllPersons",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppListPageQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppListPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Person",
        "name": "persons",
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Person",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "blog",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AppListPageQuery {\n  persons {\n    ...ListPageAllPersons\n  }\n}\n\nfragment ListPageAllPersons on Person {\n  ...Person_person\n}\n\nfragment Person_person on Person {\n  id\n  name\n  blog\n}\n"
};

module.exports = batch;
