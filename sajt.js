function Poruka(){
    var ime=document.getElementById("ime").value;
    var email=document.getElementById("email").value;
    var poruka=document.getElementById("poruka").value;
    if(ime=="" || email=="" || poruka==""){
        window.alert("Unesite podatke");
        return;
    }
    if(provera(email)){
    var rezultat="Primili smo Vasu poruku " + ime + " a ona glasi: " + poruka + ", dodatne informacije cete dobiti na vas email " + email;
    document.getElementById("Ispis").innerText=rezultat;
    document.getElementById("ime").value="";
    document.getElementById("email").value="";
    document.getElementById("poruka").value="";
    }
    else{
        window.alert("Unesite dobrar email");
        return;
    }

}
function provera(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}