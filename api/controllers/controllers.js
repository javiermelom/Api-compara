export async function consumirApi() {
  let data = await fetch("https://rps101.pythonanywhere.com/api/v1/objects/all");
  let dataParseada = await data.json();
  //   console.log(dataParseada);
  return dataParseada;
}
export async function comparar(op1, op2) {
  let compare = await fetch(`https://rps101.pythonanywhere.com/api/v1/match?object_one=${op1}&object_two=${op2}`);
  let dataCompare = await compare.json();
  console.log(dataCompare);
  return dataCompare;
}