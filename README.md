# NaaS
Numbers as a Service

With NaaS you get Integers and floats as many as you want.
You can even save your Integers or floats by an ID and get them back
by calling the ID.

Here is the incredible API:

## Integers

#### GET api/int
Return an Integer. You can set boundaries for min and max:
(The Default Value for min is 0 and for max 1000)

Example:
*http://localhost:1337/api/int?max=1111&min=11*

And what you get is an incredible JSON:

```javascript
{"type":"int","value":1090,"max":1111,"min":11}
```

#### GET api/int/:id
Gets your own created int by ID.
*NOT YET IMPLEMENTED*

#### POST api/int
Creates your own awesome Integer
*NOT YET IMPLEMENTED*

#### DELETE api/int
Deleting an Integer you've created.
*NOT YET IMPLEMENTED*

## Floats

#### GET api/float
Return an Integer. You can set boundaries for min and max:
(Default Value for min is 0 and for max 1000)
You even can define the precision:
(Default Value is 2 and can't be longer than 20)

Example:
*http://localhost:1337/api/float?max=1337&min=13&precision=3*

And what you get is an incredible JSON:

```javascript
{"type":"float","value":"1006.598","precision":3,"max":1337,"min":13}
```

#### GET api/float/:id
Gets your own created int by ID.
*NOT YET IMPLEMENTED*

#### POST api/float
Creates your own awesome float
*NOT YET IMPLEMENTED*

#### DELETE api/float
Deleting an Double you've created.
*NOT YET IMPLEMENTED*
