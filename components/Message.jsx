import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img 
          src="https://images.pexels.com/photos/19380634/pexels-photo-19380634/free-photo-of-tabby-cat-yawning.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
          alt=""
        />
        <span>just now</span>
        <div className="messageContent">
           <p>Hello</p>
           <img 
          src="https://images.pexels.com/photos/19380634/pexels-photo-19380634/free-photo-of-tabby-cat-yawning.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
          alt=""
        />
        </div>
      </div>
    </div>
  )
}

export default Message
