



document.addEventListener("DOMContentLoaded", function() { 
    //page chargé
    const envoyer=document.getElementById('envoyer')

    envoyer.addEventListener('click',function(event){ 
        console.log("jai cliqué")
        var resultat=0
        const reponse_a=document.getElementById('Kyoto')
        if(reponse_a.checked === true ) 
        {
            console.log("C'est une mauvaise reponse")
            document.getElementById('resultat1').textContent="C'est une mauvaise reponse !"
            document.getElementById('resultat1').style.color = "red"
            resultat +=0
        }

        const reponse_b=document.getElementById('Tokyo')
        if(reponse_b.checked=== true ) 
        {
            console.log("c'est une bonne reponse")
            document.getElementById('resultat1').textContent = "Bravo , c'est une bonne reponse !"
            document.getElementById('resultat1').style.color="green"
            resultat +=1

        }
        const reponse_c=document.getElementById('Okinawa')
        if(reponse_c.checked === true )
        {
            console.log("C'est une mauvaise reponse")
            document.getElementById('resultat1').textContent="C'est une mauvaise reponse !"
            document.getElementById('resultat1').style.color = "red"
            resultat +=0
        }
        const reponse_a2=document.getElementById('reponse1')
        const reponse_c2=document.getElementById('reponse3')
        if(reponse_a2.checked=== true && reponse_c2.checked===true) 
        {
            console.log("c'est une bonne reponse")
            document.getElementById('resultat2').textContent = "Bravo , c'est une bonne reponse !"
            document.getElementById('resultat2').style.color="green"
            resultat+=1
        }
        const reponse_b2=document.getElementById('reponse2')
        const reponse_d2=document.getElementById('reponse4')
        if ( reponse_b2.checked=== true || reponse_d2.checked===true)
        {
            console.log("C'est une mauvaise reponse")
            document.getElementById('resultat2').textContent="C'est une mauvaise reponse !"
            document.getElementById('resultat2').style.color = "red"
            resultat +=0
        }
        document.getElementById('final').textContent= "NOTE FINALE : " + resultat +"/2"
        document.getElementById('final').style.color = "red"
        
        
    })
    let Quizz = {
        question1 : {
            title : "Quel est la capital du japon?",
            reponse : {
                reponse_a:'Kyoto',
                reponse_b:'Tokyo',
                reponse_c:'Okinawa',
            }
        },
        question2 : {
            title : "Quel est le role du testeur ?",
            reponse : {
                reponse_a2:'Prevenir les defauts',
                reponse_b2:'Corriger les anomalies',
                reponse_c2:'Garantir la qualité',
                reponse_d2:'Juger le travail du developpeur',
            }
        }
}
console.log(Quizz.question1.reponse)
})