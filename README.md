# NaaS
Numbers as a Service

With NaaS you get Integers and Doubles as many as you want.
You can even save your Integers or Doubles by an ID and get them back
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

## Doubles

#### GET api/double
Return an Integer. You can set boundaries for min and max:
(Default Value for min is 0 and for max 1000)
You even can define the decimal places:
(Default Value is 2)

Example:
*http://localhost:1337/api/double?max=1337&min=13&dez=4*

And what you get is an incredible JSON:

```javascript
{"type":"double","value":160.2586,"dez":4,"max":1337,"min":13}
```

#### GET api/double/:id
Gets your own created int by ID.
*NOT YET IMPLEMENTED*

#### POST api/double
Creates your own awesome Double
*NOT YET IMPLEMENTED*

#### DELETE api/double
Deleting an Double you've created.
*NOT YET IMPLEMENTED*
