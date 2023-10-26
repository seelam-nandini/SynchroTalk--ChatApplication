import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='903d995f-ffe3-4772-ae29-f7e60aba9e1b'
        username={props.user.username}
        secret= {props.user.secret}
        style={{height: '100%'}}
        />
    </div>
    )
}
export default ChatsPage