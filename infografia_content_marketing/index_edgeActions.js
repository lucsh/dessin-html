
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_btnAnalytics}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasAnalytics");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("Chart").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnSEO}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasSEO");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("SEO").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnTarget}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasTarget");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("Target").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnTarget}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasTarget");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnSEO}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasSEO");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnAnalytics}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasAnalytics");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hypDessin}","click",function(sym,e){window.open("http://www.dessin.com.ar","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnLanding}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasLanding");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnLanding}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasLanding");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("Landing").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnAuto}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasAuto");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnAuto}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasAuto");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("Auto").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnPhone}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasPhone");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnPhone}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasPhone");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("Phone").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnPPC}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasPPC");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnPPC}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasPPC");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("PPC").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnGPlus}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasGPlus");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnGPlus}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasGPlus");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("GPlus").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#acabab');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("Phone").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Sito web adaptativo para proveer una mejor experiencia en el momento");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnTwitter}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasTwitter");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnTwitter}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasTwitter");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("Twitter").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnPlaces}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasPlaces");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnPlaces}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasPlaces");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("Places").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnStrategy}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasStrategy");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnStrategy}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasStrategy");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("Strategy").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnMail}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasMail");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnMail}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasMail");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("Mail").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnFacebook}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasFacebook");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnFacebook}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasFacebook");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("Facebook").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnWebinar}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasWebinar");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnWebinar}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasWebinar");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("Webinar").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnYouTube}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasYouTube");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnYouTube}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasYouTube");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("YouTube").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnLinkedIn}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasLinkedIn");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnLinkedIn}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasLinkedIn");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("LinkedIn").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnPinterest}","mouseenter",function(sym,e){var mySymbolObject=sym.getSymbol("lineasPinterest");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnPinterest}","mouseleave",function(sym,e){var mySymbolObject=sym.getSymbol("lineasPinterest");mySymbolObject.playReverse();sym.getComposition().getStage().$("bgIcon").css('display','none');sym.getComposition().getStage().$("Pinterest").css('display','none');sym.getComposition().getStage().$("txtInfo").css('display','none');});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$("txtBottom").html("Este es un árbol de la sabiduría del <i>content marketing</i> en tu negocio. Las raíces sólidas (infraestructura, SEO y Analítica) son necesarias para sostener el tronco (su sitio web) que soporta el peso de las actividades de los medios de comunicación social (la corona) que atraen a los potenciales clientes.");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_icoDessin}","click",function(sym,e){window.open("http://www.dessin.com.ar","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){$("#Stage").css("margin","auto");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'btnAnalytics'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnAnalytics");
//Edge symbol end:'btnAnalytics'

//=========================================================

//Edge symbol: 'btnAnalytics_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_SEO}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnSEO");
//Edge symbol end:'btnSEO'

//=========================================================

//Edge symbol: 'btnAnalytics_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnTarget");
//Edge symbol end:'btnTarget'

//=========================================================

//Edge symbol: 'btnAnalytics_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnLanding");
//Edge symbol end:'btnLanding'

//=========================================================

//Edge symbol: 'btnLanding_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnPhone");
//Edge symbol end:'btnPhone'

//=========================================================

//Edge symbol: 'btnPhone_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnPlaces");
//Edge symbol end:'btnPlaces'

//=========================================================

//Edge symbol: 'btnPlaces_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnWebinar");
//Edge symbol end:'btnWebinar'

//=========================================================

//Edge symbol: 'btnWebinar_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnPinterest");
//Edge symbol end:'btnPinterest'

//=========================================================

//Edge symbol: 'btnPinterest_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnStrategy");
//Edge symbol end:'btnStrategy'

//=========================================================

//Edge symbol: 'btnStrategy_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnFacebook");
//Edge symbol end:'btnFacebook'

//=========================================================

//Edge symbol: 'btnFacebook_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnLinkedIN");
//Edge symbol end:'btnLinkedIN'

//=========================================================

//Edge symbol: 'btnLinkedIN_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnTwitter");
//Edge symbol end:'btnTwitter'

//=========================================================

//Edge symbol: 'btnTwitter_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnYouTube");
//Edge symbol end:'btnYouTube'

//=========================================================

//Edge symbol: 'btnYouTube_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnGPlus");
//Edge symbol end:'btnGPlus'

//=========================================================

//Edge symbol: 'btnAnalytics_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnMail");
//Edge symbol end:'btnMail'

//=========================================================

//Edge symbol: 'btnMail_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnPPC");
//Edge symbol end:'btnPPC'

//=========================================================

//Edge symbol: 'btnPPC_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Circle_Analytics}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("btnAuto");
//Edge symbol end:'btnAuto'

//=========================================================

//Edge symbol: 'hypDessin'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_dessincomar}","click",function(sym,e){});
//Edge binding end
})("hypDessin");
//Edge symbol end:'hypDessin'

//=========================================================

//Edge symbol: 'lineasAnalytics'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#ef7c21');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("Chart").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Analisis web para medir y monitorear el comportamiento de las visitas en el sitio");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasAnalytics");
//Edge symbol end:'lineasAnalytics'

//=========================================================

