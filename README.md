I'm not sure how familiar you are with node, but please run an npm install in the root of the project folder to make sure all the dependencies are installed :) You will need npm/node installed on the computer, it is possible to compile the command line utility into a freestanding binary as well

I chose javascript because its the most versatile language I know, capable of doing the most with the least amount of code, to demonstrate this.. there are 5 ways that the same class/logic can be executed here,


1. through node you use the command line (cli.js) either by passing a filename eg. node cli.js instructions.js

2. or by executing the cli and then typing the instructions in, blank line end the series of instructions, I could have spent some more time on making the tools more verbose, but I kinda wanna finish the technical test today :)

3. you can start a node service that listens on port 3000, posting the content of instrutions.txt to it on port 3000 using an app like postman (https://www.getpostman.com/) node server.js

4. finally i've included an html file with embedded javascript that can either be opened in a browser directly with 'File > Open' or hosted on any web server for eg. apache or nginx. 

5. That can be embedded into a ui installable for eg. phonegap type of application for mobile, or on desktop too, all using the same code base.


Any instruction other the recognized instructions are ignored

Any line that has too many spaces is ignored

Empty lines are ignored

Exception case, for eg. going off the edges of the map are reported in _exceptions, but I dont output that anywhere, I just wanted to point out that I did think about it,

