
String.prototype.sansAccent = function(){
    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
        ];
        var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];

        var str = this;
        for(var i = 0; i < accent.length; i++){
            str = str.replace(accent[i], noaccent[i]);
        }   
        return str;
    }
    function Keyword(){
        this.Init = function(){
            this.keyword = {'salle':({tag:['salle'],find:['des|la|les|des']}),
            'ecole':({tag:['ecole'],find:['l\'|les|des']}),
            'restaurer':({tag:['restauration'],find:['me|se']}),
            'restauration':({tag:['restauration'],find:['de']}),
            'ascenseur':({tag:['ascenseur'],find:['l\'|les|des']}),
            'toilette':({tag:['toilette'],find:['les|des']}),
            'detente':({tag:['detente'],find:['de|la']}),
            'detendre':({tag:['detente'],find:['me|se']}),
            'travail':({tag:['travail'],find:['le|de']}),
            'manger':({tag:['restauration'],find:['ou']}),
            'bouffer':({tag:['restauration'],find:['ou']}),
            'dejeuner':({tag:['restauration']}),
            'boire':({tag:['eau']}),
            'formation':({tag:['formation']}),
            'metier':({tag:['formation']}),
            'bibliothèque':({tag:['infothèque'],find:['une']}),
            'escalier':({tag:['escalier'],find:['des|les']}),
            'baby-foot':({tag:['baby-foot'],find:['un']}),
            'distributeur':({tag:['restauration'],find:['des|un']}),
            'handicapé':({tag:['handicapé']}),
            'garer':({tag:['parking'],find:['me|se']}),
            'stationner':({tag:['parking'],find:['me|se']}),
            'conference':({tag:['conference'],find:['une|des|aux']}),
            'incubateur':({tag:['incubateur'],find:['l\'|un|des|les']}),
            'programme':({tag:['programme']}),
            'programation':({tag:['salle']}),
            'formation':({tag:['formation']}),
            'formateur':({tag:['prof']}),
            'entreprise':({tag:['entreprise']}),
            'parten':({tag:['entreprise']}),
            'horaire':({tag:['heure']}),
            'enfant':({tag:['maternelle']}),
            'ferme':({tag:['fermer']}),
            'imprim':({tag:['imprimer']}),
            'ouvert':({tag:['ouvrir']}),
            'ascenseur':({tag:['ascenseur'],find:['l\'|un|des|les']}),
            'escalier':({tag:['escalier'],find:['l\'|un|des|les']}),
            'local':({tag:['local']}),
            'heure':({tag:['heure']}),
            'fumer':({tag:['parking']}),
            'fumeur':({tag:['parking']}),
            'diplome':({tag:['formation']}),
            'velo':({tag:['parking'],find:['en']}),
            'moto':({tag:['parking'],find:['en']}),
            'voiture':({tag:['parking'],find:['en']}),
            'réservation':({tag:['salle','réservation']}),
            'libre':({tag:['salle','libre']}),
            'disponible':({tag:['salle','libre']}),
            'extincteur':({tag:['extincteur']}),
            'repos':({tag:['repos'], find:['de']}),
            'sorti':({tag:['sorti']})};
            this.match  = [];
            this.ecole = {'epsi':({id:1,etage:-1,nom:'epsi',tag:['administration'],find:['l\'|ecole']}),
            'open source school':({id:2,etage:0,nom:'open source school',tag:['administration'],find:['l\'|ecole|sur']}),
            'sup de com':({id:3,etage:0,nom:'sup de com',tag:['administration'],find:['l\'|ecole|sur']}),
            'idrac':({id:4,etage:0,nom:'idrac',tag:['administration'],find:['l\'|ecole|sur']}),
            'escd 3a':({id:5,etage:0,nom:'escd 3a',tag:['administration'],find:['l\'|ecole|sur']}),
            'icl':({id:6,etage:0,nom:'icl',tag:['administration'],find:['l\'|ecole|sur']}),
            'ileri':({id:7,etage:0,nom:'ileri',tag:['administration'],find:['l\'|ecole|sur']}),
            'ieft':({id:9,etage:0,nom:'ieft',tag:['administration'],find:['l\'|ecole|sur']}),
            'ifag':({id:10,etage:0,nom:'ifag',tag:['administration'],find:['l\'|ecole|sur']}),
            'igefi':({id:11,etage:0,nom:'idrac',tag:['administration'],find:['l\'|ecole|sur']}),
            'ihedrea':({id:0,etage:0,nom:'ihedrea',tag:['administration'],find:['l\'|ecole|sur']}),
            'iet':({id:12,etage:0,nom:'iet',tag:['administration'],find:['l\'|ecole|sur']})};


            this.salle = {'J01':({id:13,etage:-1,nom:'J01',tag:['none','travail'],find:['la|salle'],ref:['epsi']}),
            'maternelle':({id:14,etage:-1,nom:'Maternelle',tag:['none','maternelle'],find:['la|une']}),
            'J10C':({id:15,etage:-1,nom:'Bureau informatique',tag:['salles'],find:['la|salle']}),
            'espace personnel':({id:16,etage:-1,nom:'Espace personnel',tag:['salles'],find:['l\'|un']}),
            'J03':({id:18,etage:-1,nom:'J03',tag:['salles','travail'],find:['la|salle']}),
            'J21':({id:21,etage:-1,nom:'J21',tag:['salles'],find:['la|salle'],ref:['epsi']}),
            'J20':({id:22,etage:-1,nom:'J20',tag:['salles'],find:['la|salle'],ref:['epsi']}),
            'J19A':({id:23,etage:-1,nom:'J19',tag:['salles'],find:['la|salle'],ref:['epsi']}),
            'J19B':({id:24,etage:-1,nom:'J19B',tag:['salles'],find:['la|salle'],ref:['epsi']}),
            'J19C':({id:25,etage:-1,nom:'J19C',tag:['salles'],find:['la|salle'],ref:['epsi']}),
            'J19D':({id:26,etage:-1,nom:'J19D',tag:['salles'],find:['la|salle'],ref:['epsi']}),
            'J11':({id:27,etage:-1,nom:'J11',tag:['salles','travail'],find:['la|salle']}),
            'cafeteria':({id:28,etage:-1,nom:'cafeteria',tag:['detente','restauration','baby-foot','distributeur','eau'],find:['la|une']}),                   
            'infotheque':({id:30,etage:-1,nom:'infothèque',tag:['travail','conference'],find:['l\'|une']}),
            'J10A':({id:32,etage:-1,nom:'J10',tag:['salles','travail'],find:['la|salle']}),
            'J09':({id:33,etage:-1,nom:'J09',tag:['salles','travail'],find:['la|salle']}),
            'J14':({id:38,etage:-1,nom:'J14',tag:['salles','travail'],find:['la|salle']}),
            'J15':({id:39,etage:-1,nom:'J15',tag:['salles','travail'],find:['la|salle']}),
            'J16':({id:40,etage:-1,nom:'J16',tag:['salles','travail'],find:['la|salle']}),
            'J10B':({id:41,etage:-1,nom:'J17',tag:['salles','travail'],find:['la|salle']}),
            'J13':({id:43,etage:-1,nom:'J13',tag:['salles','travail','incubateur'],find:['la|salle']}),
            'amphitheatre':({id:44,etage:0,nom:'amphitheatre',tag:['salles','travail','conference'],find:['la|salle']}),
            'foyer':({id:46,etage:0,nom:'foyer',tag:['salles'],find:['le|un']}),
            'ileri1':({id:49,etage:0,nom:'ileri1',tag:['salles'],ref:['ileri']}),
            'ileri2':({id:50,etage:0,nom:'ileri2',tag:['salles'],ref:['ileri']}),
            '3A1':({id:51,etage:0,nom:'3A1',tag:['salles'],find:['salle'],ref:['escd 3a']}),
            '3A2':({id:52,etage:0,nom:'3A2',tag:['salles'],find:['salle'],ref:['escd 3a']}),
            'B01':({id:54,etage:0,nom:'B01',tag:['salles','travail'],find:['la|salle']}),
            'accueil':({id:55,etage:0,nom:'accueil',tag:['salles'],find:['l\'|un']}),
            'B07A':({id:56,etage:0,nom:'B07A',tag:['salles','travail'],find:['la|salle']}),
            'B07B':({id:57,etage:0,nom:'B07B',tag:['salles','travail'],find:['la|salle']}),
            'B08B':({id:58,etage:0,nom:'B08B',tag:['salles','travail'],find:['la|salle']}),
            'B08A':({id:59,etage:0,nom:'B08A',tag:['salles','travail'],find:['la|salle']}),
            'entree':({id:60,etage:0,nom:'entree',tag:['salles'],find:['la|salle']}),
            'parking':({id:63,etage:0,nom:'parking',tag:['none','parking'],find:['le|un']}),
            '102':({id:64,etage:1,nom:'102',tag:['salles','travail'],find:['la|salle']}),
            '103A':({id:65,etage:1,nom:'103A',tag:['salles','travail'],find:['la|salle']}),
            '103B':({id:66,etage:1,nom:'103B',tag:['salles','travail'],find:['la|salle']}),
            '104A':({id:67,etage:1,nom:'104A',tag:['salles','travail'],find:['la|salle']}),
            '104B':({id:68,etage:1,nom:'104B',tag:['salles','travail'],find:['la|salle']}),
            '105B':({id:69,etage:1,nom:'105B',tag:['salles','travail'],find:['la|salle']}),
            '105A':({id:70,etage:1,nom:'105A',tag:['salles','travail'],find:['la|salle']}),
            '104C':({id:71,etage:1,nom:'104C',tag:['salles','travail'],find:['la|salle']}),
            'ihedrea1':({id:74,etage:1,nom:'ihedrea1',tag:['salles'],ref:['ihedrea']}),
            'ihedrea2':({id:75,etage:1,nom:'ihedrea2',tag:['salles'],ref:['ihedrea']}),
            'ihedrea3':({id:76,etage:1,nom:'ihedrea3',tag:['salles'],ref:['ihedrea']}),
            'ihedrea4':({id:77,etage:1,nom:'ihedrea4',tag:['salles'],ref:['ihedrea']}),
            '114':({id:79,etage:1,nom:'114',tag:['salles','travail'],find:['la|salle']}),
            '115':({id:80,etage:1,nom:'115',tag:['salles','travail'],find:['la|salle']}),
            '116':({id:81,etage:1,nom:'116',tag:['salles','travail'],find:['la|salle']}),
            '107':({id:83,etage:1,nom:'107',tag:['salles','travail'],find:['la|salle']}),
            '101':({id:86,etage:1,nom:'101',tag:['salles','travail'],find:['la|salle']}),
            '207':({id:88,etage:2,nom:'207',tag:['salles','travail'],find:['la|salle']}),
            '208A':({id:89,etage:2,nom:'208A',tag:['salles','travail'],find:['la|salle']}),
            '208B':({id:90,etage:2,nom:'208B',tag:['salles','travail'],find:['la|salle']}),
            '209A':({id:91,etage:2,nom:'209A',tag:['salles','travail'],find:['la|salle']}),
            '209B':({id:92,etage:2,nom:'209B',tag:['salles','travail'],find:['la|salle']}),
            '210A':({id:93,etage:2,nom:'210A',tag:['salles','travail'],find:['la|salle']}),
            '210B':({id:94,etage:2,nom:'210B',tag:['salles','travail'],find:['la|salle']}),
            '209C':({id:95,etage:2,nom:'209C',tag:['salles','travail'],find:['la|salle']}),
            'idrac1':({id:98,etage:2,nom:'idrac1',tag:['salles'],ref:['idrac']}),
            'idrac2':({id:99,etage:2,nom:'idrac2',tag:['salles'],ref:['idrac']}),
            'ieft1':({id:100,etage:2,nom:'ieft1',tag:['salles'],ref:['ieft']}),
            'ieft2':({id:101,etage:2,nom:'ieft2',tag:['salles'],ref:['ieft']}),
            'sup de com1':({id:102,etage:2,nom:'sup de com1',tag:['salles'],ref:['sup de com']}),
            'sup de com2':({id:103,etage:2,nom:'sup de com2',tag:['salles'],ref:['sup de com']}),
            '201':({id:105,etage:2,nom:'201',tag:['salles','travail'],find:['la|salle']}),
            '202':({id:106,etage:2,nom:'202',tag:['salles','travail'],find:['la|salle']}),
            '204':({id:108,etage:2,nom:'204',tag:['salles','travail'],find:['la|salle']}),
            '307':({id:112,etage:3,nom:'307',tag:['salles','travail'],find:['la|salle']}),
            '308A':({id:113,etage:3,nom:'308A',tag:['salles','travail'],find:['la|salle']}),
            '308B':({id:114,etage:3,nom:'308B',tag:['salles','travail'],find:['la|salle']}),
            '309A':({id:115,etage:3,nom:'309A',tag:['salles','travail'],find:['la|salle']}),
            '309B':({id:116,etage:3,nom:'309B',tag:['salles','travail'],find:['la|salle']}),
            '310B':({id:117,etage:3,nom:'310B',tag:['salles','travail'],find:['la|salle']}),
            '310A':({id:118,etage:3,nom:'310A',tag:['salles','travail'],find:['la|salle']}),
            '309C':({id:119,etage:3,nom:'309C',tag:['salles','travail'],find:['la|salle']}),
            'igefi1':({id:122,etage:3,nom:'igefi1',tag:['salles'],ref:['igefi']}),
            'igefi2':({id:123,etage:3,nom:'igefi2',tag:['salles'],ref:['igefi']}),
            'igefi3':({id:124,etage:3,nom:'igefi3',tag:['salles'],ref:['igefi']}),
            'ifag1':({id:125,etage:3,nom:'ifag1',tag:['salles'],ref:['ifag']}),
            'ifag2':({id:126,etage:3,nom:'ifag2',tag:['salles'],ref:['ifag']}),
            '319':({id:128,etage:3,nom:'319',tag:['salles','travail'],find:['la|salle']}),
            '301':({id:129,etage:3,nom:'301',tag:['salles','travail'],find:['la|salle']}),
            '302':({id:130,etage:3,nom:'302',tag:['salles','travail'],find:['la|salle']}),
            '303':({id:132,etage:3,nom:'303',tag:['salles','travail'],find:['la|salle']}),
        }

        this.local = {'xp_01':({id:34,etage:-1,nom:'Local technique',tag:['Local']}),
        'xp_02':({id:42,etage:-1,nom:'Local technique',tag:['Local']}),
        'local_info':({id:37,etage:-1,nom:'Bureau infomaticien',tag:['none','informaticien']}),
        'xp_03':({id:62,etage:0,nom:'Local technique',tag:['Local']}),
        'xp_04':({id:73,etage:1,nom:'Local technique',tag:['Local']}),
        'xp_05':({id:97,etage:2,nom:'Local technique',tag:['Local']}),
        'xp_05':({id:121,etage:3,nom:'Local technique',tag:['Local']})}

        this.espace = {'espace repos 1':({id:78,etage:1,nom:'espace repos 1',tag:['none','detente']}),
        'espace repos 2':({id:104,etage:2,nom:'espace repos 2',tag:['none','detente']}),
        'espace repos 3':({id:127,etage:3,nom:'espace repos 3',tag:['none','detente']}),}

        this.toilette = {'T01':({id:19,etage:-1,nom:'toilette',tag:['eau']}),
        'T02':({id:20,etage:-1,nom:'toilette',tag:['eau']}),
        'T03':({id:35,etage:-1,nom:'toilette',tag:['toilettes','eau']}),
        'T04':({id:36,etage:-1,nom:'toilette',tag:['toilettes','eau']}),
        'T05':({id:47,etage:0,nom:'toilette',tag:['toilettes','eau']}),
        'T06':({id:48,etage:0,nom:'toilette',tag:['toilettes','eau']}),
        'T07':({id:84,etage:1,nom:'toilette',tag:['toilettes','eau']}),
        'T08':({id:85,etage:1,nom:'toilette',tag:['toilettes','eau']}),
        'T09':({id:109,etage:2,nom:'toilette',tag:['toilettes','eau']}),
        'T10':({id:110,etage:2,nom:'toilette',tag:['toilettes','eau']}),
        'T11':({id:133,etage:3,nom:'toilette',tag:['toilettes','eau']}),
        'T12':({id:134,etage:3,nom:'toilette',tag:['toilettes','eau']})}

        this.escalier = {'01':({id:17,etage:-1,nom:'escalier01',tag:['escalier']}),
        '02':({id:31,etage:-1,nom:'escalier02',tag:['escalier']}),
        '03':({id:53,etage:0,nom:'escalier03',tag:['escalier']}),
        '04':({id:61,etage:0,nom:'escalier04',tag:['escalier']}),
        '05':({id:72,etage:1,nom:'escalier05',tag:['escalier']}),
        '06':({id:82,etage:1,nom:'escalier06',tag:['escalier']}),
        '07':({id:96,etage:2,nom:'escalier07',tag:['escalier']}),
        '08':({id:107,etage:2,nom:'escalier08',tag:['escalier']}),
        '09':({id:120,etage:3,nom:'escalier09',tag:['escalier']}),
        '10':({id:131,etage:3,nom:'escalier10',tag:['escalier']})}

        this.ascenseur = {'01':({id:29,etage:-1,nom:'ascenseur',tag:['ascenseur']}),
        '02':({id:45,etage:0,nom:'ascenseur',tag:['ascenseur']}),
        '03':({id:87,etage:1,nom:'ascenseur',tag:['ascenseur']}),
        '04':({id:111,etage:2,nom:'ascenseur',tag:['ascenseur']}),
        '05':({id:135,etage:3,nom:'ascenseur',tag:['ascenseur']}),
    }
    this.find = [];
    this.object2 = this.Merge(this.salle,this.ecole);
    this.object2 = this.MergeKeyword(this.keyword,this.object2);
    this.object2 = this.MergeKeyword(this.toilette,this.object2);


}
this.MaJ = function(input){
    var str = input;
    if (str.length <= 3) return str;
    var index = str.indexOf('j');
    if(!isNaN(parseInt(str[index+1]))){
        str = this.replaceAt(str,index,'J');
        index = str.indexOf('j');
    }else{
        index = -1;
    }
    return str;
}
this.NoSpace = function(input){
    var str = input
    var index = str.indexOf('J');
    if(index != -1 && index != str.length){
        if(str[index+1]==" "){
            str = this.replaceAt(str,index+1,'');
        }
    }
    return str;
}
this.replaceAt = function(string, index, replace){
    return string.substring(0, index) + replace + string.substring(index + 1);
}
this.Merge = function(array1,array2){
    var obj = [];
    for(var i in array1){
        obj.push(i);
    }
    for(var i in array2){
        obj.push(i);
    }
    return obj;
}
this.MergeKeyword = function(array1,array){
    var obj = [];
    for(var i in array1){
        obj.push(i);
    }
    for(var i in array){
        obj.push(array[i]);
    }
    return obj;
}
this.etage = function(input){
    var regex1 = new RegExp('(etage|jardin|chaus|rdc)','i');
    var res = input.match(regex1);
    var etage = '';
    if(res){
        var flag=false;
        if(res[0] == 'chaus' || res[0] == 'rdc'){
            etage = 0;
            flag = true;
        }
        if(res[1] == 'jardin'){
            etage = -1;
            flag = true;
        }
        var regex2 = new RegExp('[0-9]');
        var res2 = input.match(regex2);
        var temp = [];
        if(res2!=null){
            etage = res2[0];
            flag = true;
        }
        var regex3 = new RegExp('premier','i');
            var res3 = input.match(regex3);
            if(res3!=null){
                etage = 1;
                flag = true;
            }
            var regex3 = new RegExp('deuxieme','i');
            var res3 = input.match(regex3);
            if(res3!=null){
                etage = 2;
                flag = true;
            }
            var regex3 = new RegExp('troisieme','i');
            var res3 = input.match(regex3);
            if(res3!=null){
                etage = 3;
                flag = true;
            }
        if(this.data.length == 0){
            ChangeFloor(etage);
            ShowAll();
        }else if(flag){
            for(var i in this.data){
                if(this.data[i]['etage'] == etage) temp.push(this.data[i]);
            }
        }
        console.log(etage);
        if(res2 == null && !flag){
            return;
        }
        this.data = temp;
    }
}
this.Search = function(input){
    var results = document.getElementById('result');
    var searchElement = document.getElementById('input');
    var divs = results.getElementsByTagName('div');
    if(ev !=40 && ev !=38){
        this.Phrase = input;
    }
    if(selectedResult == -2){
        document.getElementById('hide').style.opacity = '0.5';
        searchElement.value = this.Phrase;
        divs[divs.length-1].className = '';
        selectedResult ++;
    }
    else if(selectedResult > - 1 && ev==38 ){
        document.getElementById('hide').style.opacity = '0';
        document.getElementById('input1').innerHTML = '';
        divs[selectedResult--].className = ''; 
        if(divs[selectedResult]!= undefined){
            searchElement.value = divs[selectedResult].innerHTML;
        }
        if (selectedResult > -1) { 
            divs[selectedResult].className = 'result_focus'; 
        }


    }else if (ev == 40 && selectedResult < divs.length - 1) {
        document.getElementById('hide').style.opacity = '0';
        results.style.display = 'block';
        if (selectedResult > -1) { 
            divs[selectedResult].className = '';
        }   
        divs[++selectedResult].className = 'result_focus';
        if(selectedResult < divs.length){
            searchElement.value = divs[selectedResult].innerHTML;
        }
        if(selectedResult == divs.length-1){
            selectedResult = -2;                
        }
    }else if (ev == 13 && selectedResult >= -1) {
    console.log('in');    
        result(divs[selectedResult]);
    }else{   
        this.liste = [];
        if(input.length > 2){
            var input = input.sansAccent();
            input = this.MaJ(input);
            searchElement.value = input;
            var index = input.lastIndexOf(" ");
            var start = '';
            var word;
            if(index != -1){
                start = input.substr(0,index);
                word = input.substr(index+1,input.length);
            }else{
                word=input;
            }
            var cpt = 0;
            if(start == ''){
                var reg = new RegExp('(?:^)+('+word+')','i');
                for(var i in this.object2){
                    if(cpt<4){
                        var find = this.object2[i].match(reg);
                        if(find){
                            if(this.object2[i] == 'toilette'){
                                this.liste.push(this.object2[i]+'s');
                            }else{
                                this.liste.push(this.object2[i]);
                            }
                            cpt++;
                        }
                    }
                }
                this.Display();
                return;
            }
            if(word =='') return;
            for(var i in this.object2){
                if(this.object2[i].toLowerCase().indexOf(word.toLowerCase()) == 0){
                    if(cpt<4){
                        if(this.keyword[this.object2[i]] != undefined){
                            for(var j in this.keyword[this.object2[i]]){
                                var reg = new RegExp('(?:\\s|^)+('+this.keyword[this.object2[i]][j]+')+(?:\\s|$)','i');
                                var idx = start.lastIndexOf(" ");
                                var temp = start;
                                var find = start.substr(idx+1,start.length);
                                var res = find.match(reg);
                                if(res){
                                    if(res[0] == 'les' || res[0] == 'des'){
                                        this.liste.push(temp+' '+this.object2[i]+'s');
                                        cpt++;
                                    }else{
                                        this.liste.push(temp+' '+this.object2[i]);
                                        cpt++;
                                    }
                                }
                            }
                        }
                        if(this.salle[this.object2[i]] != undefined){
                            for(var j in this.salle[this.object2[i]]){
                                var reg = new RegExp('(?:\\s|^)+('+this.salle[this.object2[i]][j]+')+(?:\\s|$)','i');
                                var idx = start.lastIndexOf(" ");
                                var temp = start;
                                var find = start.substr(idx+1,start.length);
                                var res = find.match(reg);
                                if(res){
                                    console.log(this.object2[i]);
                                    this.liste.push(temp+' '+this.object2[i]);
                                    cpt++;
                                }
                            }
                        }
                        if(this.ecole[this.object2[i]] != undefined){
                            for(var j in this.ecole[this.object2[i]]){
                                var reg = new RegExp('(?:\\s|^)+('+this.ecole[this.object2[i]][j]+')+(?:\\s|$)','i');
                                var idx = start.lastIndexOf(" ");
                                var temp = start;
                                var find = start.substr(idx+1,start.length);
                                var res = find.match(reg);
                                if(res){
                                    this.liste.push(temp+' '+this.object2[i]);
                                    cpt++;
                                }
                            }
                        }
                    }
                    else{
                        break;
                    }
                }
            }
            this.Display();
        }
    }
}
this.Display = function(){
    var results = document.getElementById('result');
    results.innerHTML = '';
    if(this.liste.length != 0){
        results.style.display= 'block';
        var affiche = document.getElementById('input').value;
        var sub = this.liste[0];
        var string = affiche+'<span id="hide">'+sub.substr(affiche.length,sub.length)+'</span>';
        document.getElementById('input1').innerHTML = string;
        for(var i in this.liste){
         div = results.appendChild(document.createElement('div'));

         div.innerHTML = this.liste[i];

         div.addEventListener('click',function(e){
            result(e.target);
        });
     }
     this.Alexis(false);
 }else{
    results.style.display = 'none';
    document.getElementById('input1').innerHTML = '';
    this.Alexis(true);
}
}
this.Find = function(input){
    this.match = [];
    this.data = [];
    this.autocomplete = [];
    this.input = input.sansAccent();
    this.input = this.NoSpace(this.input);
    console.log(this.input);
    var data = this.For(this.ecole);
    this.find['ecole'] = data;
    var data = this.For(this.salle);
    this.find['salle'] = data;
    var data = this.For(this.local);
    this.find['local'] = data;
    this.For(this.keyword);
    console.log(this.match);
    this.Rules();
    this.etage(this.input);
    console.log(this.data);
    console.log(this.find);
    return JSON.stringify(this.data);
}
this.Switch = function(action){
    switch(action){
        case 'ecole':
        for(var i in this.ecole){
            if(this.ecole[i])
                this.data.push(this.ecole[i]);
        }
        break;
        case 'salle':
        for(var i in this.salle){
            if(this.salle[i])
                this.data.push(this.salle[i]);
        }
        break;
        case 'toilette':
        for(var i in this.toilette){
            if(this.toilette[i])
                this.data.push(this.toilette[i]);
        }
        break;
        case 'local':
        for(var i in this.local){
            if(this.local[i])
                this.data.push(this.local[i]);
        }
        break;
        case 'ascenseur':
        for(var i in this.ascenseur){
            if(this.ascenseur[i])
                this.data.push(this.ascenseur[i]);
        }
        break;
        case 'escalier':
        for(var i in this.escalier){
            if(this.escalier[i])
                this.data.push(this.escalier[i]);
        }
        break;
        case 'repos':
        for(var i in this.espace){
            if(this.espace[i])
                this.data.push(this.espace[i]);
        }
        this.data.push(this.salle['cafeteria']);
        break;
        case 'imprimer':
            this.data.push(this.local['xp_02']);
            break;
        case 'eau':
        for(var i in this.toilette){
            if(this.toilette[i])
                this.data.push(this.toilette[i]);
        }
        this.data.push(this.salle['cafeteria']);
        break;
        default:
        for(var i in this.salle){
            var array = this.salle[i]['tag'];
            if(array.length > 1){
                for(var j in array){
                    if(array[j] == action){
                        this.data.push(this.salle[i]);
                        break;
                    }
                }
            }
        }
    }

}
this.For = function(json){
    var flag = false;
    for(var i in json){
        var regex1 = new RegExp(i,'i');
        var res = this.input.match(regex1);
        if(res) {this.match.push(json[i]);flag=true}
    }
    return flag
}
this.Rules = function(){
    for(var i in this.match){
        if(this.ecole[this.match[i]['nom']]){
            for(var j in this.salle){
                if(this.salle[j]['ref'] != undefined){
                    console.log('in');
                    if(this.salle[j]['ref'][0] == this.ecole[this.match[i]['nom']]['nom']){
                        this.data.push(this.salle[j]);
                    }
                }
            }
        }
        else if(this.find[this.match[i]['tag'][0]]){
        }
        else if(this.keyword[this.match[i]['tag'][0]] != undefined){
            this.Switch(this.match[i]['tag'][0]);
        }else if(this.match[i]['tag'][0] != 'salles'){
            if(this.match[i]['tag'][1] != undefined){
                this.Switch(this.match[i]['tag'][1]);
            }
            else{
                console.log(this.match[i]['tag'][0]);
                this.Switch(this.match[i]['tag'][0]);
            }
        }
        else{
            this.data.push(this.match[i]);
        }
    }
}
this.Alexis = function(param){
    if(param)
    {
        document.getElementById('input').style.borderBottom = 'solid 1px grey';
        document.getElementById('input').style.boxShadow  = '0px 2px 2px rgba(0, 0, 0, 0.2);';
        document.getElementById('input').style.borderBottomRightRadius = '25px';
        document.getElementById('input').style.borderBottomLeftRadius = '25px';
    }
    else
    {
        document.getElementById('input').style.borderBottom = 'transparent';
        document.getElementById('input').style.boxShadow  = 'none';
        document.getElementById('input').style.borderBottomRightRadius = '0px';
        document.getElementById('input').style.borderBottomLeftRadius = '0px';
    }
}
}
function result(result){
    var results = document.getElementById('result');
    var searchElement = document.getElementById('input');
    input.value = result.innerHTML;
    results.style.display = 'none';
    selectedResult = -1;
    document.getElementById('input1').innerHTML = '';
    Keyword.Alexis(true);
    Submit(Keyword.Find(document.getElementById('input').value));
}
var selectedResult = -1;
var key = true;
var Keyword = new Keyword();
Keyword.Init();

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;


recognition.addEventListener('result',e=>{
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
    document.getElementById('input').value = transcript;
    if(e.results[0].isFinal){
        Submit(Keyword.Find(document.getElementById('input').value));
        //document.getElementById('button').innerHTML = 'Rec';
        document.getElementById('tour_micro').style.boxShadow = "0 0 0 white";
        recognition.stop();
    }
})
recognition.addEventListener('start',function(){
   // document.getElementById('button').innerHTML = 'Recording';
   document.getElementById('tour_micro').style.boxShadow = "0 0 10px red";

})


