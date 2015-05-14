// JavaScript Document
var freqData=[
{Provincia:'Alajuela',freq:{Seguridadpromedio:6, Totalpuentes:7, Valoracionpromedio:3}}
,{Provincia:'Cartago',freq:{Seguridadpromedio:6, Totalpuentes:4, Valoracionpromedio:4}}
,{Provincia:'Guanacaste',freq:{Seguridadpromedio:2, Totalpuentes:9, Valoracionpromedio:8}}
,{Provincia:'Heredia',freq:{Seguridadpromedio:3, Totalpuentes:5, Valoracionpromedio:8}}
,{Provincia:'Limón',freq:{Seguridadpromedio:4, Totalpuentes:4, Valoracionpromedio:5}}
,{Provincia:'Puntarenas',freq:{Seguridadpromedio:1, Totalpuentes:6, Valoracionpromedio:6}}
,{Provincia:'San Jose',freq:{Seguridadpromedio:1, Totalpuentes:7, Valoracionpromedio:3}}
];




var freqData2 = Papa.parse('data/Puentes.csv'[header: true]);


dashboard('#dashboard',freqData);
