# Objective

This project has the purpose to clone the [teuxdeux.com](https://teuxdeux.com/home).

# Stack / Patterns / Libs / Stack

- ContextAPI
- AtomicDesign
- Styled-Components

# Contracts

### Retrieving the Board

```js
// TYPE
Operation Type: 'GET'

// URL
calendar/todos?begin='2020-01-15'&end='2020-01-22'

// PARAMS
begin='2020-01-15'
end='2020-01-22'

// STATUS CODE
200

// RESPONSE
[
  { 
    id: 19, 
    date: "2021-01-15", 
    todo: [
      {
        id: 10,
        text: 'some edited todo item'
      },
      ...
    ]
  },
  { 
    id: 20, 
    date: "2021-01-16", 
    todo: []
  }
  ...
]
```

### Adding a ToDo

```js
// TYPE
Operation Type: 'POST'

// URL
calendar/todos?date='2021-01-15'

/// PARAMS
date='2021-01-15'

// PAYLOAD
{
  text: 'some todo item'
}

// RESPONSE
{ 
  id: 19, 
  date: "2021-01-15", 
  todo: [
    {
      id: 1,
      text: 'some todo item'
    },
    ...
  ]
},
```

### Editing a ToDo

```js
// TYPE
Operation Type: 'PUT'

// URL
calendar/todos?id=10

// PARAMS
id=10

// PAYLOAD
{
  text: 'some edited todo item'
}

// STATUS CODE
200

// RESPONSE
{ 
  id: 19, 
  date: "2021-01-15", 
  todo: [
    {
      id: 10,
      text: 'some edited todo item'
    },
    ...
  ]
},
```

### Deleting a ToDo

```js
// TYPE
Operation Type: 'DELETE'

// URL
calendar/todos?id=10

// PARAMS
id=10

// STATUS CODE
204

// RESPONSE
{
  id: 10,
  text: 'the deleted todo item'
},
```
