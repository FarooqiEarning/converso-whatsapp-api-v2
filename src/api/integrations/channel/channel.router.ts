import { Router } from 'express';

import { converso-whatsapp-apiRouter } from './converso-whatsapp-api/converso-whatsapp-api.router';
import { MetaRouter } from './meta/meta.router';
import { BaileysRouter } from './whatsapp/baileys.router';

export class ChannelRouter {
  public readonly router: Router;

  constructor(configService: any, ...guards: any[]) {
    this.router = Router();

    this.router.use('/', new converso-whatsapp-apiRouter(configService).router);
    this.router.use('/', new MetaRouter(configService).router);
    this.router.use('/baileys', new BaileysRouter(...guards).router);
  }
}
