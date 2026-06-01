import { createContext, useContext } from "react";

export const HomeMetricsInViewContext = createContext(false);

export function useHomeMetricsInView(): boolean {
  return useContext(HomeMetricsInViewContext);
}
