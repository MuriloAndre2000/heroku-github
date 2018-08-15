
var titulo = ["Israel Travel Guide","","Letters"];
var texto = ["Israel has always been a standout destination. From the days of prophets to the modern day nomad this tiny slice of land on the eastern Mediteranean has long attracted visitors. While some arrive in the ‘Holy Land’ on a spiritual quest, many others are on cultural tours, beach holidays and eco-tourism trips. Weeding through Israel’s convoluted history is both exhilarating and exhausting. There are crumbling temples, ruined cities, abandoned forts and hundreds of places associated with the Bible. And while a sense of adventure is required, most sites are safe and easily accessible. Most of all, Israel is about its incredibly diverse population. Jews come from all over the world to live here, while about 20% of the population is Muslim. Politics are hard to get away from in Israel as everyone has an opinion on how to move the country forward — with a ready ear you’re sure to hear opinions from every side of the political spectrum.","One of the things that made an incredible impression on me in the film was Frida's comfort in and celebration of her own unique beauty. She didn't try to fit into conventional ideas or images about womanhood or what makes someone or something beautiful. Instead, she fully inhabited her own unique gifts, not particularly caring what other people thought. She was magnetic and beautiful in her own right. She painted for years, not to be a commercial success or to be discovered, but to express her own inner pain, joy, family, love and culture. She absolutely and resolutely was who she was. The trueness of her own unique vision and her ability to stand firmly in  her own truth was what made her successful in the end","Children and Guns<br>Published: May 7, 2013<br>To the Editor: Re “Girl’s Death by Gunshot Is Rejected as Symbol” (news article, May 6):<br> I find it abhorrent that the people of Burkesville. Ky.. are not willing to learn a lesson from the tragic shooting of a 2-year-old girl by her 5-year-old brother. I am not judging their lifestyle of introducing guns to children at a young age, but I do feel that it’s irresponsible not to practice basic safety with anything potentially lethal - guns, knives, fire and so on. How can anyone justify leaving guns lying around, unlocked and possibly loaded, in a home with two young children? I wissh the family of the victim comfort during this difficult time, but to dismiss this as a simple accident leaves open the potential for many more such “accidents” to occur. I hope this doesn’t have to happen several more times for legislators to realize that something needs to be changed. <br>EMILY LOUBATON<br>Brooklyn, May 6, 2013"];
var fonte = ['Disponível em: www.worldtravelguide.net. Acesso em: 15 jun. 2012','HUTZLER, L. Disponível em: www.etbscreenwriting.com. Acesso em: 6 maio 2013.','Disponível em: www.nytimes.com. Acesso em: 10 maio 2013'];
var outrotexto = ['','',''];
var outrafonte = ['','',''];
var enunciado = ['Antes de viajar, turistas geralmente buscam informações sobre o local para onde pretendem ir. O trecho do guia de viagens de Israel','A autora desse comentário sobre o filme Frida mostra-se impressionada com o fato de a pintora','No que diz respeito à tragédia ocorrida em Burkesville, a autora da carta enviada ao The New York Times busca'];
var letraA = ['descreve a história desse local para que turistas valorizem seus costumes milenares.','ter uma aparência exótica.','reconhecer o acidente noticiado como um fato isolado.'];
var letraB = ['informa hábitos religiosos para auxiliar turistas a entenderem as diferenças culturais','vender bem a sua imagem.','responsabilizar o irmão da vítima pelo incidente ocorrido.'];
var letraC = ['divulga os principais pontos turísticos para ajudar turistas a planejarem sua viagem.','ter grande poder de sedução','apresentar versão diferente da notícia publicada pelo jornal.'];
var letraD = ['recomenda medidas de segurança para alertar turistas sobre possíveis riscos locais','assumir sua beleza singular','expor sua indignação com a negligência de portadores de armas.'];
var letraE = ['apresenta aspectos gerais da cultura do país para continuar a atrair turistas estrangeiros','recriar-se por meio da pintura','reforçar a necessidade de proibição do uso de armas por crianças.'];
var respostas0;
var respostas1;
var respostas2;
var comentarios =["Como podemos ver no texto, o guia menciona aspectos culturais de israel para atrais turistas, mencionando: Geografia do local, eco-turimo e busca por locais descritos na bíblia.","É possível analizar no texto: One of the things that made an incredible impression on me in the film was Frida's comfort in and celebration of her own unique beauty.","Lê-se no texto: ...I do feel that it’s irresponsible not to practice basic safety with anything potentially lethal - guns, knives, fire and so on. How can anyone justify leaving guns lying around, unlocked and possibly loaded, in a home with two young children? "];
var respostascertas = ['E','D','D'];
var resposta = [respostas0, respostas1, respostas2];

