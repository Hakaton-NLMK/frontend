import React, { useState } from "react";
import { Card, Typography, Box, Input, Button } from "@nlmk/ds-2.0";

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit = (email, password) =>
    console.log("Login submitted:", { email, password }),
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Box flexDirection="column" gap="var(--24-space)">
          <Typography variant="Heading3">Вход</Typography>
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            label="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="primary">
            Войти
          </Button>
        </Box>
      </form>
    </Card>
  );
};

export default LoginForm;
