/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncTunes = /* GraphQL */ `
  query SyncTunes(
    $filter: ModeltuneFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTunes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        content
        price
        rating
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTune = /* GraphQL */ `
  query GetTune($id: ID!) {
    getTune(id: $id) {
      id
      title
      content
      price
      rating
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTunes = /* GraphQL */ `
  query ListTunes(
    $filter: ModeltuneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTunes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        price
        rating
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
