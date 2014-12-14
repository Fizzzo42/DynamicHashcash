## Idea
The idea is to implement a server and client where as the client has to "work" before being able to connect to the server.  
### How it works (Procedure on every Request)
1. Client tries to connect to the server.
2. Server adds 2 HTML Header Tags to the Request

```
	challenge	9tmfp8n0zfr	(randomly generated)
	difficulty	5			(depending on Server load)
```
3. Client tries to find a String which added to the challenge String generates a SHA256-Hash which starts with 00000 (difficulty determines amount of 0's).
4. Client adds the additional String to the HTML Response Header

```
	solution	hfw8aerh
```
5. Server generates SHA256-Hash of both Challenge-String and Solution-String combined. If it also starts with X amount of 0's, access is granted. Else access is denied.

### What is Hashcash?
[Wikipedia](http://en.wikipedia.org/wiki/Hashcash)