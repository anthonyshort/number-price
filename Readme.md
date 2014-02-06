# number-price

  Takes a number and returns a nicely formatted price

## Installation

  Install with [component(1)](http://component.io):

    $ component install anthonyshort/number-price

## API

### price( Number|String, [prefix] )

Takes a number or a string (that is a number) and a prefix. By default this is just '$'. 

```js
price(10, 'AU$').long() // AU$10.00
price(10, 'NZ$').short() // NZ$10
price(10.5, 'US$').long() // US$10.50
```

All the types of formatting:

```js

price(1).long() === '$1.00'
price(1.5).long() === '$1.50'
price(300000).long() === '$300,000.00'
price(30000000).long() === '$30,000,000.00'
price('30000000').long() === '$30,000,000.00'
price('1.5').long() === '$1.50'

price(1).short() === '$1'
price(1.5).short() === '$1.50'
price(300000).short() === '$300,000'
price(30000000).short() === '$30,000,000'
price(30000000.5).short() === '$30,000,000.50'
price('30000000.5').short() === '$30,000,000.50'

```

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
