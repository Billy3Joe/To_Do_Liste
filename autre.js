console.log('rdy');
let tache = document.getElementById("addTache");
let cath = document.getElementById("addCath");
let btn = document.getElementById("btnAdd");
let tacheFaire = document.getElementById("TacheAFaire");

btn.addEventListener("click", () => {

    let valeur = tache.value
    let Cathegorie = cath.value


    if (valeur.trim() == 0) {
        console.log('longuer 0');
        return;
    }


    if (Cathegorie.trim() == 0) {
        console.log('longuer 0');
        return;
    }


    tacheFaire.innerHTML +=
        `<tr>
            <td class="th ">
                <div style="display: flex; align-items: center; justify-content: space-between; ">
                    <p style="font-size: 15px; color: rgb(51, 51, 51);">
                        <strong style="font-size: 20px; text-transform: uppercase; color: rgb(50, 130, 205); text-decoration: underline; background-color: white;"> 
                        ${Cathegorie}</strong> : ${valeur}
                    </p>
                    <div class="couleurTacheAFaire"></div>
                    <div>
                    <a  class="transfert"><img style=" cursor: pointer; width:40px; height: 30px;  border-radius: 05px;" src="img/envoyer.jpg" alt=""></a>
                    </div>
                </div>
            </td>
          </tr>
        `

    tache.value = "";
    cath.value = " ";

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
    let Delete = document.querySelectorAll(".btnDel");
    for (let i = 0; i < Delete.length; i++) {
        Delete[i].addEventListener("click", () => {
            if (confirm("Etes - vous sur de vouloir supprimer ?")) {
                Delete[i].parentNode.parentNode.parentNode.parentNode.remove();

            }

        })

    }
}