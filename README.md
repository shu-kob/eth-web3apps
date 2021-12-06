# eth-web3apps

eth-upgrade-timing-estimation.jsはハードフォーク予想日時算出ツール

deposit.jsはJSで署名してETHを送金するツール

ともにINFURA APIを使用

# 使い方

## 共通

### npm installを実行

```
npm install
```

### INFURAでアカウント登録(無料で可能)を行い、API Keyを取得する

https://infura.io/

### 取得したAPI Keyを環境変数に設定する

```
export INFURA_API_KEY="YOUR_API_KEY"
```

## eth-upgrade-timing-estimation.jsの使い方

## 事前準備

ハードフォークのブロック高を環境変数に設定する
```
export ETH_UPGRADE_BLOCKNUMBER=13773000
```

## 実行

```
node eth-upgrade-timing-estimation
```

## deposit.jsの実行

```
node deposit
```

## deposit.jsの使い方

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

