import { useState } from 'react'
import Messages from './Messages'
import { useMutation } from '@apollo/client'
import { POST_MESSAGE } from './utils/graphql'

export default function Chat() {
    const [state,setState] = useState({ user: 'ali', content: '' })
    const [postMessage] = useMutation(POST_MESSAGE, {
        variables: state,
    })

    function onSend() {
        if (state.content.length > 0) {
            postMessage()
        }
        setState({ ...state, content: '' })
    }

    function enterKey(e) {
        if (e.keyCode === 13) onSend()
    }

    return (
        <div style={{ width: '100%', maxWidth: '1000px' }}>
            <Messages user={ state.user }/>
            <br/><br/>
            <label>User:</label>
            <input type="text" value={ state.user } onChange={ e => setState({...state, user: e.target.value}) }/>
            <br/><br/>
            <label>Message:</label>
            <input type="text" value={ state.content } placeholder='type message' onChange={ e => setState({...state, content: e.target.value}) } onKeyUp={ enterKey }/>
            <button onClick={ onSend }>Send</button>
        </div>
    )
}
