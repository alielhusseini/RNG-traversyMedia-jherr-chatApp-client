import React from 'react'
import { useQuery, useSubscription } from '@apollo/client'
import { GET_MESSAGES, GET_MESSAGES_BY_SUBCRIPTION } from './utils/graphql'

export default function Messages({ user }) {
    // const { data } = useQuery(GET_MESSAGES, {
    //     // pollInterval: 500 // every 500ms we'll re-fetch the query (for rendering purposes instead of using proxy in the useMutation / though it's still bad practice in this case --> we'll try and use the subscription )
    // })

    const { data } = useSubscription(GET_MESSAGES_BY_SUBCRIPTION)

    if (!data) return null

    return (
        <>
            {data?.getMessages?.map(({ id, content, user: messageUser }) => (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: user === messageUser ? 'flex-end' : 'flex-start',
                        paddingBottom: '1em'
                    }}
                    key={id}
                >
                    { user !== messageUser && (
                        <div
                            style={{
                                height: 50,
                                width: 50,
                                marginRight: '0.5em',
                                border: '2px solid #e5e6ea',
                                borderRadius: '25',
                                textAlign: 'center',
                                fontSize: '18pt',
                                paddingTop: 5
                            }}
                        >
                            { messageUser.slice(0,2).toUpperCase() }
                        </div>
                    ) }
                    <div
                        style={{
                            background: user === messageUser ? '#58bf56' : '#e5e6ea',
                            color: user === messageUser ? '#fff' : '#222',
                            padding: '1em',
                            borderRadius: "1em",
                            maxWidth: "60%"
                        }}
                    >
                        {content}
                    </div>
                </div>
            ))}
        </>
    )
}
