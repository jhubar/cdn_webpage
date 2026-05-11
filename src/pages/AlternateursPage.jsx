import { StockListingPage } from "../components/StockListingPage";
import { ALTERNATEURS_STOCK } from "../data/alternateursStock";

export function AlternateursPage() {
  return (
    <StockListingPage
      stock={ALTERNATEURS_STOCK}
      datalistId="liste-marques-alternateurs"
      eyebrow="Stock alternateurs"
      title="Alternateurs d’occasion disponibles"
      intro="Filtrez par marque, modèle ou référence alternateur. Les ampérages sont indicatifs — contrôle selon nos protocoles avant vente."
      codeKey="referenceAlternateur"
      codeLabel="Référence alternateur"
      codePlaceholder="Ex. 9678047280, 231004783R"
      columns={[
        { key: "marque", label: "Marque" },
        { key: "modele", label: "Modèle" },
        { key: "referenceAlternateur", label: "Référence", highlight: true },
        { key: "amperage", label: "Intensité" },
        { key: "volts", label: "Tension" },
        { key: "origine", label: "Origine" },
      ]}
      demandButtonLabel="Demander un alternateur"
      emptySearchHint="référence alternateur"
    />
  );
}
