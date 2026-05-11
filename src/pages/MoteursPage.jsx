import { StockListingPage } from "../components/StockListingPage";
import { MOTEURS_STOCK } from "../data/moteursStock";

export function MoteursPage() {
  return (
    <StockListingPage
      stock={MOTEURS_STOCK}
      datalistId="liste-marques-moteurs"
      eyebrow="Stock moteurs"
      title="Moteurs d’occasion disponibles"
      intro="Filtrez par marque, modèle ou code moteur. Les données ci-dessous sont un exemple à remplacer par votre inventaire réel."
      codeKey="codeMoteur"
      codeLabel="Code moteur"
      codePlaceholder="Ex. EP6CDTX, K9K"
      columns={[
        { key: "marque", label: "Marque" },
        { key: "modele", label: "Modèle" },
        { key: "codeMoteur", label: "Code moteur", highlight: true },
        { key: "cylindree", label: "Cylindrée / finition" },
        { key: "energie", label: "Énergie" },
      ]}
      demandButtonLabel="Demander un moteur"
      emptySearchHint="référence ou code moteur"
    />
  );
}
