# Папа в Деле — Render

Загрузить содержимое этой папки в репозиторий GitHub/GitLab. В Render выбрать New → Blueprint и подключить репозиторий. В render.yaml явно указан бесплатный тариф.

Ручная настройка: Node.js; Build Command: npm install --omit=dev; Start Command: npm start; Instance Type: Free; Health Check Path: /healthz.

Для приёма заявок установить LEADS_WEBHOOK_URL — HTTPS endpoint постоянного хранилища/CRM. Необязательный LEADS_WEBHOOK_TOKEN отправляется как Bearer. Обработчик должен вернуть успешный HTTP-статус после сохранения заявки. Без него на Render форма сообщает об ошибке, чтобы не терять заявки с ложным подтверждением. Локально заявки пишутся в data/leads.jsonl.

Публичные справочники загружаются с основного сайта. Личный кабинет и приложение ведут на park-papa-v-dele.ru.
