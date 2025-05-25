
    // Elek beillesztése
    async function betolt(id, fajl) {
      const res = await fetch(fajl);
      const szoveg = await res.text();
      document.getElementById(id).innerHTML = szoveg;
    }

    betolt('fejlec-hely', 'fejlec.html');
    betolt('menu-hely', 'menu.html');
    betolt('footer-hely', 'footer.html');

    // Menü kattintásra oldal betöltés
    document.addEventListener('click', async function (e) {
      if (e.target.matches('.menulink')) {
        e.preventDefault();
        const oldal = e.target.getAttribute('href');
        const res = await fetch(oldal);
        const tartalom = await res.text();
        document.getElementById('oldal-tartalom').innerHTML = tartalom;
        history.pushState(null, '', oldal);
      }
    });




    // az aktív oldal legyen kiemelve, ne mindig a főoldal látszódjon hanmem amin éppen van a felhasznáó