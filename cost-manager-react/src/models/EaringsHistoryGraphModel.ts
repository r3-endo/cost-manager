export type EaringsHistoryGraphModel = {
  thisYearDatas: { year: number, month: number, monthName: string, earings: number }[],
  lastYearDatas: { year: number, month: number, monthName: string, earings: number }[],
}