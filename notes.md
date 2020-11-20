1. Frontend form sends user request to OUR server (HOC - POST /makerequests )
2. Server inserts user request into database
  - if success, then it sends the request on behalf of user
3. Server sends API call on behalf of users
4. Server receives response from that API call
5. Inserts the response data into the database
6. Database updated
7. Sends back response to the Frontend
8. Frontend receives response from server
9. Frontend makes GET request to server
10. Frontend updates local state with database data

1. Frontend form sends user request to OUR server – 1223
2. Server inserts user request into database 1246
3. Server sends API call on behalf of users 1265
4. Server receives response from that API call 1375
5. Inserts the response data into the database 1375
8. Sends back response to the Frontend 1376
7. Frontend receives response from server – 1378
9. Frontend makes GET request to server – 1379
6. Database updated 1396
10. Frontend updates local state with database data – 1402
