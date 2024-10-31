import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: "postgres",
  password: "postgres",
  database: "postgres",
  host: "postgres.cv5em1bsqv4y.us-east-1.rds.amazonaws.com",
  dbPort: 5432,
  aws_region: "",
  aws_profile: "",
  aws_media_bucket: "",
  url: "http://localhost:8080",
  jwt: {
    secret: "tienprovip",
  },
};
