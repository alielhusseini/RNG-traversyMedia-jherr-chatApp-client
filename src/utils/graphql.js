import { gql } from '@apollo/client'

export const GET_MESSAGES = gql `
    query GetMessages {
        messages {
            user
            id
            content
        }
    }
`

export const GET_MESSAGES_BY_SUBCRIPTION = gql `
    subscription GetMessages {
        messages {
            user
            id
            content
        }
    }
`
export const POST_MESSAGE = gql `
    mutation PostMessage($user: String! $content: String!) {
        postMessage(user: $user content: $content)
    }
`