# deposit.jsの使い方

## npm installを実行

```
npm install
```

## 環境変数の設定

### INFURAで無料アカウント登録を行い、API Keyを取得する

https://infura.io/

### 取得したAPI Keyを環境変数に設定する

```
export INFURA_API_KEY="YOUR_API_KEY"
```

### ETHのPrivatet Keyを環境変数に設定する

```
export PRIV_KEY="YOUR_PRIV_KEY"
```

### 送金元アドレスを環境変数に設定する

```
export FROM_ADDRESS="YOUR_FROM_ADDRESS"
```

### 送金先アドレスを環境変数に設定する

```
export TO_ADDRESS="YOUR_TO_ADDRESS"
```

## deposit.jsの実行

```
node deposit
```

