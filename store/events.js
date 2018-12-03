export const state = () => ({
  eventList: [
    {
      id: 1,
      title: 'Beach Cleanup',
      date: 'Aug 28 2018',
      time: '10:00',
      location: 'Daytona Beach',
      description: "Let's clean up this beach.",
      organizer: 'Adam Jahr',
      category: 'sustainability',
      attendees: [
        {
          id: 'abc123',
          name: 'Adam Jahr'
        },
        {
          id: 'def456',
          name: 'Gregg Pollack'
        },
        {
          id: 'ghi789',
          name: 'Beth Swanson'
        },
        {
          id: 'jkl101',
          name: 'Mary Gordon'
        }
      ]
    },
    {
      id: 2,
      title: 'Park Cleanup',
      date: 'Nov 12 2018',
      time: '12:00',
      location: '132 N Magnolia Street, Orlando, Florida',
      description: "We're going to clean up this park.",
      organizer: 'Adam Jahr',
      category: 'nature',
      attendees: [
        {
          id: 'ghi789',
          name: 'Beth Swanson'
        },
        {
          id: 'jkl101',
          name: 'Mary Gordon'
        }
      ]
    },
    {
      id: 3,
      title: 'Pet Adoption Day',
      date: 'Dec 2 2018',
      time: '12:00',
      location: '132 N Magnolia Street, Orlando, Florida',
      description: 'Help animals find new homes.',
      organizer: 'Gregg Pollack',
      category: 'animal welfare',
      attendees: [
        {
          id: 'abc123',
          name: 'Adam Jahr'
        },
        {
          id: 'ghi789',
          name: 'Beth Swanson'
        },
        {
          id: 'jkl101',
          name: 'Mary Gordon'
        }
      ]
    }
  ]
})

export const mutations = {
  add(state, { text }) {
    state.list.push({
      text,
      done: false
    })
  },

  toggle(state, todo) {
    todo.done = !todo.done
  }
}

export const getters = {
  todos(state) {
    return state.eventList
  }
}
