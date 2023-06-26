import { gql } from '@apollo/client'

export const USER_LOGIN = gql`
  mutation LoginUser(
    $country: String!
    $email: String!
    $password: String!
    $passwordConfirm: String!
    $state: String
  ) {
    login(
      country: $country
      email: $email
      password: $password
      passwordConfirm: $passwordConfirm
      state: $state
    ) {
      actionSuccessful
      message
      userToken
    }
  }
`
