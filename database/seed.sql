-- INSERT INTO users (email, name, password, timezone)
-- VALUES ('joshua@gmail.com', 'Joshua Tree', 'josh', 'PST');

INSERT INTO requests (user_id, user_request, raw_request, raw_response)
VALUES (
  1, 
  '{"id":"2","email":"frank@gmail.com","name":"req to apple","httpverb":"GET","hostpath":"http://dummy.restapiexample.com/api/v1/create","time":"15:15","timeZone":"PST","date":"1982-01-25T06:00:00.000Z","parameters":[{"id":"","key":"","value":""}],"headers":[{"id":"1","key":"Authorization","value":"1234asdf"},{"id":"2","key":"Content-Type","value":"application/json"}],"body":{"contentType":"application/json","payload":"{\"name\":\"test\",\"salary\":\"123\",\"age\":\"23\"}"}}',
  'GET / HTTP/1.1\r\nAccept: application/json, text/plain, */*\r\nContent-Type: application/json\r\nAuthorization: 1234asdf\r\nUser-Agent: axios/0.21.0\r\nContent-Length: 41\r\nHost: www.google.com\r\nConnection: close\r\n\r\n,',
  '{"status":"200","statusText":"OK"}'
   );