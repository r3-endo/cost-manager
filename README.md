# cost-manager
### frontendの構築
- reactのインストール
```code
npx create-react-app cost-manager-frontend --template typescript
```
### backendの構築
- 初期構築
```code
mkdir cost-manager-backend
npm init
```
- Expressとtypescriptのインストール
```code
npm install express --save
npm install @types/express --save-dev
npm install typescript --save-dev
npm install ts-node --save-dev
```

- ESLintとPrettierの導入
```code
npm install --save-dev eslint
npm install --save-dev prettier
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
touch .eslintrc.json
touch .prettierrc
```
- ホットモジュールリロードを有効にする
```
npm install --save-dev nodemon
touch nodemon.json
```
- Prettierを活用
```
npm run format
```
- アプリのビルド
```
npm run build
```
- アプリの起動
```
npm run start
```