//Edge symbol: 'lineasLanding'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#0d63a4');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("Landing").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Crea <i>Landing Pages</i> para ofertas especiales, descargas o promociones");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasLanding");
//Edge symbol end:'lineasLanding'

//=========================================================

//Edge symbol: 'lineasTarget'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#419bc3');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("Target").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Tu <i>Sitio Web</i> es donde todo el trafico debera estar dirigido");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasTarget");
//Edge symbol end:'lineasTarget'

//=========================================================

//Edge symbol: 'lineasSEO'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#be2025');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("SEO").css('display','block');sym.getComposition().getStage().$("txtInfo").html("La <i>Optimización de motores de búsqueda</i> ayuda a los clientes a encontrar tu sitio");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasSEO");
//Edge symbol end:'lineasSEO'

//=========================================================

//Edge symbol: 'lineasAuto'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#322f89');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("Auto").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Automatizacion con herramientas de <i>marketing</i> para incrementar la eficiencia");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasAuto");
//Edge symbol end:'lineasAuto'

//=========================================================

//Edge symbol: 'lineasPhone'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#acabab');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("Phone").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Sito web <i>adaptativo</i> para proveer una mejor experiencia al cliente");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasPhone");
//Edge symbol end:'lineasPhone'

//=========================================================

//Edge symbol: 'lineasPPC'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#eaad47');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("PPC").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Usa <i>PayPerClick</i> para encontrar potenciales clientes eficientemente");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasPPC");
//Edge symbol end:'lineasPPC'

//=========================================================

//Edge symbol: 'lineasTwitter'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#27a9e1');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("Twitter").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Comparti noticias de ultimo momento en <b>Twitter</b>, usando <i>hashtags</i> para maximizar el alzance");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasTwitter");
//Edge symbol end:'lineasTwitter'

//=========================================================

//Edge symbol: 'lineasGPlus'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#dd4b38');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("GPlus").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Crea un perfil en <b>Google Plus</b> para ayudar a los motores de busqueda");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasGPlus");
//Edge symbol end:'lineasGPlus'

//=========================================================

//Edge symbol: 'lineasPlaces'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#be2025');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("Places").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Registrate en paginas de localizacion para indicarle a tus potenciales clientes tu ubicacion");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasPlaces");
//Edge symbol end:'lineasPlaces'

//=========================================================

//Edge symbol: 'lineasStrategy'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#3ca8df');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("Strategy").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Tener una estrategia de Comunicacion social para definir objetivos y las herramientas necesarias");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasStrategy");
//Edge symbol end:'lineasStrategy'

//=========================================================

//Edge symbol: 'lineasMail'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#e4097c');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("Mail").css('display','block');sym.getComposition().getStage().$("txtInfo").html("El <i>marketing</i> por email es la mejor herramienta para darte a conocer");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasMail");
//Edge symbol end:'lineasMail'

//=========================================================

//Edge symbol: 'lineasWebinar'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#1e6c3a');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("Webinar").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Los <i>Webinars</i> (seminarios web) son una manera simple de atraer clientes");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasWebinar");
//Edge symbol end:'lineasWebinar'

//=========================================================

//Edge symbol: 'lineasFacebook'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#3b5998');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("Facebook").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Atrae a tus clientes con actualizaciones, consejos y promociones en <b>Facebook</b>. Considera crea un anuncio para obtener más alcance");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasFacebook");
//Edge symbol end:'lineasFacebook'

//=========================================================

//Edge symbol: 'lineasYouTube'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#d51f2a');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("YouTube").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Crea un canal de <b>YouTube</b> con videos de entrenamiento, testimonio de clientes o muestra de productos");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasYouTube");
//Edge symbol end:'lineasYouTube'

//=========================================================

//Edge symbol: 'lineasLinkedin'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#016599');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("LinkedIn").css('display','block');sym.getComposition().getStage().$("txtInfo").html("<b>LinkedIn</b> te ayuda a gestionar tus relaciones profesionales. Amplía e interactúa con tu red profesional");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasLinkedin");
//Edge symbol end:'lineasLinkedin'

//=========================================================

//Edge symbol: 'lineasPinterest'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",350,function(sym,e){sym.getComposition().getStage().$("bgIcon").css('background-color','#cc202d');sym.getComposition().getStage().$("bgIcon").css('display','block');sym.getComposition().getStage().$("Pinterest").css('display','block');sym.getComposition().getStage().$("txtInfo").html("Crea y administra tus tableros en <b>Pinterest</b>, <i>pinea</i> contenido relevante para tus clientes");sym.getComposition().getStage().$("txtInfo").css('display','block');});
//Edge binding end
})("lineasPinterest");
//Edge symbol end:'lineasPinterest'

//=========================================================

//Edge symbol: 'icoDessin'
(function(symbolName){})("icoDessin");
//Edge symbol end:'icoDessin'

//=========================================================

//Edge symbol: 'iconArrow'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Start}","mouseenter",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Start}","mouseleave",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Start}","click",function(sym,e){var element=sym.getComposition().getStage().$("linhTituloEnd")
$('html,body').animate({scrollTop:element.offset().top},"slow");});
//Edge binding end
})("iconArrow");
//Edge symbol end:'iconArrow'
})(jQuery,AdobeEdge,"DESSIN-399360422");