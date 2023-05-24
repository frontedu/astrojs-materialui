import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";

export default function Form() {
  return (
    <form action="#" className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-3">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="Primeiro nome"
            variant="outlined"
          />
        </Box>
      </div>

      <div className="col-span-6 sm:col-span-3">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="Último nome"
            variant="outlined"
          />
        </Box>
      </div>

      <div className="col-span-6">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="E-mail"
            variant="outlined"
          />
        </Box>
      </div>

      <div className="col-span-6 sm:col-span-3">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-password-required"
            type="password"
            label="Senha"
            variant="outlined"
            autoComplete="current-password"
          />
        </Box>
      </div>

      <div className="col-span-6 sm:col-span-3">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-repeat-password-required"
            type="password"
            label="Repetir senha"
            variant="outlined"
            autoComplete="current-password"
          />
        </Box>
      </div>

      <div className="col-span-6">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Quero receber emails sobre eventos e atualizações dos produtos da empresa."
          />
        </Box>
      </div>

      <div className="col-span-6">
        <p className="text-sm text-gray-500">
          Ao informar meus dados, você concordo com a&#32;
          <a href="#" className="text-gray-700 underline">
            Política de Privacidade
          </a>
          &#32; e com os&#32;
          <a href="#" className="text-gray-700 underline">
            Termos de Uso
          </a>
          .
        </p>
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <Button size="large" variant="contained">
          Criar uma conta
        </Button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Já tem uma conta?&#32;
          <a href="#" className="text-gray-700 underline">
            Entrar
          </a>
          .
        </p>
      </div>
    </form>
  );
}
