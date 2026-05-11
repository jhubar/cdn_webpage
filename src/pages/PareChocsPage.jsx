import { StockListingPage } from "../components/StockListingPage";
import { PARECHOCS_STOCK } from "../data/parechocsStock";

export function PareChocsPage() {
  return (
    <StockListingPage
      stock={PARECHOCS_STOCK}
      datalistId="liste-marques-parechocs"
      eyebrow="Stock pare-chocs"
      title="Pare-chocs d’occasion disponibles"
      intro="Recherche par marque, modèle ou référence constructeur / gravure pièce. Teinte indicative selon démontage — vérifiez avec nous avant achat."
      codeKey="referenceParechoc"
      codeLabel="Référence pare-choc"
      codePlaceholder="Ex. 1610758480, 5G0807417"
      columns={[
        { key: "marque", label: "Marque" },
        { key: "modele", label: "Modèle" },
        { key: "referenceParechoc", label: "Référence", highlight: true },
        { key: "position", label: "Position" },
        { key: "teinte", label: "Teinte / apprêt" },
        { key: "origine", label: "Origine" },
      ]}
      demandButtonLabel="Demander un pare-choc"
      emptySearchHint="référence pare-choc"
    />
  );
}
