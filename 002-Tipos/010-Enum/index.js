var EMes;
(function (EMes) {
    EMes["JAN"] = "janeiro";
    EMes["FEV"] = "fevereiro";
    EMes["Mar"] = "Mar\u00E7o";
})(EMes || (EMes = {}));
var pessoa = {
    nome: "Luiz",
    mesAniversario: EMes.FEV,
};
if (pessoa.mesAniversario === EMes.FEV) {
    console.log(pessoa);
}