function letraA0(){document.getElementById('altA0').style.backgroundColor= 'Blue';document.getElementById('altB0').style.backgroundColor='White';document.getElementById('altC0').style.backgroundColor='White';document.getElementById('altD0').style.backgroundColor='White';document.getElementById('altE0').style.backgroundColor='White'; respostas0 = "A";}
function letraB0(){document.getElementById('altA0').style.backgroundColor='White';document.getElementById('altB0').style.backgroundColor= 'Blue';document.getElementById('altC0').style.backgroundColor='White';document.getElementById('altD0').style.backgroundColor='White';document.getElementById('altE0').style.backgroundColor='White'; respostas0 = "B";}
function letraC0(){document.getElementById('altA0').style.backgroundColor='White';document.getElementById('altB0').style.backgroundColor='White';document.getElementById('altC0').style.backgroundColor= 'Blue';document.getElementById('altD0').style.backgroundColor='White';document.getElementById('altE0').style.backgroundColor='White'; respostas0 = "C";}
function letraD0(){document.getElementById('altA0').style.backgroundColor='White';document.getElementById('altB0').style.backgroundColor='White';document.getElementById('altC0').style.backgroundColor='White';document.getElementById('altD0').style.backgroundColor=' Blue';document.getElementById('altE0').style.backgroundColor='White'; respostas0 = "D";}
function letraE0(){document.getElementById('altA0').style.backgroundColor='White';document.getElementById('altB0').style.backgroundColor='White';document.getElementById('altC0').style.backgroundColor='White';document.getElementById('altD0').style.backgroundColor='White';document.getElementById('altE0').style.backgroundColor='Blue '; respostas0 = "E";}

function letraA1(){document.getElementById('altA1').style.backgroundColor= 'Blue';document.getElementById('altB1').style.backgroundColor='White';document.getElementById('altC1').style.backgroundColor='White';document.getElementById('altD1').style.backgroundColor='White';document.getElementById('altE1').style.backgroundColor='White'; respostas1 = "A";}
function letraB1(){document.getElementById('altA1').style.backgroundColor='White';document.getElementById('altB1').style.backgroundColor= 'Blue';document.getElementById('altC1').style.backgroundColor='White';document.getElementById('altD1').style.backgroundColor='White';document.getElementById('altE1').style.backgroundColor='White'; respostas1 = "B";}
function letraC1(){document.getElementById('altA1').style.backgroundColor='White';document.getElementById('altB1').style.backgroundColor='White';document.getElementById('altC1').style.backgroundColor= 'Blue';document.getElementById('altD1').style.backgroundColor='White';document.getElementById('altE1').style.backgroundColor='White'; respostas1 = "C";}
function letraD1(){document.getElementById('altA1').style.backgroundColor='White';document.getElementById('altB1').style.backgroundColor='White';document.getElementById('altC1').style.backgroundColor='White';document.getElementById('altD1').style.backgroundColor=' Blue';document.getElementById('altE1').style.backgroundColor='White'; respostas1 = "D";}
function letraE1(){document.getElementById('altA1').style.backgroundColor='White';document.getElementById('altB1').style.backgroundColor='White';document.getElementById('altC1').style.backgroundColor='White';document.getElementById('altD1').style.backgroundColor='White';document.getElementById('altE1').style.backgroundColor=' Blue'; respostas1 = "E";}

function letraA2(){document.getElementById('altA2').style.backgroundColor= 'Blue';document.getElementById('altB2').style.backgroundColor='White';document.getElementById('altC2').style.backgroundColor='White';document.getElementById('altD2').style.backgroundColor='White';document.getElementById('altE2').style.backgroundColor='White'; respostas2 = "A";}
function letraB2(){document.getElementById('altA2').style.backgroundColor='White';document.getElementById('altB2').style.backgroundColor= 'Blue';document.getElementById('altC2').style.backgroundColor='White';document.getElementById('altD2').style.backgroundColor='White';document.getElementById('altE2').style.backgroundColor='White'; respostas2 = "B";}
function letraC2(){document.getElementById('altA2').style.backgroundColor='White';document.getElementById('altB2').style.backgroundColor='White';document.getElementById('altC2').style.backgroundColor= 'Blue';document.getElementById('altD2').style.backgroundColor='White';document.getElementById('altE2').style.backgroundColor='White'; respostas2 = "C";}
function letraD2(){document.getElementById('altA2').style.backgroundColor='White';document.getElementById('altB2').style.backgroundColor='White';document.getElementById('altC2').style.backgroundColor='White';document.getElementById('altD2').style.backgroundColor=' Blue';document.getElementById('altE2').style.backgroundColor='White'; respostas2 = "D";}
function letraE2(){document.getElementById('altA2').style.backgroundColor='White';document.getElementById('altB2').style.backgroundColor='White';document.getElementById('altC2').style.backgroundColor='White';document.getElementById('altD2').style.backgroundColor='White';document.getElementById('altE2').style.backgroundColor=' Blue'; respostas2 = "E";}

function verificarquestao(){

  var i;
  for (i = 0; i < 2; i++){
    if (resposta[i] === respostascertas[i]){
      console.log("acertou");
    }
    else {
      console.log("errou");
    }
  }

}
