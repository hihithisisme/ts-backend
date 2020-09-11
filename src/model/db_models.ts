export interface User {
  id: string
  handle: string
  displayName: string
  password: string
}

export interface Channel {
  id: string
  description: string
  pinnedMessageIds: string[] // associated to messages
}

export interface Conversation {
  id: string
  channelId: string // fk to channel
}

export interface Message {
  id: string
  conversationId: string // fk to converstaiton
  fromId: string // fk to user
  message: string
  created: Date
  updated: Date
}

export interface Participant {
  channelId: string // fk to channel
  userId: string // fk to user
}
