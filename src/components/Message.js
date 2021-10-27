

function Message({message}) {

    return (
        <div>
        <p>{message.user.username}: {message.message}</p>
        </div>
    )
}

export default Message