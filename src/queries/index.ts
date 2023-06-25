import { gql } from '@apollo/client'

export const USER_LOGIN = gql`
  mutation LoginUser(
    $country: String
    $email: String
    $password: String
    $passwordConfirm: String
    $state: String
  ) {
    insert_login(
      objects: {
        id: 2
        country: $country
        email: $email
        password: $password
        passwordConfirm: $passwordConfirm
        state: $state
      }
    ) {
      returning {
        country
        email
        id
        password
        passwordConfirm
        state
      }
    }
  }
`
