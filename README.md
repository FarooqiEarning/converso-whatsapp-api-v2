<h1 align="center">Converso Whatsapp Api</h1>

<div align="center">

[![Docker Image](https://img.shields.io/badge/Docker-image-blue)](https://hub.docker.com/r/evoapicloud/converso-whatsapp-api)
[![Whatsapp Group](https://img.shields.io/badge/Group-WhatsApp-%2322BC18)](https://converso-whatsapp-api.com/whatsapp)
[![Discord Community](https://img.shields.io/badge/Discord-Community-blue)](https://converso-whatsapp-api.com/discord)
[![Postman Collection](https://img.shields.io/badge/Postman-Collection-orange)](https://converso-whatsapp-api.com/postman) 
[![Documentation](https://img.shields.io/badge/Documentation-Official-green)](https://doc.converso-whatsapp-api.com)
[![Feature Requests](https://img.shields.io/badge/Feature-Requests-purple)](https://converso-whatsapp-apiapi.canny.io/feature-requests)
[![Roadmap](https://img.shields.io/badge/Roadmap-Community-blue)](https://converso-whatsapp-apiapi.canny.io/feature-requests)
[![Changelog](https://img.shields.io/badge/Changelog-Updates-green)](https://converso-whatsapp-apiapi.canny.io/changelog)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue)](./LICENSE)
[![Support](https://img.shields.io/badge/Donation-picpay-green)](https://app.picpay.com/user/davidsongomes1998)
[![Sponsors](https://img.shields.io/badge/Github-sponsor-orange)](https://github.com/sponsors/converso-whatsapp-apiAPI)

</div>
  
<div align="center"><img src="./public/images/cover.png"></div>

## Converso Whatsapp Api

Converso Whatsapp Api began as a WhatsApp controller API based on [CodeChat](https://github.com/code-chat-br/whatsapp-api), which in turn implemented the [Baileys](https://github.com/WhiskeySockets/Baileys) library. While originally focused on WhatsApp, Converso Whatsapp Api has grown into a comprehensive platform supporting multiple messaging services and integrations. We continue to acknowledge CodeChat for laying the groundwork.

Today, Converso Whatsapp Api is not limited to WhatsApp. It integrates with various platforms such as Typebot, Chatwoot, Dify, and OpenAI, offering a broad array of functionalities beyond messaging. Converso Whatsapp Api supports both the Baileys-based WhatsApp API and the official WhatsApp Business API, with upcoming support for Instagram and Messenger.

## Looking for a Lightweight Version?
For those who need a more streamlined and performance-optimized version, check out [Converso Whatsapp Api Lite](https://github.com/converso-whatsapp-apiAPI/converso-whatsapp-api-lite). It's designed specifically for microservices, focusing solely on connectivity without integrations or audio conversion features. Ideal for environments that prioritize simplicity and efficiency.

## Types of Connections

Converso Whatsapp Api supports multiple types of connections to WhatsApp, enabling flexible and powerful integration options:

- *WhatsApp API - Baileys*:
  - A free API based on WhatsApp Web, leveraging the [Baileys library](https://github.com/WhiskeySockets/Baileys).
  - This connection type allows control over WhatsApp Web functionalities through a RESTful API, suitable for multi-service chats, service bots, and other WhatsApp-integrated systems.
  - Note: This method relies on the web version of WhatsApp and may have limitations compared to official APIs.

- *WhatsApp Cloud API*:
  - The official API provided by Meta (formerly Facebook).
  - This connection type offers a robust and reliable solution designed for businesses needing higher volumes of messaging and better integration support.
  - The Cloud API supports features such as end-to-end encryption, advanced analytics, and more comprehensive customer service tools.
  - To use this API, you must comply with Meta's policies and potentially pay for usage based on message volume and other factors.

## Integrations

Converso Whatsapp Api supports various integrations to enhance its functionality. Below is a list of available integrations and their uses:

- [Typebot](https://typebot.io/):
  - Build conversational bots using Typebot, integrated directly into converso-whatsapp-api with trigger management.

- [Chatwoot](https://www.chatwoot.com/):
  - Direct integration with Chatwoot for handling customer service for your business.

- [RabbitMQ](https://www.rabbitmq.com/):
  - Receive events from the Converso Whatsapp Api via RabbitMQ.

- [Apache Kafka](https://kafka.apache.org/):
  - Receive events from the Converso Whatsapp Api via Apache Kafka for real-time event streaming and processing.

- [Amazon SQS](https://aws.amazon.com/pt/sqs/):
  - Receive events from the Converso Whatsapp Api via Amazon SQS.

- [Socket.io](https://socket.io/):
  - Receive events from the Converso Whatsapp Api via WebSocket.

- [Dify](https://dify.ai/):
  - Integrate your Converso Whatsapp Api directly with Dify AI for seamless trigger management and multiple agents.

- [OpenAI](https://openai.com/):
  - Integrate your Converso Whatsapp Api with OpenAI for AI capabilities, including audio-to-text conversion, available across all converso-whatsapp-api integrations.

- Amazon S3 / Minio:
  - Store media files received in [Amazon S3](https://aws.amazon.com/pt/s3/) or [Minio](https://min.io/).

## Community & Feedback

We value community input and feedback to continuously improve Converso Whatsapp Api:

### 🚀 Feature Requests & Roadmap
- **[Feature Requests](https://converso-whatsapp-apiapi.canny.io/feature-requests)**: Submit new feature ideas and vote on community proposals
- **[Roadmap](https://converso-whatsapp-apiapi.canny.io/feature-requests)**: View planned features and development progress
- **[Changelog](https://converso-whatsapp-apiapi.canny.io/changelog)**: Stay updated with the latest releases and improvements

### 💬 Community Support
- **[WhatsApp Group](https://converso-whatsapp-api.com/whatsapp)**: Join our community for support and discussions
- **[Discord Community](https://converso-whatsapp-api.com/discord)**: Real-time chat with developers and users
- **[GitHub Issues](https://github.com/converso-whatsapp-apiAPI/converso-whatsapp-api/issues)**: Report bugs and technical issues

### 🔒 Security
- **[Security Policy](./SECURITY.md)**: Guidelines for reporting security vulnerabilities
- **Security Contact**: contato@converso-whatsapp-api.com

## Telemetry Notice

To continuously improve our services, we have implemented telemetry that collects data on the routes used, the most accessed routes, and the version of the API in use. We would like to assure you that no sensitive or personal data is collected during this process. The telemetry helps us identify improvements and provide a better experience for users.

## converso-whatsapp-api Support Premium

Join our converso-whatsapp-api Pro community for expert support and a weekly call to answer questions. Visit the link below to learn more and subscribe:

[Click here to learn more](https://converso-whatsapp-api.com/suporte-pro)

# Donate to the project.

#### Github Sponsors

https://github.com/sponsors/converso-whatsapp-apiAPI

# Content Creator Partners

We are proud to collaborate with the following content creators who have contributed valuable insights and tutorials about Converso Whatsapp Api:

- [Promovaweb](https://www.youtube.com/@promovaweb)
- [Sandeco](https://www.youtube.com/@canalsandeco)
- [Comunidade ZDG](https://www.youtube.com/@ComunidadeZDG)
- [Francis MNO](https://www.youtube.com/@FrancisMNO)
- [Pablo Cabral](https://youtube.com/@pablocabral)
- [XPop Digital](https://www.youtube.com/@xpopdigital)
- [Costar Wagner Dev](https://www.youtube.com/@costarwagnerdev)
- [Dante Testa](https://youtube.com/@dantetesta_)
- [Rubén Salazar](https://youtube.com/channel/UCnYGZIE2riiLqaN9sI6riig)
- [OrionDesign](youtube.com/OrionDesign_Oficial)
- [IMPA 365](youtube.com/@impa365_ofc)
- [Comunidade Hub Connect](https://youtube.com/@comunidadehubconnect)
- [dSantana Automações](https://www.youtube.com/channel/UCG7DjUmAxtYyURlOGAIryNQ?view_as=subscriber)
- [Edison Martins](https://www.youtube.com/@edisonmartinsmkt)
- [Astra Online](https://www.youtube.com/@astraonlineweb)
- [MKT Seven Automações](https://www.youtube.com/@sevenautomacoes)
- [Vamos automatizar](https://www.youtube.com/vamosautomatizar)

## License

Converso Whatsapp Api is licensed under the Apache License 2.0, with the following additional conditions:

1. **LOGO and copyright information**: In the process of using Converso Whatsapp Api's frontend components, you may not remove or modify the LOGO or copyright information in the Converso Whatsapp Api console or applications. This restriction is inapplicable to uses of Converso Whatsapp Api that do not involve its frontend components.

2. **Usage Notification Requirement**: If Converso Whatsapp Api is used as part of any project, including closed-source systems (e.g., proprietary software), the user is required to display a clear notification within the system that Converso Whatsapp Api is being utilized. This notification should be visible to system administrators and accessible from the system's documentation or settings page. Failure to comply with this requirement may result in the necessity for a commercial license, as determined by the producer.

Please contact contato@converso-whatsapp-api.com to inquire about licensing matters.

Apart from the specific conditions mentioned above, all other rights and restrictions follow the Apache License 2.0. Detailed information about the Apache License 2.0 can be found at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0).

© 2025 Converso Whatsapp Api
