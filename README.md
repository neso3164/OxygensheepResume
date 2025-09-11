# 個人履歷網站 Scaffold

此專案為純前端、可直接雙擊開啟 `index.html` 的單頁應用（Hash 路由）。

## 內容分頁
- 首頁 Home：精簡介紹、CTA、快速連結
- 關於 About：自我介紹 + 自傳段落（可長文）
- 作品集 Portfolio：卡片與影片嵌入展示
- 經歷 Experience：時間軸/職涯里程
- 興趣 Interests：興趣與社群活動
- 技能 Skills：技能標籤/熟悉度
- 學歷 Education：學歷與證照
- 聯絡 Contact：信箱、社群連結

## 如何填入內容
1. 文字：到 `src/pages/*.js` 以 placeholder 為例，替換為你的內容。
2. 圖片：將檔案放入 `assets/`（可另外建 `assets/img/`），於頁面中以相對路徑引用。
3. 影片：可使用 YouTube 連結（`VideoEmbed` 元件），或改用 `<video>` 連本機檔案。
4. 導覽列：`src/components/Header.js` 可調整分頁順序與外觀。

## 深色/淺色模式
右上角切換，偏好會儲存在 `localStorage.theme`。

## 開發說明
- 本專案無需建置工具，直接編輯檔案即可。
- 若將來需擴充，可改為任一前端框架，沿用目前分頁與元件切分即可。


