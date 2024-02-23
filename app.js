

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
        
        
    }else{
      var larguraDaTela = window.innerWidth;

            
      if (larguraDaTela > 1080) {
        console.log('Tela menor que 1080 pixels - execute alguma ação aqui');
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
      
      
  }else{
    var larguraDaTela = window.innerWidth;

          
    if (larguraDaTela > 1080) {
      console.log('Tela menor que 1080 pixels - execute alguma ação aqui');
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