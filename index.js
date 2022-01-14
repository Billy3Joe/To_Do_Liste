// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
// $(window).on("load resize ", function() {
//     var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
//     $('.tbl-header').css({'padding-right':scrollWidth});
//   }).resize();

console.log('rdy');
let tache = document.getElementById("addTache");
let btn = document.getElementById("btnAdd");
let tacheFaire = document.getElementById("TacheAFaire");

btn.addEventListener("click", () => {

    let valeur = tache.value


    if (valeur.trim() == 0) {
        console.log('longuer 0');
        return;
    }

    tacheFaire.innerHTML +=
        `
            <tr>
                <td class="th ">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <p style="font-size: 15px; "> ${valeur}</p>
                        <div>
                        <a  class="transfert"><img style=" cursor: pointer; width:40px; height: 30px;  border-radius: 05px;" src="img/envoyer.jpg" alt=""></a>
                        </div>
                    </div>
                </td>
            </tr>
       `

    tache.value = "";

    let tachefini = document.getElementById("TacheExecute");
    let valider = document.querySelectorAll(".transfert");

    for (let i = 0; i < valider.length; i++) {
        valider[i].addEventListener("click", () => {

            if (confirm("Etes vous sur d'avoir fini votre tache?")) {
                // Clic sur OK
                document.body.style.backgroundColor = "#ccc";
                valider[i].parentNode.parentNode.parentNode.parentNode.remove(); /*Pour supprimer un element*/
                trans = valider[i].parentNode.parentNode.parentNode.parentNode;
                trans2 = valider[i].parentNode.parentNode.children[1];

                trans2.innerHTML = ` <div>
                <a  class="btnDel" onclick="toto()"><img style=" cursor: pointer; width:40px; height: 30px;  border-radius: 05px;" src="img/supprimer.jpg" alt=""></a>
               </div>`
                trans2.className = "couleurTacheExecute";
                tachefini.innerHTML += trans.innerHTML;



            }

        })

    }
})



function toto() {
    let sup = document.querySelectorAll(".btnDel");
    // console.log("toto")
    for (let i = 0; i < sup.length; i++) {

        sup[i].addEventListener("click", () => {

            if (confirm("Etes vous sur de vouloir supprimer votre tache?")) {
                // Clic sur OK 
                // console.log(sup[i].parentNode.parentNode.parentNode.parentNode);
                // document.body.style.backgroundColor = "#ccc";
                sup[i].parentNode.parentNode.parentNode.parentNode.remove(); /*Pour supprimer un element*/

            }

        })

    }
}