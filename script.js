//Variable
let proverb = document.querySelector('.proverb');
let come = document.querySelector('.come');
let btn = document.querySelector('#new-proverb'); 
const proverbs = [
    {
        proverb: '"Ninkii seexda siciisaa dibi dhalay."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Hadal badan haan ma buuxsho."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Gacmo wadajir bey wax ku gooyaan."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Nimaan shaqeysan shaah waa ka xaaraan."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Geel laba jir soo wada mar."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Qunfac iyo jaceyl midna ma qarsamo."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Wuxuu ragu qasday Rabbina raaali ka yahay waa romoobaan."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Tuug tuug ma xado."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Af daboolan waa dahab."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Waayeel tag lama dhahee wuxuu ku tagaa la tusiyaa."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Canjeerada sidey u kala koreyso ayaa loo cunaa."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Nimaad dhashay kuma dhalin."',
        come: 'SOMALI PROVERB'
    },

    {
        proverb: '"Abaal raaga rag baa leh, mid baaqdana haween baa leh, mid soo dhakhsadana xoolaa leh."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Abeesana dhul u eki bay wax ku dishaa, waadaadna dad u eki."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Abuur iyo waano, abuur baa horreysey."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Aar qoyey dacawo la mood."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Af aanad lahayn lama qabto."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Af nooli waa hadlaa Eyna waa ciyaa."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Alif kaa xumaaday Albaqra kaama haro."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Aqoon xumo abaar ka daran."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Awr awr wado iyo nin naagi waddi midna kaama leexdaan."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Awr kala guurtay uurar kala guurey baa ka xun."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Aroos lagama raago, lagumana raago."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Baadi nimaan lahayn bay ag joogtaa."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Balaayo madax la qabtay leedahaye minjo la qabto ma laha."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Bannaankiis mare maradiisa geed ma qabsado."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Been fakatay runi ma gaadho."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Biyo gorore oo meel godan bay isugu tageen."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Biyo sacabbadaadaa looga dhergaa. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Caana daatay dabadood la qabay. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Caano yar iyo ciidan yarba marka la waayo ayaa la tebaa."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Ceebtaaday kow ogtahay, kun looma sheego."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Cidlo ciirsi maleh."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Col hortii baa hub la samaystaa."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Col iyo abaar cagahaagaa lagaga baxaa."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Col ku galay cabsi kugu reeb."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Daacadi ma hungowdo."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dab aan ku gubin kulaylkiisa ma ogid."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dabeecad xuma dad kaa saartay."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dacartuba mar bay malab dhashaa."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dacas kaa wayni dhiiqaday kugu farjiyaan."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dad kaa badan iyo biyo kaa badanba way ku hanfiyaan."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dad wax ugu liita ma tashe ma toshe ma tashiishe."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dad waxa ugu muran badan jaxar iyo jaahil."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dad waxa yaqaan nin tuugsaday iyo nin u taliyey. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dameeraha ta ugu xun baa ugu haraati kulul."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dan iyo xarrago is weyday. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dantaadana, maqaar eybaa loogu seexdaa."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dawaco meeshay macal idood ku baratay, macaluul ugu bakhtidaa."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Deriskaa dagaalkaaga rabaa, dooradaada ceshaas ku dhahaa."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dhagax tuujin iyo taabasho waa isugu mid. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dhalinyaro dhubuq dhubuq hore dhabana hays danbay leedahay. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dooro xaarka way wada cuntaa, af-tirashadeyse isku dhaantaa. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Doqon dib bay wax ka garataa. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dumaal ni ka xishooday kama ilmo dhalo. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dumar iyo dheri toona yar yaraysi malaha. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Dumarka been baa lagu soo xero geliyaa runa waa lagu dhaqaa. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Erey nimaan dhaafin odday ma dhalin. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Eydin geel kolba waa ninkii ku danbeeya. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Faanoole fari kama qodna. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Fadhi iyo fuud yicibeed laysku waa. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Fallaartii cirka loo ganay cid kastoy filo. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Far iyo meel bugtaa is og. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Far keliya Fool ma dhaqdo. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Fardo laysu hayo maxaa laysugu faan "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Faro ka ciyaar dabo ka ciyaar baa dhaanta."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Fulay hooyadii ma goblanto."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Futo iyo dhul isma huraan. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Gaal dil gartiisana sii "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Gabadh nin dhali karaa dhiqi kara."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Gardarro looma garbo yeelo. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Geel indho kuul muxuu ka kasaa kurtunko ku rugtaa?"',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Geel laba jir soo wada mar."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Geeljire, geela waa wada jirtaa, waana kala jirtaa. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Haad habeen kacay waxbaa kiciyey. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Habaar waalid ma hadho. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Habar fadhida legdin la fududaa. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Hadal badani haan ma buuxsho."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Hadal hadal kama dheera."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Hadal iyo hablaba duco la’aan bay tarmaan. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Hadal nin badiyeyna ma dhamayn nin yareeyeyna waxba kama tegin. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Hadal waa dheh iyo dhagayso. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Il ibtilaysan ayaa balaayo tilmaanta. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"inantay hooyadeed hadhuudhka tuntaa iyana haadintay barataa. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"indho is jecel isma eegi karaan. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Ishiisa laga gartaa, Ushiisa lagu tumaa. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"jidh qalaad waa dhul qalaad."',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"jiid aan ku jiidee waa gacmo daalis. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Jinni, Ninkii keenaa bixiya "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Kaadi badane waa loo gogol badiyaa. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"La jiifiyaana bannaan, La joojiyaana bannaan. "',
        come: 'SOMALI PROVERB'
    },
    {
        proverb: '"Labaatan jir intuu geed ka booduu talo ka boodaa. "',
        come: 'SOMALI PROVERB'
    },
];
const newProverb = function(){
    const random = Math.floor(Math.random () * proverbs.length);
    proverb.innerText = proverbs[random] .proverb;  
}
btn.addEventListener('click',newProverb);