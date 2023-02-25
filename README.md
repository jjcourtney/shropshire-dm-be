# shropshire-dm-be

# API

## Vehicles

### GET `/api/vehicles`

Returns all vehicles

```json
[
  {
    "card": "Ace",
    "name": "Boblin",
    "desc": [
      "Boblin the goblin can serve as a mount for any Medium or smaller creature. No no, Boblin insists. Whenever you intend to travel any distance exceeding 1 mile, make a Wisdom saving throw (DC 12). On a failure, you must ride on Boblin’s shoulders.",
      "Boblin must succeed on a Constitution save after every 5 miles of travel (DC 12). On a failure he gains 1 level of exhaustion. If Boblin dies due to this exhaustion, you must end your journey on the spot and cannot leave for 12 hours, as Boblin’s body must have proper burial rites and a vigil watched."
    ]
  }
]
```

#### optional `?name={Vehicle name}`

Returns an array of Vehicles with matching name (if none found will return an empty array `[]`)

### GET `/api/vehicles/type/:type`

Returns all vehicles of a given type

```json
[
  {
    "card": "Ace",
    "name": "Boblin",
    "desc": [
      "Boblin the goblin can serve as a mount for any Medium or smaller creature. No no, Boblin insists. Whenever you intend to travel any distance exceeding 1 mile, make a Wisdom saving throw (DC 12). On a failure, you must ride on Boblin’s shoulders.",
      "Boblin must succeed on a Constitution save after every 5 miles of travel (DC 12). On a failure he gains 1 level of exhaustion. If Boblin dies due to this exhaustion, you must end your journey on the spot and cannot leave for 12 hours, as Boblin’s body must have proper burial rites and a vigil watched."
    ]
  }
]
```

### GET `/api/vehicles/subtype`

Returns all vehicles types

```json
{
  "types": ["Mounts", "Land", "Water", "Air"]
}
```
