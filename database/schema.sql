DROP TABLE requests;
DROP TABLE users;

CREATE TABLE users (
  id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  password text,
  created_at timestamp DEFAULT NOW(),
  timezone text NOT NULL,
  last_login timestamp
);

CREATE TABLE requests (
  id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  user_id int NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  user_request jsonb,
  raw_request jsonb,
  raw_response text,
  parsed_response jsonb,
  time_scheduled timestamptz,
  time_sent timestamp,
  date_created timestamp NOT NULL DEFAULT NOW(),
  date_modified timestamp
);