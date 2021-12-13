<template>
  <chat-window
    :current-user-id="currentUserId"
    :rooms="rooms"
    :messages="messages"
  />
</template>

<script>
  export default {
    data () {
      return {
        rooms: [
          {
            roomId: 1,
            roomName: 'Room 1',
            avatar: 'assets/imgs/people.png',
            unreadCount: 4,
            index: 3,
            lastMessage: {
              content: 'Last message received',
              senderId: 1234,
              username: 'John Doe',
              timestamp: '10:20',
              saved: true,
              distributed: false,
              seen: false,
              new: true
            },
            users: [
              {
                _id: 1234,
                username: 'John Doe',
                avatar: 'assets/imgs/doe.png',
                status: {
                  state: 'online',
                  lastChanged: 'today, 14:30'
                }
              },
              {
                _id: 4321,
                username: 'John Snow',
                avatar: 'assets/imgs/snow.png',
                status: {
                  state: 'online',
                  lastChanged: '14 July, 20:00'
                }
              }
            ],
            typingUsers: [ 4321 ]
          }
        ],
        messages: [],
        currentUserId: 1234
      }
    }
  }
</script>