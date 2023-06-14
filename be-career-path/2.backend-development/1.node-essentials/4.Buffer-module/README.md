1. In buffer.js, use the .alloc() method with a size of ‘15’ and a fill value of 'b'. Save the created Buffer object to a const variable named bufferAlloc.

2. In buffer.js, create two const variables buffer1 and buffer2. Instantiate two Buffer objects using the .from() method. Pass the string 'hello' into buffer1 and 'world' into buffer2.

3. Create a variable named bufferArray and set it equal to an array that contains buffer1 and buffer2. Then, pass bufferArray to the .concat() method to combine the two buffers into a new Buffer object. Save the result to a const variable named bufferConcat.

4. Using the .toString() method, save the string translation of bufferConcat to a variable named bufferString, then log the value of bufferString to the console.

Remember that you can run buffer.js by running the command:

node buffer.js