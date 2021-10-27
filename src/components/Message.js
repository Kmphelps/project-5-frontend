

function Message({message}) {
console.log(message)
    return (
        <div>
        <p>{message.user.username}: {message.message}</p>
        </div>
    )
}

export default Message