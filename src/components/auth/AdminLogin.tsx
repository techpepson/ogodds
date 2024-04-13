import { Button, Card, Heading, TextField } from "@radix-ui/themes";
import React from "react";

const AdminLogin: React.FC = () => {
  return (
    <>
      <div className={`container`}>
        <div>
          <form action="/" method="post">
            <Card>
              <Heading>Admin Login</Heading>
              <label htmlFor="name">Name:</label>
              <TextField.Root
                name="name"
                id="name"
                placeholder="Enter your admin name here"
              />
              <label htmlFor="password">Password</label>
              <TextField.Root
                type="password"
                name="password"
                placeholder="Enter your admin password"
              />
              <Button type="submit">Login</Button>
              <Button type="submit">Login with Google </Button>
            </Card>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
