# Express + Sequelize + MySQL
主要是用來快速建立開發用環境的專案模板，不適合直接部屬在正式環境

2024.6.16 
因為團隊開發主要使用`VSCode`所以練習將原docker-compose.yaml方式改寫成.devcontainer去設定開發環境

## 開發環境要求
- 安裝[Docker Desktop](https://www.docker.com/products/docker-desktop/)
- 開發編輯器[VSCode](https://code.visualstudio.com/)安裝插件[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) (讀取.devcontainer設定)
## 啟動專案
1. 開啟VSCode按下快捷鍵`F1`，選擇`dev containers: Reopen in Container`
2. 上述內容成功後進到容器，執行以下指令
    ```bash
    # 啟動Server:3000
    make local
    ```