const error = (): never => {
  throw new Error("Algo deu errado");
};

const validade = (value: any) => {
  if (typeof value === "string") {
    return console.log("é um string");
  } else if (typeof value === "number") {
    return console.log("É um number");
  }

  console.log(error());
};
