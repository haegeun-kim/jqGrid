!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","../grid.base"],e):e(jQuery)}(function(e){e.jgrid=e.jgrid||{},e.jgrid.hasOwnProperty("regional")||(e.jgrid.regional=[]),e.jgrid.regional.de={defaults:{recordtext:"Zeige {0} - {1} von {2}",emptyrecords:"Keine Datensätze vorhanden",loadtext:"Lädt...",savetext:"Speichern...",pgtext:"Seite {0} von {1}",pgfirst:"erste Seite",pglast:"letzte Seite",pgnext:"nächste Seite",pgprev:"vorherige Seite",pgrecs:"Datensätze pro Seite",showhide:"Toggle erweitern reduzieren",pagerCaption:"Grid::Seite Optionen",pageText:"Seite:",recordPage:"Ergebnisse pro Seite",nomorerecs:"Keine weiteren Datensätze...",scrollPullup:"Ziehen Sie, um mehr zu laden...",scrollPulldown:"Pulldown zu aktualisieren...",scrollRefresh:"Lassen Sie zu aktualisieren..."},search:{caption:"Suche...",Find:"Suchen",Reset:"Zurücksetzen",odata:[{oper:"eq",text:"gleich"},{oper:"ne",text:"ungleich"},{oper:"lt",text:"kleiner"},{oper:"le",text:"kleiner gleich"},{oper:"gt",text:"größer"},{oper:"ge",text:"größer gleich"},{oper:"bw",text:"beginnt mit"},{oper:"bn",text:"beginnt nicht mit"},{oper:"in",text:"ist in"},{oper:"ni",text:"ist nicht in"},{oper:"ew",text:"endet mit"},{oper:"en",text:"endet nicht mit"},{oper:"cn",text:"enthält"},{oper:"nc",text:"enthält nicht"},{oper:"nu",text:"ist Null"},{oper:"nn",text:"ist nicht Null"},{oper:"bt",text:"zwischen"}],groupOps:[{op:"AND",text:"alle"},{op:"OR",text:"mindestens eine"}],operandTitle:"Klicken Sie auf Suchoperation zu wählen.",resetTitle:"Reset Suche Wert",addsubgrup:"Gruppe hinzufügen",addrule:"In der Regel",delgroup:"Gruppe löschen",delrule:"Regel löschen"},edit:{addCaption:"Datensatz hinzufügen",editCaption:"Datensatz bearbeiten",bSubmit:"Speichern",bCancel:"Abbrechen",bClose:"Schließen",saveData:"Daten wurden geändert! Änderungen speichern?",bYes:"ja",bNo:"nein",bExit:"abbrechen",msg:{required:"Feld ist erforderlich",number:"Bitte geben Sie eine Zahl ein",minValue:"Wert muss größer oder gleich sein, als ",maxValue:"Wert muss kleiner oder gleich sein, als ",email:"ist keine gültige E-Mail-Adresse",integer:"Bitte geben Sie eine Ganzzahl ein",date:"Bitte geben Sie ein gültiges Datum ein",url:"ist keine gültige URL. Präfix muss eingegeben werden ('http://' oder 'https://')",nodefined:" ist nicht definiert!",novalue:" Rückgabewert ist erforderlich!",customarray:"Benutzerdefinierte Funktion sollte ein Array zurückgeben!",customfcheck:"Benutzerdefinierte Funktion sollte im Falle der benutzerdefinierten Überprüfung vorhanden sein!"}},view:{caption:"Datensatz anzeigen",bClose:"Schließen"},del:{caption:"Löschen",msg:"Ausgewählte Datensätze löschen?",bSubmit:"Löschen",bCancel:"Abbrechen"},nav:{edittext:" ",edittitle:"Ausgewählte Zeile editieren",addtext:" ",addtitle:"Neue Zeile einfügen",deltext:" ",deltitle:"Ausgewählte Zeile löschen",searchtext:" ",searchtitle:"Datensatz suchen",refreshtext:"",refreshtitle:"Tabelle neu laden",alertcap:"Warnung",alerttext:"Bitte Zeile auswählen",viewtext:"",viewtitle:"Ausgewählte Zeile anzeigen",savetext:"",savetitle:"Zeile speihern",canceltext:"",canceltitle:"Zeile abbrechen",selectcaption:"Aktionen..."},col:{caption:"Spalten auswählen",bSubmit:"Speichern",bCancel:"Abbrechen"},errors:{errcap:"Fehler",nourl:"Keine URL angegeben",norecords:"Keine Datensätze zu bearbeiten",model:"colNames und colModel sind unterschiedlich lang!"},formatter:{integer:{thousandsSeparator:".",defaultValue:"0"},number:{decimalSeparator:",",thousandsSeparator:".",decimalPlaces:2,defaultValue:"0,00"},currency:{decimalSeparator:",",thousandsSeparator:".",decimalPlaces:2,prefix:"",suffix:" €",defaultValue:"0,00"},date:{dayNames:["So","Mo","Di","Mi","Do","Fr","Sa","Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],monthNames:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez","Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],AmPm:["","","",""],S:function(){return"."},srcformat:"Y-m-d",newformat:"d.m.Y",parseRe:/[#%\\\/:_;.,\t\s-]/,masks:{ISO8601Long:"Y-m-d H:i:s",ISO8601Short:"Y-m-d",ShortDate:"d.m.Y",LongDate:"l, j. F Y",FullDateTime:"l, j. F Y H:i:s",MonthDay:"d F",ShortTime:"H:i",LongTime:"H:i:s",SortableDateTime:"Y-m-d\\TH:i:s",UniversalSortableDateTime:"Y-m-d H:i:sO",YearMonth:"F Y"},reformatAfterEdit:!1,userLocalTime:!1},baseLinkUrl:"",showAction:"",target:"",checkbox:{disabled:!0},idName:"id"},colmenu:{sortasc:"Aufsteigend sortieren",sortdesc:"Absteigend sortieren",columns:"Spalte",filter:"Filter",grouping:"Gruppiere nach",ungrouping:"Gruppierung aufheben",searchTitle:"Erhalten Sie Artikel mit Wert:",freeze:"Einfrieren",unfreeze:"Freigeben",reorder:"Bewegen neu anordnen"}}});