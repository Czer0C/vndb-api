# VNDB API for my own list

Main idea is to use vndb-api module to serve as a backend for gathering data from VNDB

The challenge lies in how to organize a decent flow of query based on the restriction of VNDB namely:
- You can only request 25 items per API call for **`'get VN'`** command
- You can only request 100 items per API call for **`'get ulist'`** command

Since VNDB does not support join operation or any sort, I was forced to do manual **'join'** with my *wonky* JavaScript skill. The biggest headache was trying to fetch ***various*** API call for the **`'get VN'`** queries, which only worked on a `for` loop, but I guess it worked out in the end so welp.

As a bonus I also cleaned up some the redudant data after retrieving the two main lists *,~~this way my front-end pressure will be somewhat reduced 😂~~*. In the end this was a good pet project to have a better understanding of JavaScript in general, especially with the **Asyn/Await** stuff
