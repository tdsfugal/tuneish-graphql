/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTune = /* GraphQL */ `
  mutation CreateTune(
    $input: CreateTuneInput!
    $condition: ModeltuneConditionInput
  ) {
    createTune(input: $input, condition: $condition) {
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
export const updateTune = /* GraphQL */ `
  mutation UpdateTune(
    $input: UpdateTuneInput!
    $condition: ModeltuneConditionInput
  ) {
    updateTune(input: $input, condition: $condition) {
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
export const deleteTune = /* GraphQL */ `
  mutation DeleteTune(
    $input: DeleteTuneInput!
    $condition: ModeltuneConditionInput
  ) {
    deleteTune(input: $input, condition: $condition) {
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
