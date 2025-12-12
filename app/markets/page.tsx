import { fetchMarketsFromGamma } from "@/lib/polymarket";
import { MarketsClient } from "./MarketsClient";

export const dynamic = "force-dynamic";

/**
 * Markets listing page displaying active prediction markets from Polymarket.
 * Fetches top 40 markets and passes them to client component for sorting and display.
 */
export default async function MarketsPage() {
  // Fetch top 40 markets by volume from Polymarket Gamma API
  const markets = await fetchMarketsFromGamma(40);

  return <MarketsClient markets={markets} />;
}

