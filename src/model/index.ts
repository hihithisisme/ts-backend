export interface user {
  id: string
  handle: string
  displayName: string
  password: string
}

export interface channel {
  id: string
  description: string
  pinnedMessageIds: string[]  // associated to messages
}

export interface conversation {
  id: string
  channelId: string     // fk to channel
}

export interface message {
  id: string
  conversationId: string  // fk to converstaiton
  fromId: string          // fk to user
  message: string
  created: Date
  updated: Date
}

export interface participant {
  channelId: string     // fk to channel
  userId: string        // fk to user
}
