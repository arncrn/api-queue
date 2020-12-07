-- INSERT INTO users (email, password, timezone)
-- VALUES ('joshua@gmail.com', 'josh', 'PST');

-- INSERT INTO requests (user_id, user_request, raw_request, parsed_response)
-- VALUES (
--   1, 
--   '{"id":"2","email":"frank@gmail.com","name":"req to apple","httpverb":"GET","hostpath":"http://dummy.restapiexample.com/api/v1/create","time":"15:15","timeZone":"PST","date":"1982-01-25T06:00:00.000Z","parameters":[{"id":"","key":"","value":""}],"headers":[{"id":"1","key":"Authorization","value":"1234asdf"},{"id":"2","key":"Content-Type","value":"application/json"}],"body":{"contentType":"application/json","payload":"{\"name\":\"test\",\"salary\":\"123\",\"age\":\"23\"}"}}',
--   'GET / HTTP/1.1\r\nAccept: application/json, text/plain, */*\r\nContent-Type: application/json\r\nAuthorization: 1234asdf\r\nUser-Agent: axios/0.21.0\r\nContent-Length: 41\r\nHost: www.google.com\r\nConnection: close\r\n\r\n,',
--   '{"status":"200","statusText":"OK"}'
--    );

-- INSERT INTO requests (user_id, user_request, time_scheduled) 
-- VALUES (1, '{"httpVerb":"GET","hostpath":"https://www.example.com","time":"14:00","timeZone":"CST","date":"2020-11-25T19:29:44.069Z","name":"Different time and time zone","headers":[{"id":"1","key":"Authorization","value":"1234asdf"},{"id":"2","key":"Content-type","value":"text/html"}],"parameters":[{"id":"1","key":"Authorization","value":"1234asdf"},{"id":"2","key":"Content-type","value":"text/html"}],"body":{"contentType":"","payload":""}}', '2020-11-25T10:00:00.000Z CST'); 

--  INSERT INTO requests (user_id, user_request, time_scheduled) 
--  VALUES (1, '{"httpVerb":"GET","hostpath":"https://www.example.com","time":"13:31","timeZone":"PST","date":"2020-11-25T19:31:02.938Z","name":"With pacific time zone","headers":[[null]],"parameters":[[null]],"body":{"contentType":"","payload":""}}', '2020-11-25T21:31:00.000Z');


-- SELECT time_scheduled FROM requests;


-- {
--     httpVerb: "GET",
--     hostpath: "https://www.example.com",
--     time: "14:00",
--     timeZone: "CST",
--     date: "2020-11-25T19:29:44.069Z",
--     name: "Different time and time zone",
--     headers: [
--         {
--             id: "1",
--             key: "Authorization",
--             value: "1234asdf",
--         },
--         {
--             id: "2",
--             key: "Content-type",
--             value: "text/html",
--         }
--     ],
--     parameters: [
--         {
--             id: "1",
--             key: "Authorization",
--             value: "1234asdf",
--         },
--         {
--             id: "2",
--             key: "Content-type",
--             value: "text/html",
--         }
--     ],
--     body: {
--         contentType: "",
--         payload: ""
--     }
-- }




-- INSERT INTO requests (user_id, user_request, time_scheduled) VALUES ($1, $2, $3) RETURNING id [
--   1,
--   {
--     httpVerb: 'GET',
--     hostpath: 'https://www.example.com',
--     time: '15:22',
--     timeZone: 'PST',
--     date: '2020-11-25T23:22:10.688Z',
--     name: 'example (1)',
--     headers: [ [Object] ],
--     parameters: [ [Object] ],
--     body: { contentType: '', payload: '' }
--   },
--   '2020-11-25 15:22:00 PST'
-- ]