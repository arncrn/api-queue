class LoggedInUser {

  

  queryResult = await dbquery(
    `SELECT email FROM users WHERE email = $1`, [submittedEmail]
  );



}