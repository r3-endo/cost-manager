export type ExpenditureGraphModel = {
  categories: Category[];
}

export type Category = {
  label: string; // カテゴリーのラベル(ex.飲食費)
  expenditure: number; // 支出額(ex.3000)
  percentage: number; // 全体の支出のうちどのぐらいのパーセンテージか
  ranking: number;
}