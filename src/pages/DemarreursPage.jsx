import { StockListingPage } from "../components/StockListingPage";
import { DEMARREURS_STOCK } from "../data/demarreursStock";

export function DemarreursPage() {
  return (
    <StockListingPage
      stock={DEMARREURS_STOCK}
      datalistId="liste-marques-demarreurs"
      eyebrow="Stock démarreurs"
      title="Démarreurs d’occasion disponibles"
      intro="Recherche par marque, modèle ou référence démarreur. Compatible avec une grande partie du parc européen — précisez toujours votre motorisation."
      codeKey="referenceDemarreur"
      codeLabel="Référence démarreur"
      codePlaceholder="Ex. 9675667380, 233008786R"
      columns={[
        { key: "marque", label: "Marque" },
        { key: "modele", label: "Modèle" },
        { key: "referenceDemarreur", label: "Référence", highlight: true },
        { key: "volts", label: "Tension" },
        { key: "puissance", label: "Puissance" },
        { key: "origine", label: "Origine" },
      ]}
      demandButtonLabel="Demander un démarreur"
      emptySearchHint="référence démarreur"
    />
  );
}
