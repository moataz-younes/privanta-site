const EASTERN_DIGITS = "٠١٢٣٤٥٦٧٨٩";

export type ParsedMaatMetric = {
  end: number;
  suffix: string;
  decimals: number;
};

export function normalizeWesternDigits(value: string): string {
  return value.replace(/[٠-٩]/g, (char) => String(EASTERN_DIGITS.indexOf(char)));
}

export function parseMaatMetric(value: string): ParsedMaatMetric | null {
  const normalized = normalizeWesternDigits(value.trim());
  const match = normalized.match(/^([\d.]+)(.*)$/);
  if (!match) return null;

  const end = Number.parseFloat(match[1]);
  if (Number.isNaN(end)) return null;

  const numPart = match[1];
  const decimals = numPart.includes(".") ? (numPart.split(".")[1]?.length ?? 0) : 0;

  return { end, suffix: match[2], decimals };
}

export function formatMaatNumber(value: number, decimals: number, ar: boolean): string {
  const fixed = value.toFixed(decimals);
  if (!ar) return fixed;

  return fixed.replace(/\d/g, (digit) => EASTERN_DIGITS[Number(digit)] ?? digit);
}

export function formatMaatMetric(
  value: number,
  suffix: string,
  decimals: number,
  ar: boolean,
): string {
  return `${formatMaatNumber(value, decimals, ar)}${suffix}`;
}

export function maatMetricMin(end: number): number {
  return end >= 1 ? 1 : 0;
}
