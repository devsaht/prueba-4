let conversion = function conversion(matriz) {

  let temp = matriz.reduce((acc, el, index) => {
    acc[index] = el.reverse();
    return acc;
  }, []);

  let resultado = temp[0].map((col, i) =>
    temp.map((row) => row[i])
  );

  matrizInvertida = {
    resultado,
  };

  return matrizInvertida;
}

module.exports = {
  conversion
}