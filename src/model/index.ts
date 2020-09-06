export interface user {
  id: string
  handle: string
  displayName: string
  password: string
}

export interface channel {
  id: string
  description: string
  pinned_message_ids: string[]
}

export interface conversation {
  id: string
  channel_id: string
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
