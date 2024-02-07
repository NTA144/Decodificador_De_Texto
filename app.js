
function criptografar() {
    let text= document.getElementById("text").value;
    console.log(text);
    let lenText= text;
     if (lenText.length>0) {
        let noTextImg = document.getElementById("principal_outputs_imagem");
        noTextImg.style.display= "none";
        let noTextTitulo= document.getElementById("principal__outputs__vazio");
        noTextTitulo.style.display= "none";
        let noTextParagrafo = document.getElementById("principal__outputs_paragrafo");
        noTextParagrafo.style.display= "none";

        let resposta= document.getElementById("principal__outputs__textoCriptografado")
    
        resposta.innerText=encode(text);
        resposta.style.display= "block";
        
        
    }
    
}

function descriptografar() {
  let text= document.getElementById("text").value;
  console.log(text);
  let lenText= text;
   if (lenText.length>0) {
      let noTextImg = document.getElementById("principal_outputs_imagem");
      noTextImg.style.display= "none";
      let noTextTitulo= document.getElementById("principal__outputs__vazio");
      noTextTitulo.style.display= "none";
      let noTextParagrafo = document.getElementById("principal__outputs_paragrafo");
      noTextParagrafo.style.display= "none";
      let resposta= document.getElementById("principal__outputs__textoCriptografado")
      resposta.innerText=decode(text);
      resposta.style.display= "block";
      
      
  }
  
}

function encode(texto) {
  if (!texto) {
    return "";
  }

  var mapeamento = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
  };

  var novoTexto = texto.replace(/[aeiou]/g, function(match) {
    return mapeamento[match];
  });

  return novoTexto;
}

function decode(texto) {
  if (!texto) {
    return "";
  }

  var mapeamento = {
  'ai': 'a',
  'enter': 'e',
  'imes': 'i',
  'ober': 'o',
  'ufat': 'u'
  };

  var novoTexto = texto.replace(/ai|enter|imes|ober|ufat/g, function(match) {
    return mapeamento[match];
  });

  return novoTexto;
}