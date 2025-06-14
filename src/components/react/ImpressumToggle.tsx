import React, { useState } from "react";

const encodedAddress =
  "VG9iaWFzIEt1cnp5ZHltCkhlcnJlbndlZyA2NAoyNjEzNSBPbGRlbmJ1cmc=";
const encodedEmail = "dG9iaWFzLmt1cnp5ZHltQGdtYWlsLmNvbQ==";

export default function ImpressumToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleImpressum = () => {
    setIsOpen(!isOpen);
  };

  const decodedAddress = atob(encodedAddress);
  const decodedEmail = atob(encodedEmail);

  return (
    <div>
      <div className="p-4">
        <div className="mb-4">
          <button
            onClick={toggleImpressum}
            className="flex items-center gap-2 text-lg font-medium transition-colors duration-300 focus:outline-none"
          >
            {/* eslint-disable-next-line style/multiline-ternary */}
            {isOpen ? (
              <>
                {/* <FontAwesomeIcon icon={faChevronUp}/> */}
                Hide Impressum
              </>
            ) : (
              <>
                {/* <FontAwesomeIcon icon={faChevronDown}/> */}
                Show Impressum
              </>
            )}
          </button>
        </div>

        {isOpen && (
          <div>
            <p>Angaben gemäß § 5 TMG | Responsible according to § 5 TMG</p>
            <p>
              {/* Use decoded first address */}
              {decodedAddress.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <p>
              <strong>Kontakt | Contact:</strong> <br />
              E-Mail: {/* Display decoded email */}
              <a
                className="text-blue-600 hover:underline"
                href={`mailto:${decodedEmail}`}
              >
                {decodedEmail}
              </a>
              <br />
            </p>
            <p>
              <strong>
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV |
                Responsible for the content according to § 55 Abs. 2 RStV:
              </strong>
              <br />
              {/* Use decoded second address */}
              {decodedAddress.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <p>
              <strong>Haftungsausschluss: </strong>
              <br />
              <br />
              <strong>Haftung für Inhalte</strong>
              <br />
              <br />
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
              sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              <br />
              <br />
              <strong>Haftung für Links</strong>
              <br />
              <br />
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              <br />
              <br />
              <strong>Urheberrecht</strong>
              <br />
              <br />
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
              <br />
              <br />
              <strong>Datenschutz</strong>
              <br />
              <br />
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
              stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
              ausdrückliche Zustimmung nicht an Dritte weitergegeben.
              <br />
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
              bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich.
              <br />
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
              angeforderter Werbung und Informationsmaterialien wird hiermit
              ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
              ausdrücklich rechtliche Schritte im Falle der unverlangten
              Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
              <br />
            </p>
            <br />
            Website Impressum von{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://www.impressum-generator.de"
            >
              impressum-generator.de
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
