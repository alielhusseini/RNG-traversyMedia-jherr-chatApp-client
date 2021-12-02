import { gql } from '@apollo/client'

export const GET_MESSAGES = gql `
    query GetMessages {
        getMessages {
            user
            id
            content
        }
    }
`