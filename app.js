
//criptografar é usada quando o botão criptografar é acionado.
function criptografar() {
    let text= document.getElementById("text").value;
    let lenText= text;
    //se houver texto retira a mensagem de texto não encontrado da tela e apresenta texto criptografado.
     if (lenText.length>0) {
        let noTextImg = document.getElementById("principal_outputs_imagem");
        noTextImg.style.display= "none";
        let noTextTitulo= document.getElementById("principal__outputs__vazio");
        noTextTitulo.style.display= "none";
        let noTextParagrafo = document.getElementById("principal__outputs_paragrafo");
        noTextParagrafo.style.display= "none";

        let resposta= document.getElementById("principal__outputs__textoCriptografado");
        resposta.innerText=encode(text);
        resposta.style.display= "block";
        
    // caso não tenha nenhum texto apresenta mensagem de nenhum texto encontrado
    }else{
      let larguraDaTela = window.innerWidth;        
      if (larguraDaTela > 1080) {
        let noTextImg = document.getElementById("principal_outputs_imagem");
        noTextImg.style.display= "block";
      }
      
      let noTextTitulo= document.getElementById("principal__outputs__vazio");
      noTextTitulo.style.display= "block";
      let noTextParagrafo = document.getElementById("principal__outputs_paragrafo");
      noTextParagrafo.style.display= "block";
      let resposta= document.getElementById("principal__outputs__textoCriptografado")
      resposta.style.display= "none";
      
    }
  }
    

//criptografar é usada quando o botão descriptografar é acionado.
function descriptografar() {
  let text= document.getElementById("text").value;
  let lenText= text;
  //se houver texto retira a mensagem de texto não encontrado da tela e apresenta texto descriptografado.
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
      
  // caso não tenha nenhum texto apresenta mensagem de nenhum texto encontrado    
  }else{
    let larguraDaTela = window.innerWidth;

          
    if (larguraDaTela > 1080) {
      
      let noTextImg = document.getElementById("principal_outputs_imagem");
      noTextImg.style.display= "block";
    }
    
    let noTextTitulo= document.getElementById("principal__outputs__vazio");
    noTextTitulo.style.display= "block";
    let noTextParagrafo = document.getElementById("principal__outputs_paragrafo");
    noTextParagrafo.style.display= "block";
    let resposta= document.getElementById("principal__outputs__textoCriptografado")
    resposta.style.display= "none";
    
  }
  
}
//criptografa texto recebido
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

  let novoTexto = texto.replace(/[aeiou]/g, function(match) {
    return mapeamento[match];
  });
    return novoTexto;
}
//descriptografa texto recebido
function decode(texto) {
  if (!texto) {
    return "";
  }

  let mapeamento = {
  'ai': 'a',
  'enter': 'e',
  'imes': 'i',
  'ober': 'o',
  'ufat': 'u'
  };

  let novoTexto = texto.replace(/ai|enter|imes|ober|ufat/g, function(match) {
    return mapeamento[match];
  });

 
  return novoTexto;
  
  
}