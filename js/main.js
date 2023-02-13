let resultado = document.getElementById("resultado");

    const wipe = () => {
        resultado.value = "";
    }

    const show = (n) => {
        resultado.value += n;
    }

    const calc = () => {
        resultado.value =  eval(resultado.value)  }
