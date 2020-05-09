# TEHNICKI OPIS

- ReactJS aplikacija je uradjena pomocu create-react-app.

## BARATANJE FORMAMA

- U formama Login i Register sam koristio standardne React "controlled forms" forme pomocu neizmenjenog koda sa zvanicne React dokumentacije:
  https://reactjs.org/docs/forms.html#handling-multiple-inputs
  Forms > Controlled Components > Handling Multiple Inputs

handleInputChange(event) {
const target = event.target;
const value = target.type === 'checkbox' ? target.checked : target.value;
const name = target.name;

    this.setState({
      [name]: value
    });

}

- Sustina ovog pristupa je da se podaci koje unesemo u polja forme automatski kopiraju u state.
  A iz state-a je citanje i prikupljanje podataka maksimalno jednostavno.

- Na primer kada zelimo da submitujemo podatke iz login forme to uradimo jednostavno sa

  let submitData = {
  email: this.state.email,
  password: this.state.password
  }

i onda te podatke saljemo login funkciji iz servisa za logovanje.

## SERVICES

- U folder services sam stavio funkcije koje nisu deo samog React frameworka a izvrsavaju odredjene usluge,
  pre svega dobavljanje podataka, zapisivanje podataka u memoriju i slanje zahteva API-ju.

- errorService sadrzi univerzalnu funkciju handleError koju koristim za najminimalnije moguce hendlovanje gresaka u ostalim servisima.

Za sada ta funkcija samo ispise "ERROR" i sadrzaj greske u console, cisto da bismo imali bar najosnovniju informaciju da se desila greska.

## OPIS TOKA AUTENTIFIKACIJE

- Informaciju o tome da li smo ulogovani cuvamo u sessionStorage privremenoj memoriji browsera.
- Kada nam zatreba provera da li smo ulogovani, tu proveru vrsimo pozivom funkcije isLoggedIn() iz storageService koja nam saopstava da
  li jesmo ili nismo ulogovani koja to utvrdjuje na bazi tih podataka sacuvanih u sessionStorage.
- Komponenta App koja je praktično "root" tj. nalazi se na vrhu aplikacije i mountuje se samo jednom (kada se aplikacija pokrene) i
  vise nikada se ne uklanja je u nasem resenju najprakticnije mesto da proverimo da li smo ulogovani.
  Tu proveru vrsimo odmah pri vrhu App komponente pozivom isLoggedIn() funkcije.
  I dalje taj podatak prosledjujemo drugim komponentama putem props-a
  loggedIn={loggedIn}

- Komponenta Footer na primer na bazi props.loggedIn nam prikazuje ili link "Sign in" ili "Log out".
  To je nacin na koji sve nase komponente, koje trebaju, saznavaju podatak da li smo ulogovani.

- Nakon uspesnog logovanja ili registrovanja vrsi se upis odgovarajucih podataka u sessionStorage.
  Taj upis vrsi funkcija storeUserData iz storageService. Ta funkcija upotrebljava modul 'jsonwebtoken' jer taj modul zahteva nas API
  za ovu aplikaciju.
- Odmah nakon zapisa novog podatka o logovanju izvrsavamo "reload" browsera pozivom funkcije browserReloadGoHome()
- Tako na najprostiji nacin ponovo izvrsavamo kod App komponente koja ce opet da proveri da li smo ulogovani.
  Tako se menja stanje cele aplikacije iz stanja ulogovan u stanje izlogovan i obrnuto.

## STA NIJE JOS URADJENO?

- Dashboard stranica je placeholder. Jos uvek ne prikazuje prave brojeve sa servera.

- Update posta nije uradjen.

- Nakon dodavanja posta, ostaje na stranici forme. Mora rucno da se klikne na link My posts bi se prikazala lista mojih postova.

- Na stranici "My posts" nakon brisanja posta postoji nekakav bug i stranica nece da se refreshuje kako treba.
  Mora rucno da se jos jednom vrati na stranicu My posts da bi se lista postova ponovo prikazala.

- Prikaz gresaka u formi nije uradjen.

- Search nije uradjen.

- Ime autora posta i broj komentara nisu prikazani.
