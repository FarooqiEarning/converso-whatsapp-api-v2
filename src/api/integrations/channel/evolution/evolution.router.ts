import { RouterBroker } from '@api/abstract/abstract.router';
import { converso-whatsapp-apiController } from '@api/server.module';
import { ConfigService } from '@config/env.config';
import { Router } from 'express';

export class converso-whatsapp-apiRouter extends RouterBroker {
  constructor(readonly configService: ConfigService) {
    super();
    this.router.post(this.routerPath('webhook/converso-whatsapp-api', false), async (req, res) => {
      const { body } = req;
      const response = await converso-whatsapp-apiController.receiveWebhook(body);

      return res.status(200).json(response);
    });
  }

  public readonly router: Router = Router();
}
